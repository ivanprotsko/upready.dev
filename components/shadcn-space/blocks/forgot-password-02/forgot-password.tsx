import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/logo/logo";


function ForgotPassword() {
  return (
    <section className="bg-background min-h-screen  flex items-center justify-center relative ">
      <div className=" px-4">
        <Card className="rounded-2xl shadow-md max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden p-0">
          {/* LEFT SIDE */}
          <div className="p-10 flex flex-col">
            {/* Logo */}
            <div className="mb-6">
              <a href="">
                <Logo className="gap-3" />
              </a>
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold">Forgot Password</h3>
              <p className="text-muted-foreground text-sm  mb-4">
                Please enter the email address associated with your account and we
                will email you a link to reset your password.
              </p>

              {/* Forgot Password Form */}
              <form className="mt-6">
                <div className="mb-4">
                  <div className="mb-1 block">
                    <Label htmlFor="emadd">Email Address</Label>
                  </div>
                  <Input id="emadd" type="text" className="form-control" />
                </div>
                <Button
                  variant={"secondary"}
                  className="w-full  "
                >
                  Forgot Password
                </Button>
              </form>

              {/* Back to Login Button */}
              <Button className="w-full  mt-4 ">
                Back to Login
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden md:block relative h-112.5">
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/login-2.png"
              alt="Forgot Password Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ForgotPassword;
