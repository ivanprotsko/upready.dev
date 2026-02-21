import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/logo/logo";


const VerifyEmail = () => {
    return (
        <section className="bg-background min-h-screen  flex items-center justify-center relative">
            <div className=" px-4">
                <Card className=" rounded-2xl shadow-md max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden p-0 ">
                    {/* LEFT SIDE */}
                    <div className="p-10 flex flex-col ">
                        {/* Logo */}
                        <div className="mb-6">
                            <a href="">
                                <Logo className="gap-3" />
                            </a>
                        </div>

                        <div className="w-full">
                            <h3 className="text-xl font-bold mb-2">Verify your email</h3>

                            <p className="text-muted-foreground text-sm ">
                                An activation link has been sent to your email address:
                                hello@example.com. Please check your inbox and click on the link
                                to complete the activation process.
                            </p>

                            {/* Two Step Form */}
                            <form className="mt-6">
                                <Button type="submit" size={"lg"} className="rounded-xl w-full">
                                    Verify Now
                                </Button>
                            </form>

                            <div className="flex gap-2 text-sm text-muted-foreground  font-medium mt-6 items-center">
                                <p >Didn’t get the email?</p>
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

export default VerifyEmail;
