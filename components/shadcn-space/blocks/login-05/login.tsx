"use client";


import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo/logo";

import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LofinForm = () => {



    return (
        <section className="bg-[url('https://images.shadcnspace.com/assets/backgrounds/login-5.jpg')] bg-cover bg-center bg-no-repeat h-full ">
            <div className="flex items-end sm:items-center justify-center lg:justify-start">
                <div className="max-w-7xl p-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8 mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Content Section */}
                        <div
                        >
                            <Card className="w-full h-full max-w-md p-8 sm:p-10 border-none shadow-none">
                                <CardHeader className="p-0 flex gap-8  flex-col">
                                    <div>
                                        <a href="">
                                            <Logo className="gap-3" />
                                        </a>
                                    </div>
                                    <div className=" flex gap-3 flex-col">

                                        <CardTitle className="text-3xl font-medium ">Login to Shadcnspace</CardTitle>
                                        <CardDescription className=" text-sm font-normal text-muted-foreground">
                                            Don&apos;t have an account?{" "}
                                            <a
                                                href="#"
                                                className="font-medium text-blue-500 !no-underline"
                                            >
                                                Sign up for free
                                            </a>
                                        </CardDescription>
                                    </div>
                                </CardHeader>

                                <CardContent className="p-0">
                                    <div className="flex flex-col gap-6">

                                        <form>
                                            <FieldGroup className="gap-6">
                                                <div className="flex flex-col gap-4">
                                                    <Field className="gap-1.5">
                                                        <FieldLabel
                                                            htmlFor="email"
                                                            className="text-sm text-muted-foreground font-normal"
                                                        >
                                                            Email*
                                                        </FieldLabel>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            placeholder="example@shadcnspace.com"
                                                            required
                                                            className="dark:bg-background"
                                                        />
                                                    </Field>
                                                    <Field className="gap-1.5">
                                                        <FieldLabel
                                                            htmlFor="password"
                                                            className="text-sm text-muted-foreground font-normal"
                                                        >
                                                            Password*
                                                        </FieldLabel>

                                                        <Input
                                                            id="password"
                                                            type="password"
                                                            placeholder="Enter your password"
                                                            required
                                                            className="dark:bg-background"
                                                        />
                                                    </Field>
                                                </div>
                                                <Field className="flex flex-row items-center justify-between w-full">
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox id="terms" defaultChecked className="cursor-pointer" />
                                                        <FieldLabel
                                                            htmlFor="terms"
                                                            className="text-sm text-primary font-normal cursor-pointer"
                                                        >
                                                            Remember this device
                                                        </FieldLabel>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="text-sm text-card-foreground font-medium text-end"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </Field>

                                                <Button type="submit" size={"lg"} className="rounded-lg">
                                                    Log in
                                                </Button>
                                                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm text-muted-foreground bg-transparent">
                                                    <span className="px-4">or sign in with</span>
                                                </FieldSeparator>

                                                <Field className="">
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
                                                        Sign in with Google
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
                                                        Sign in with Github
                                                    </Button>
                                                </Field>






                                            </FieldGroup>
                                        </form>
                                    </div>

                                </CardContent>
                            </Card>

                        </div>

                        {/* Right Side Content */}
                        <div className="hidden lg:flex flex-col justify-end h-full text-white">


                            <div >
                                <h2 className="text-5xl font-medium leading-12">
                                    3570<span className="text-teal-400">+</span>
                                </h2>

                                <p className="mt-3 text-base text-white/50 w-full ">
                                    Unlock powerful tools designed to streamline operations, boost roductivity, and help your team scale
                                    faster. Join thousands of
                                    businesses already building smarter.
                                </p>
                            </div>
                        </div>


                    </div>
                </div >
            </div >
        </section >
    );
};

export default LofinForm;
