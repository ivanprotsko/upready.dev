const fs = require("fs");
const path = require("path");

const API_KEY = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_OF_PROMPT_GEN;

if (!API_KEY) {
  console.error("❌ Нет ключа. Запусти так:");
  console.error(
    '   OPENAI_API_KEY="sk-..." node generate-image.js'
  );
  process.exit(1);
}

const prompts = [
  {
    name: "process-result",
    prompt: `Photorealistic over-the-shoulder shot of a person looking at a beautiful modern web application on a large curved monitor in a dark premium office. The screen glows with a sleek dark-themed dashboard UI with charts and clean typography. Ambient purple and blue neon lighting reflects off the glossy desk surface. The mood is "the product is alive and ready to launch". Cinematic dramatic lighting, tech noir aesthetic, high-end professional photography, shallow depth of field. Aspect ratio 3:4 portrait.`,
  },
  {
    name: "process-workspace",
    prompt: `Photorealistic wide shot of a modern dark developer workspace at night. Multiple ultrawide monitors showing elegant code, UI design mockups in Figma, and a live dark-themed web application. Soft ambient lighting from screens casting blue and purple glow, premium mechanical keyboard, cup of specialty coffee, minimal organized desk. The vibe is "a genius works here and builds incredible digital products". Cinematic moody lighting, tech atmosphere, editorial photography style, high-end setup. Aspect ratio 3:4 portrait.`,
  },
  {
    name: "process-sketch-to-product",
    prompt: `Photorealistic close-up of a hand holding a white napkin with a rough pen sketch of a simple app wireframe. In the blurred background, a large monitor displays the exact same idea transformed into a stunning polished dark-themed web application with beautiful UI, glowing elements, and professional typography. The dramatic contrast between the rough napkin sketch in the foreground and the pixel-perfect finished product in the background tells the whole story of transformation. Dark moody office environment, dramatic cinematic rim lighting, shallow depth of field, the napkin is sharp and the screen is slightly blurred but recognizable. High-end editorial photography. Aspect ratio 3:4 portrait.`,
  },
];

async function generateImage(promptData) {
  console.log(`\n🎨 Генерирую: ${promptData.name}...`);

  const response = await fetch(
    "https://api.openai.com/v1/images/generations",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt: promptData.prompt,
        size: "1024x1536",
        quality: "high",
        n: 1,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(`❌ Ошибка для ${promptData.name}:`, error);
    return;
  }

  const data = await response.json();

  // gpt-image-1 returns base64
  if (data.data && data.data[0]) {
    const imageData = data.data[0].b64_json || data.data[0].url;

    if (data.data[0].b64_json) {
      const buffer = Buffer.from(data.data[0].b64_json, "base64");
      const filePath = path.join(__dirname, "public", `${promptData.name}.png`);
      fs.mkdirSync(path.join(__dirname, "public"), { recursive: true });
      fs.writeFileSync(filePath, buffer);
      console.log(`✅ Сохранено: ${filePath}`);
    } else if (data.data[0].url) {
      console.log(`✅ URL: ${data.data[0].url}`);
      // Download the image
      const imgResponse = await fetch(data.data[0].url);
      const arrayBuffer = await imgResponse.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filePath = path.join(__dirname, "public", `${promptData.name}.png`);
      fs.mkdirSync(path.join(__dirname, "public"), { recursive: true });
      fs.writeFileSync(filePath, buffer);
      console.log(`✅ Сохранено: ${filePath}`);
    }
  }
}

async function main() {
  console.log("🚀 Генерация изображений для блока Process...\n");

  for (const prompt of prompts) {
    await generateImage(prompt);
  }

  console.log("\n✨ Готово! Картинки в папке public/");
}

main().catch(console.error);
