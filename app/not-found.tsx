import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-primary/20 mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="rounded-full px-6">
            <Link href="/">
              <ArrowLeft size={16} className="mr-2" />
              Go home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link href="/contacts">
              <Mail size={16} className="mr-2" />
              Contact us
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
