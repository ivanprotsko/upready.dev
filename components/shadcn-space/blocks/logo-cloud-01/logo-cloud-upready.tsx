import { Marquee } from "@/components/shadcn-space/animations/marquee";
import {
  AnthropicLogo,
  OpenAILogo,
  GeminiLogo,
  MetaLogo,
  USDTLogo,
  NextjsLogo,
  SupabaseLogo,
  PostgreSQLLogo,
  DockerLogo,
  LinuxLogo,
  N8nLogo,
  CalcomLogo,
} from "@/components/logos/tech-logos";

const logos = [
  { component: AnthropicLogo, name: "Anthropic" },
  { component: NextjsLogo, name: "Next.js" },
  { component: OpenAILogo, name: "OpenAI" },
  { component: SupabaseLogo, name: "Supabase" },
  { component: GeminiLogo, name: "Google Gemini" },
  { component: DockerLogo, name: "Docker" },
  { component: MetaLogo, name: "Meta Llama" },
  { component: PostgreSQLLogo, name: "PostgreSQL" },
  { component: USDTLogo, name: "USDT" },
  { component: LinuxLogo, name: "Linux" },
  { component: N8nLogo, name: "n8n" },
  { component: CalcomLogo, name: "Cal.com" },
];

const LogoCloudUpready = () => {
  return (
    <div className="py-8 sm:py-10 relative overflow-hidden">
      <p className="text-center text-xs text-muted-foreground mb-6 tracking-wide uppercase">
        Powered by AI and open-source
      </p>

      <Marquee
        pauseOnHover
        className="[--duration:35s] [--gap:3rem] p-0"
      >
        {logos.map(({ component: Logo, name }) => (
          <div
            key={name}
            className="flex items-center opacity-50 hover:opacity-80 transition-opacity duration-200 text-foreground px-6"
          >
            <Logo className="h-6 w-auto" />
          </div>
        ))}
      </Marquee>

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default LogoCloudUpready;
