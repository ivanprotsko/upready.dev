import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import GradientBandBackground from "@/components/shadcn-space/animations/GradientBandBackground";

const LoginForm = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full flex min-h-screen items-stretch">
        {/* LEFT PANEL: Branding & Animation */}

        <div className="hidden lg:flex lg:w-lg dark">
          <div className="flex relative bg-background flex-col items-center justify-center p-16 text-center text-foreground w-full">
            <div className="z-10 flex flex-col gap-6 items-center max-w-sm">
              {/* Logo in Circle */}
              <div>
                <img
                  src="https://images.shadcnspace.com/assets/logo/logo-icon-white.svg"
                  alt="Logo"
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-3xl font-medium">
                Welcome Back to Your Creative Space
              </p>
            </div>

            {/* Background Animation - Sharp Rays Setting */}
            <div className="absolute inset-0 z-0">
              <GradientBandBackground
                gradientColors={["#00bcff", "#155dfc"]}
                angle={12}
                noise={0.2}
                blindCount={12}
                blindMinWidth={50}
                spotlightRadius={0.5}
                spotlightSoftness={1}
                spotlightOpacity={1}
                mouseDampening={0.15}
                distortAmount={0}
                shineDirection="left"
                mixBlendMode="screen"
                className={undefined}
                dpr={undefined}
              />
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md flex flex-col gap-6 items-center">
            {/* Logo Header */}
            <div>
              <img
                src="https://images.shadcnspace.com/assets/logo/logo-icon-black.svg"
                alt="Logo"
                width={40}
                height={40}
                className="dark:invert"
              />
            </div>

            <div className="text-center flex flex-col gap-1">
              <p className="text-2xl font-medium text-foreground">
                Welcome to Shadcn Space
              </p>
              <p className="text-sm font-normal text-muted-foreground">
                Login to your account now
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center justify-center gap-3 w-full">
              <Button
                variant="outline"
                className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium hover:cursor-pointer"
              >
                <img
                  src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                  alt="Google"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                Sign in with Google
              </Button>
              <Button
                variant="outline"
                className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium hover:cursor-pointer"
              >
                <img
                  src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                  alt="Github"
                  width={16}
                  height={16}
                  className="w-4 h-4 dark:invert"
                />
                Sign in with Github
              </Button>
            </div>

            {/* Divider */}
            <div className="w-full flex items-center gap-3 text-sm font-normal text-muted-foreground before:content-[''] before:h-px before:flex-1 before:bg-border after:content-[''] after:h-px after:flex-1 after:bg-border">
              or sign in with
            </div>

            {/* Email/Password Form */}
            <form className="space-y-6 w-full">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@shadcnspace.com"
                    className="border-border bg-background text-foreground"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    Password*
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="border-border bg-background text-foreground"
                    required
                  />
                </div>
                <div className="flex items-center justify-between text-sm flex-wrap gap-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="remember"
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:cursor-pointer"
                    />
                    <Label
                      htmlFor="remember"
                      className="text-muted-foreground font-normal cursor-pointer"
                    >
                      Remember this device
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="text-foreground text-sm font-medium hover:underline underline-offset-4 transition-all"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full rounded-lg hover:cursor-pointer"
              >
                Sign in
              </Button>
              <p className="text-center text-sm font-normal text-muted-foreground">
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  className="text-foreground font-medium hover:underline underline-offset-4 transition-all"
                >
                  Create an account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
