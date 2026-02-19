import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read API key from .env
const envContent = fs.readFileSync(path.join(__dirname, ".env"), "utf-8");
const API_KEY = envContent.match(/OPENAI_API_KEY_OF_PROMPT_GEN=(.*)/)?.[1]?.trim();

if (!API_KEY) {
  console.error("❌ Ключ не найден в .env");
  process.exit(1);
}

console.log("🔑 Ключ найден:", API_KEY.slice(0, 10) + "...");

const prompts = [
  {
    name: "process-result",
    prompt: "Photorealistic over-the-shoulder shot of a person looking at a beautiful modern web application on a large curved monitor in a dark premium office. The screen glows with a sleek dark-themed dashboard UI with charts and clean typography. Ambient purple and blue neon lighting reflects off the glossy desk surface. The mood is the product is alive and ready to launch. Cinematic dramatic lighting, tech noir aesthetic, high-end professional photography, shallow depth of field.",
  },
  {
    name: "process-workspace",
    prompt: "Photorealistic wide shot of a modern dark developer workspace at night. Multiple ultrawide monitors showing elegant code, UI design mockups in Figma, and a live dark-themed web application. Soft ambient lighting from screens casting blue and purple glow, premium mechanical keyboard, cup of specialty coffee, minimal organized desk. The vibe is a genius works here and builds incredible digital products. Cinematic moody lighting, tech atmosphere, editorial photography style, high-end setup.",
  },
  {
    name: "process-sketch-to-product",
    prompt: "Photorealistic close-up of a hand holding a white napkin with a rough pen sketch of a simple app wireframe. In the blurred background, a large monitor displays the exact same idea transformed into a stunning polished dark-themed web application with beautiful UI, glowing elements, and professional typography. The dramatic contrast between the rough napkin sketch in the foreground and the pixel-perfect finished product in the background tells the whole story of transformation. Dark moody office environment, dramatic cinematic rim lighting, shallow depth of field, the napkin is sharp and the screen is slightly blurred but recognizable. High-end editorial photography.",
  },
];

function makeRequest(body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const options = {
      hostname: "api.openai.com",
      port: 443,
      path: "/v1/images/generations",
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
      },
    };

    const req = https.request(options, (res) => {
      let chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const body = Buffer.concat(chunks).toString();
        try {
          resolve(JSON.parse(body));
        } catch {
          reject(new Error("Failed to parse: " + body.slice(0, 200)));
        }
      });
    });

    req.on("error", reject);
    req.setTimeout(180000, () => {
      req.destroy();
      reject(new Error("Timeout"));
    });
    req.write(data);
    req.end();
  });
}

async function generateImage(promptData) {
  console.log(`\n🎨 Генерирую: ${promptData.name}...`);

  try {
    const data = await makeRequest({
      model: "gpt-image-1",
      prompt: promptData.prompt,
      size: "1024x1536",
      quality: "high",
      n: 1,
    });

    if (data.error) {
      console.error(`❌ Ошибка: ${data.error.message}`);
      return;
    }

    if (data.data?.[0]?.b64_json) {
      const buffer = Buffer.from(data.data[0].b64_json, "base64");
      const outputDir = path.join(__dirname, "public");
      fs.mkdirSync(outputDir, { recursive: true });
      const filePath = path.join(outputDir, `${promptData.name}.png`);
      fs.writeFileSync(filePath, buffer);
      console.log(`✅ Сохранено: ${filePath} (${(buffer.length / 1024 / 1024).toFixed(1)}MB)`);
    } else if (data.data?.[0]?.url) {
      console.log(`✅ URL: ${data.data[0].url}`);
    } else {
      console.log("⚠️ Неожиданный ответ:", JSON.stringify(data).slice(0, 300));
    }
  } catch (err) {
    console.error(`❌ ${err.message}`);
  }
}

async function main() {
  console.log("🚀 Генерация 3 изображений для блока Process...\n");

  for (const prompt of prompts) {
    await generateImage(prompt);
  }

  console.log("\n✨ Готово! Проверь папку public/");
}

main();
