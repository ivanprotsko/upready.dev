import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ZeroGravity from "@/components/shadcn-space/animations/ZeroGravity";

const LoginForm = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto py-10 relative z-10 rounded-lg">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className="px-16 py-8">
            <div className="w-full sm:min-w-sm max-w-sm flex flex-col gap-10 items-start justify-start">
              {/* logo */}
              <img
                src="https://images.shadcnspace.com/assets/logo/shadcnspace-logo-black.svg"
                alt="logo"
                width={147}
                height={40}
                className="dark:invert"
              />
              <div className="flex flex-col gap-6 w-full">
                <p className="text-3xl font-medium text-foreground">Sign In.</p>
                <form className="flex flex-col gap-4 w-full">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Username or email*"
                    className="border-border bg-background dark:bg-background text-foreground"
                    required
                  />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password*"
                    className="border-border bg-background dark:bg-background text-foreground"
                    required
                  />
                  <div className="flex items-center justify-between text-sm flex-wrap gap-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="remember"
                        className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:cursor-pointer"
                      />
                      <Label
                        htmlFor="remember"
                        className="text-muted-foreground font-normal cursor-pointer leading-0"
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
                  <Button
                    size="lg"
                    className="w-full rounded-lg transition-all"
                  >
                    Login
                  </Button>
                  <p className="text-center text-sm font-normal text-muted-foreground -mt-0.5">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-foreground font-medium hover:underline underline-offset-4 transition-all"
                    >
                      Sign In
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <Separator orientation="vertical"  />
          <Separator orientation="horizontal" className="lg:hidden" />
          <div className="px-16 py-8">
            <div className="w-full sm:min-w-sm max-w-sm flex flex-col gap-8 items-start justify-start">
              {/* social buttons */}
              <div className="flex flex-col items-center justify-center gap-3 w-full">
                <Button
                  variant="outline"
                  className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium w-full dark:bg-background dark:hover:bg-background/70"
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
                  className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium w-full dark:bg-background dark:hover:bg-background/70"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-twitter-x.svg"
                    alt="Twitter"
                    width={16}
                    height={16}
                    className="w-4 h-4 dark:invert"
                  />
                  Sign in with Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium w-full dark:bg-background dark:hover:bg-background/70"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-facebook.svg"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  Sign in with Facebook
                </Button>
              </div>
              <p className="text-center text-sm font-medium text-muted-foreground max-w-xs mx-auto">
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  className="text-foreground font-medium underline underline-offset-4 transition-all"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-foreground font-medium underline underline-offset-4 transition-all"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="absolute inset-0 pointer-events-none">
        <ZeroGravity
          count={180}
          magnetRadius={7}
          ringRadius={12}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1}
          lerpSpeed={0.1}
          color="#025bcf"
          autoAnimate
          particleVariance={0.5}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
    </section>
  );
};

export default LoginForm;
