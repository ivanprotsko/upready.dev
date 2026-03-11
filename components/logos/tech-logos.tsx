import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function AnthropicLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Anthropic"
    >
      <text
        x="0"
        y="22"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="22"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        anthropic
      </text>
    </svg>
  );
}

export function OpenAILogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="OpenAI"
    >
      <path
        d="M25.8 11.3a7.1 7.1 0 0 0-.6-5.8 7.2 7.2 0 0 0-7.8-3.5A7.2 7.2 0 0 0 12 .1a7.2 7.2 0 0 0-6.9 5 7.2 7.2 0 0 0-4.8 3.5 7.2 7.2 0 0 0 .9 8.4 7.2 7.2 0 0 0 .6 5.8 7.2 7.2 0 0 0 7.8 3.5 7.2 7.2 0 0 0 5.4 2 7.2 7.2 0 0 0 6.9-5 7.2 7.2 0 0 0 4.8-3.5 7.2 7.2 0 0 0-.9-8.5zM17.4 24.8a5.3 5.3 0 0 1-3.4-1.2l.2-.1 5.7-3.3a.9.9 0 0 0 .5-.8v-8l2.4 1.4v.2a5.3 5.3 0 0 1-5.4 7.8zm-11.5-5a5.3 5.3 0 0 1-.6-3.6l.2.1 5.7 3.3a.9.9 0 0 0 .9 0l7-4v2.8l-5.8 3.4a5.3 5.3 0 0 1-7.4-2zm-1.5-12.3a5.3 5.3 0 0 1 2.8-2.3v6.7a.9.9 0 0 0 .4.8l6.9 4-2.4 1.4H12L6.2 14a5.3 5.3 0 0 1-.8-6.5zm13.8 3.2-3.5-2-3.5 2V8.6L14 6.6l3.5 2v2.1zm1.2-3.6-.2-.1L14.5 4a5.3 5.3 0 0 1 8 5.6v6.6l-2.4-1.4-.2-6.7zm-2 8.3-1.4.8-1.4-.8v-1.6l1.4-.8 1.4.8v1.6zm-4.5 2.4-2.4-1.4V9.7l2.4 1.4v6.7zm6.8-1.4-2.4 1.4v-6.7l2.4-1.4v6.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GeminiLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 90 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Google Gemini"
    >
      <path
        d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm0 2c5.5 0 10 4.5 10 10 0 2.5-.9 4.8-2.4 6.6L7.4 6.4C9.2 4.9 11.5 4 14 4zM4 14c0-2.5.9-4.8 2.4-6.6l14.2 14.2C18.8 23.1 16.5 24 14 24 8.5 24 4 19.5 4 14z"
        fill="currentColor"
      />
      <text
        x="30"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="18"
        fill="currentColor"
      >
        Gemini
      </text>
    </svg>
  );
}

export function MetaLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Meta Llama"
    >
      <path
        d="M4 20V8l5 6 5-6v12M24 8v12M30 20V8l8 12V8M44 8h-5v12h5M39 14h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="50"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="16"
        fill="currentColor"
      >
        Llama
      </text>
    </svg>
  );
}

export function USDTLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 60 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="USDT Tether"
    >
      <circle cx="14" cy="14" r="12" fill="currentColor" fillOpacity="0.15" />
      <text
        x="14"
        y="18"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="currentColor"
      >
        ₮
      </text>
      <text
        x="32"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="currentColor"
      >
        USDT
      </text>
    </svg>
  );
}

export function NextjsLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Next.js"
    >
      <circle cx="14" cy="14" r="12" fill="currentColor" />
      <path
        d="M11 9v10l8-10v10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="30"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill="currentColor"
      >
        Next.js
      </text>
    </svg>
  );
}

export function SupabaseLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 90 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Supabase"
    >
      <path
        d="M15 3 4 16h8v9l11-13h-8z"
        fill="currentColor"
      />
      <text
        x="30"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="17"
        fill="currentColor"
      >
        Supabase
      </text>
    </svg>
  );
}

export function PostgreSQLLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 108 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="PostgreSQL"
    >
      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="14" cy="14" r="5" fill="currentColor" />
      <path
        d="M14 3v3M14 22v3M3 14h3M22 14h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="30"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="15"
        fill="currentColor"
      >
        PostgreSQL
      </text>
    </svg>
  );
}

export function DockerLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Docker"
    >
      <rect x="2" y="10" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="8" y="10" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="14" y="10" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="8" y="4" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="14" y="4" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M20 12.5s1-1 3 0c.5 2 0 4-2 5H3c-2-1-2-4 0-5 0-1 1-2 2-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M22 9.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text
        x="30"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="17"
        fill="currentColor"
      >
        Docker
      </text>
    </svg>
  );
}

export function LinuxLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 70 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Linux"
    >
      <ellipse cx="14" cy="10" rx="7" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="11.5" cy="9" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="9" r="1.5" fill="currentColor" />
      <path
        d="M11 13c1 1.5 4 1.5 5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 18c-1 0-3 1-3 3h18c0-2-2-3-3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M9 18v-2M19 18v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text
        x="30"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="17"
        fill="currentColor"
      >
        Linux
      </text>
    </svg>
  );
}

export function N8nLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 50 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="n8n"
    >
      <text
        x="2"
        y="21"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="currentColor"
        letterSpacing="1"
      >
        n8n
      </text>
    </svg>
  );
}

export function CalcomLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 70 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      aria-label="Cal.com"
    >
      <rect x="2" y="4" width="22" height="21" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 4V2M18 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 10h22" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="15" width="4" height="4" rx="1" fill="currentColor" />
      <text
        x="28"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="17"
        fill="currentColor"
      >
        Cal.com
      </text>
    </svg>
  );
}
