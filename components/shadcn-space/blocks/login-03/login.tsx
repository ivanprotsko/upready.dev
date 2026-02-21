import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  return (
    <section className="bg-background min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground overflow-hidden">
      <div className="flex-1 flex flex-col">
        {/* Top Spacer Line */}
        <div className="max-w-7xl w-full mx-auto border-x border-border flex-1" />

        {/* Header Row */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto border-x border-b border-border relative before:absolute before:-bottom-px before:right-full before:w-screen before:h-px before:bg-border after:absolute after:-bottom-px after:left-full after:w-screen after:h-px after:bg-border">
            <div className="flex flex-col gap-4 px-8 py-16">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                <p className="text-base font-normal text-muted-foreground">
                  Welcome to shadcnspace
                </p>
              </div>
              <p className="lg:text-7xl md:text-6xl text-5xl font-semibold text-foreground">
                Sign In.
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid Row */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto border-x border-b border-border relative before:absolute before:-bottom-px before:right-full before:w-screen before:h-px before:bg-border after:absolute after:-bottom-px after:left-full after:w-screen after:h-px after:bg-border">
            <div className="grid grid-cols-1 md:grid-cols-12 relative overflow-hidden">
              {/* LEFT SIDE: Image Area (col-span-7) */}
              <div className="md:col-span-7 hidden md:block">
                <img
                  src="https://images.shadcnspace.com/assets/backgrounds/login-03-bg.webp"
                  alt="Organic Texture"
                  width={662}
                  height={561}
                  className="w-full h-full object-cover grayscale opacity-90 transition-opacity hover:opacity-100"
                />
              </div>

              {/* RIGHT SIDE: Form Area (col-span-5) */}
              <div className="md:col-span-5 flex flex-col justify-center py-10 px-8">
                <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
                  <form className="space-y-6">
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
                          className="h-9 border-border bg-background text-foreground"
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
                          className="h-9 border-border bg-background text-foreground"
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
                      className="w-full rounded-lg transition-all hover:cursor-pointer"
                    >
                      Sign in
                    </Button>
                  </form>

                  <div className="flex items-center gap-3 text-sm font-normal text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                    or sign in with
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <Button
                      variant="outline"
                      className="gap-3 rounded-lg font-semibold hover:cursor-pointer"
                    >
                      <img
                        src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                        alt="Google"
                        className="h-4 w-4"
                      />
                      Sign in with Google
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-3 rounded-lg font-semibold hover:cursor-pointer"
                    >
                      <img
                        src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                        alt="Github"
                        className="h-4 w-4 dark:invert opacity-80"
                      />
                      Sign in with Github
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-foreground font-medium hover:underline underline-offset-4"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacer Row */}
        <div className="py-16 max-w-7xl w-full mx-auto border-x border-border flex-1" />
      </div>
    </section>
  );
};

export default LoginForm;
