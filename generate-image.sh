#!/bin/bash
set -e

API_KEY=$(grep OPENAI_API_KEY_OF_PROMPT_GEN ~/Documents/apps/ai-agency/.env | cut -d= -f2)
OUTPUT_DIR=~/Documents/apps/ai-agency/public

mkdir -p "$OUTPUT_DIR"

generate() {
  local name=$1
  local prompt=$2

  echo "🎨 Генерирую: $name..."

  response=$(curl -s -X POST "https://api.openai.com/v1/images/generations" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"model\": \"gpt-image-1\",
      \"prompt\": \"$prompt\",
      \"size\": \"1024x1536\",
      \"quality\": \"high\",
      \"n\": 1
    }")

  # Check for error
  error=$(echo "$response" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('error',{}).get('message',''))" 2>/dev/null)
  if [ -n "$error" ]; then
    echo "❌ Ошибка: $error"
    return
  fi

  # Extract b64_json and save
  echo "$response" | python3 -c "
import sys, json, base64
d = json.load(sys.stdin)
if 'data' in d and len(d['data']) > 0:
    if 'b64_json' in d['data'][0]:
        img = base64.b64decode(d['data'][0]['b64_json'])
        with open('$OUTPUT_DIR/$name.png', 'wb') as f:
            f.write(img)
        print('✅ Сохранено: $OUTPUT_DIR/$name.png')
    elif 'url' in d['data'][0]:
        print('URL: ' + d['data'][0]['url'])
"
}

echo "🚀 Генерация изображений для блока Process..."
echo ""

generate "process-result" "Photorealistic over-the-shoulder shot of a person looking at a beautiful modern web application on a large curved monitor in a dark premium office. The screen glows with a sleek dark-themed dashboard UI with charts and clean typography. Ambient purple and blue neon lighting reflects off the glossy desk surface. The mood is the product is alive and ready to launch. Cinematic dramatic lighting, tech noir aesthetic, high-end professional photography, shallow depth of field."

generate "process-workspace" "Photorealistic wide shot of a modern dark developer workspace at night. Multiple ultrawide monitors showing elegant code, UI design mockups in Figma, and a live dark-themed web application. Soft ambient lighting from screens casting blue and purple glow, premium mechanical keyboard, cup of specialty coffee, minimal organized desk. The vibe is a genius works here and builds incredible digital products. Cinematic moody lighting, tech atmosphere, editorial photography style, high-end setup."

generate "process-sketch-to-product" "Photorealistic close-up of a hand holding a white napkin with a rough pen sketch of a simple app wireframe. In the blurred background, a large monitor displays the exact same idea transformed into a stunning polished dark-themed web application with beautiful UI, glowing elements, and professional typography. The dramatic contrast between the rough napkin sketch in the foreground and the pixel-perfect finished product in the background tells the whole story of transformation. Dark moody office environment, dramatic cinematic rim lighting, shallow depth of field, the napkin is sharp and the screen is slightly blurred but recognizable. High-end editorial photography."

echo ""
echo "✨ Готово! Картинки в папке public/"
