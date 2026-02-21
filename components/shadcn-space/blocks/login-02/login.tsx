import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/logo/logo";

const LoginForm = () => {
  return (
    <section className="bg-background min-h-screen  flex items-center justify-center relative">
      <div className=" px-4">
        <Card className="rounded-2xl shadow-md max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden  p-0">
          {/* LEFT SIDE */}
          <div className="p-10 flex flex-col">
            {/* Logo */}

            <div className="mb-6">
              <a href="">
                <Logo className="gap-3" />
              </a>
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold">Welcome to shadcnspace</h3>
              <p className="text-muted-foreground text-sm font-medium">
                Your Admin Dashboard
              </p>
              <div className="grid md:grid-cols-2 md:gap-6 gap-3 my-4">
                <Button
                  variant="outline"
                  type="button"
                  className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                    alt="google icon"
                    className="h-4 w-4"
                  />
                  Google
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                    alt="github icon"
                    className="dark:hidden  h-4 w-4"
                  />
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                    alt="github icon"
                    className="hidden dark:block  h-4 w-4"
                  />
                  Github
                </Button>
              </div>
              {/* Divider */}
              <div className="flex items-center justify-center gap-2">
                <hr className="grow border-border" />
                <p className="text-base text-muted-foreground font-medium">
                  or sign in with
                </p>
                <hr className="grow border-border" />
              </div>

              <form className="mt-6">
                <div className="mb-6">
                  <Label htmlFor="username" className="block mb-1">
                    Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    required
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-6">
                  <Label htmlFor="password" className="block mb-1">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-between my-7">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="terms"
                      defaultChecked
                      className="cursor-pointer"
                    />

                    <Label
                      htmlFor="terms"
                      className="text-sm text-primary font-normal cursor-pointer"
                    >
                      Remember this device
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="text-primary/80 hover:text-primary text-sm font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
                <Button
                  type="submit"
                  variant={"secondary"}
                  size={"lg"}
                  className={"w-full"}
                >
                  Sign in
                </Button>
              </form>
              <div className="flex gap-2 text-base text-muted-foreground font-medium mt-6 items-center">
                <p>New to shadcnspace?</p>
                <a href={"#"} className="text-primary text-base font-medium">
                  Create an account
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden md:block relative">
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/login-2.png"
              alt="Login Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;
