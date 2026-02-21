import { Button } from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import Logo from "@/assets/logo/logo";


const TwoFactorAuthForm = () => {
  return (
    <section className="bg-background  min-h-screen flex items-center justify-center relative">
      <div className=" px-4">
        <Card className="rounded-2xl shadow-md max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden  p-0">
          {/* LEFT SIDE */}
          <div className="p-10 flex flex-col ">
            {/* Logo */}
            <div className="mb-6">
              <a href="">
                <Logo className="gap-3" />
              </a>
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold mb-2">Two Steps Verification</h3>

              <p className="text-muted-foreground text-sm ">
                We sent a verification code to your mobile. Enter the code below
                to verify your identity.
              </p>

              <h6 className="text-sm font-bold my-4">******1234</h6>

              {/* Two Step Form */}
              <form className="mt-6">
                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label>Type your 6 digits security code</Label>
                  </div>
                  <div className="flex gap-3.5">
                    <Input type="text" className="text-center" />
                    <Input type="text" className="text-center" />
                    <Input type="text" className="text-center" />
                    <Input type="text" className="text-center" />
                    <Input type="text" className="text-center" />
                    <Input type="text" className="text-center" />
                  </div>
                </div>
                <Button variant={"secondary"} className="w-full " size={"lg"}>
                  Verify My Account
                </Button>
              </form>

              <div className="flex gap-2 text-sm text-muted-foreground font-medium mt-6 items-center">
                <p>Didn’t get the code?</p>
                <a href="#" className="text-primary text-sm font-medium">
                  Resend
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden md:block relative h-112.5">
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/login-2.png"
              alt="Two Steps Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TwoFactorAuthForm;
