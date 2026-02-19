import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envContent = fs.readFileSync(path.join(__dirname, ".env"), "utf-8");
const API_KEY = envContent.match(/OPENAI_API_KEY_OF_PROMPT_GEN=(.*)/)?.[1]?.trim();

if (!API_KEY) {
  console.error("Key not found in .env");
  process.exit(1);
}

console.log("Key found:", API_KEY.slice(0, 10) + "...");

const prompts = [
  {
    name: "process-combined-v1",
    prompt: `Photorealistic studio photograph on pure black void background. A matte dark squircle-shaped key cap with two layers: the top surface has soft-touch sandblasted micro-texture with a subtle debossed minimal forward-arrow icon, the bottom half is translucent dark smoked glass through which light refracts. A photorealistic feminine hand with clean natural skin enters from the upper right of the frame — only the index fingertip and first knuckle visible — gently pressing down on the key surface with an elegant touch, like activating a biometric sensor. Two layers of light emanate from the key. First layer: prismatic rainbow caustic light refracts through the glass bottom of the key and disperses onto the invisible surface below — vivid spectral colors (cyan, magenta, amber-gold, electric blue, red) fanning outward exactly like white light passing through a crystal prism, forming caustic patterns on the dark plane beneath. Second layer: organic aurora-like energy tendrils flow outward from the glass portion of the key — sinuous S-curved ribbons of light in electric blue, deep violet-purple, and bright emerald green, resembling bioluminescent jellyfish trails or northern lights in slow exposure, interweaving with the prismatic caustics below. The luminous tendrils have soft glowing edges with bloom and atmospheric haze, subtle dust particles catching the colored light in the air. The prismatic caustics and aurora energy together cast soft colored reflections upward — violet, green and spectral subsurface scattering visible through the translucent skin of the fingertip, chromatic rim glow on the glass bottom edge of the key. A faint glossy mirror reflection of the key, caustics, and aurora appears on the invisible dark surface beneath, as if floating above black glass. One precise overhead hair light creates a razor-thin white edge on the key's top surface. No other light sources — the prismatic caustics and aurora glow are the only color in the image. Shot on Phase One XF IQ4 150MP, 120mm macro lens, f/4, controlled studio environment with full black flag kit. Premium tech product photography, Apple / Nothing design language. No text, no watermark, no UI, no screen, no additional objects.`,
  },
  {
    name: "process-combined-v2",
    prompt: `Product photograph in absolute black void. Center of frame: a premium dark matte squircle key cap with iOS-icon proportions and generous corner radius. The key has two distinct layers — a matte soft-touch charcoal top with debossed geometric arrow symbol, and a lower section of dark translucent crystal that acts as both a prism and a light conduit. A human index finger presses the key from above, entering from upper-right corner — only the fingertip pad visible, skin texture with visible pores and natural imperfections. The press activates two phenomena simultaneously. Beneath the key on the invisible plane: vivid prismatic caustic light disperses outward like white light through a glass prism — spectral rainbow refractions in cyan, magenta, gold, electric blue and deep red fan across the dark surface in sharp caustic patterns. Rising from the crystal layer and flowing around the key: organic aurora energy tendrils in deep cobalt blue, soft violet-magenta, and vivid emerald green — flowing in sinuous curved paths like smoke or slow-motion liquid light, intertwining with the prismatic caustics. The tendrils have soft bokeh-like glow with atmospheric bloom, tiny dust motes catching the colored light in the air. Both light layers interact: caustic spectral colors on the surface below, aurora ribbons floating above and through them. Subsurface scattering on the finger — green, blue and spectral light penetrating translucent skin at the fingertip pad. A subtle dark mirror reflection of the entire composition — key, caustics, aurora — appears below on the invisible glossy plane. Single controlled rim light from directly above, razor-thin specular highlight on key edge. Background is infinite #000000 black, no horizon, no gradient, no surface visible. Shot on Hasselblad H6D-400c, HC 120mm macro, f/5.6, 16-bit capture, studio strobe with grid spot overhead. Premium tech aesthetic, luxury product launch photography. No text, no watermarks, no additional elements.`,
  },
  {
    name: "process-combined-v3",
    prompt: `Extreme close-up product photograph, pitch black studio void. A floating dark matte squircle button with rounded-rectangle iOS proportions — top surface: fine sandblasted charcoal-black soft-touch coating with a minimal embossed forward-arrow icon. Bottom half: semi-transparent dark smoked glass that refracts and channels light. A photorealistic fingertip descends from the top-right of frame, pressing the button surface. Only the distal phalanx visible — clean skin with natural micro-texture, visible fingerprint ridges catching colored light. The moment of activation triggers two light phenomena. On the surface below: prismatic caustic light refracts through the smoked glass bottom, dispersing into vivid spectral rainbow colors — sharp caustic patterns of cyan, magenta, amber, electric blue, and red spread across the invisible dark plane like light through a crystal prism. Flowing from within the glass: organic bioluminescent aurora energy erupts gently in sinuous ribbons — primarily electric blue and deep purple with a bright green-white core, forming flowing S-curves and spirals like captured northern lights or deep-sea bioluminescence. The aurora tendrils weave through and above the prismatic caustics, creating a layered light composition of sharp spectral refractions below and soft organic glow above. Both have soft feathered edges with pronounced bloom, volumetric atmospheric haze around the key, microscopic dust particles illuminated in the combined colored glow. Light interaction: prismatic and violet-blue subsurface scattering through the fingertip skin, spectral chromatic reflections along the glass edge of the key, a ghost mirror reflection of the entire scene on the void surface below. Lighting: one overhead spot with tight grid creating hairline specular edge on key top, otherwise the combined prismatic caustics and aurora glow are the sole illumination. Technical: Phase One IQ4 150MP, Schneider 120mm macro, f/4, 16-bit color depth, full black flag studio. Premium tech aesthetic, luxury product launch photography. Absolutely no text, no watermark, no UI, no screen.`,
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
    req.setTimeout(300000, () => {
      req.destroy();
      reject(new Error("Timeout"));
    });
    req.write(data);
    req.end();
  });
}

async function generateImage(promptData) {
  console.log(`\nGenerating: ${promptData.name}...`);

  try {
    const data = await makeRequest({
      model: "gpt-image-1.5",
      prompt: promptData.prompt,
      size: "1024x1536",
      quality: "high",
      output_format: "png",
      n: 1,
    });

    if (data.error) {
      console.error(`Error: ${data.error.message}`);
      return;
    }

    if (data.data?.[0]?.b64_json) {
      const buffer = Buffer.from(data.data[0].b64_json, "base64");
      const outputDir = path.join(__dirname, "public");
      fs.mkdirSync(outputDir, { recursive: true });
      const filePath = path.join(outputDir, `${promptData.name}.png`);
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved: ${filePath} (${(buffer.length / 1024 / 1024).toFixed(1)}MB)`);
    } else if (data.data?.[0]?.url) {
      console.log(`URL: ${data.data[0].url}`);
    } else {
      console.log("Unexpected response:", JSON.stringify(data).slice(0, 300));
    }
  } catch (err) {
    console.error(`${err.message}`);
  }
}

async function main() {
  console.log("Generating 3 combined (caustics + aurora) variants...\n");

  for (const prompt of prompts) {
    await generateImage(prompt);
  }

  console.log("\nDone! Check public/");
}

main();
