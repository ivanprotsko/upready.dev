import { Button } from "@/components/ui/button";
import {
  Card,

} from "@/components/ui/card";
import Logo from "@/assets/logo/logo";



import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

const RegisterForm = () => {
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
              <h3 className="text-xl font-bold">Welcome to shadcndspace</h3>
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

              <form className="mt-6 space-y-6">
                <div>
                  <Label htmlFor="name" className="font-semibold block mb-1">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-semibold block mb-1">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="password"
                    className="font-semibold block mb-1"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter a strong password"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant={"secondary"}
                  size={"lg"}
                  className={"w-full"}
                >
                  Sign up
                </Button>
              </form>
              <div className="flex gap-2 text-base text-muted-foreground font-medium mt-6 items-center">
                <p>Already have an account?</p>
                <a href={"#"} className="text-primary text-base font-medium">
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden md:block relative">
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/login-2.png"
              alt="register Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RegisterForm;
