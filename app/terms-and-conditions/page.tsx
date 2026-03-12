import type { Metadata } from "next";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for upready.dev services including app rescue, MVP builds, and managed open-source deployments.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Effective date: March 1, 2026
          </p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Agreement
              </h2>
              <p>
                By accessing or using upready.dev (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; &ldquo;our&rdquo;), you agree to be bound by
                these Terms & Conditions. If you do not agree, do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Services
              </h2>
              <p>
                We provide software development services including app rescue,
                technical audits, MVP builds, and managed open-source tool
                deployments. All services are delivered at fixed prices agreed
                upon before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Payment Terms
              </h2>
              <p>
                Unless otherwise agreed in writing, payment is due as follows:
                50% upfront before work begins and 50% upon delivery. All prices
                are in USD.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Code Ownership
              </h2>
              <p>
                Upon full payment, you own all code, configurations, and
                deliverables produced during the engagement. We retain no copies
                and require no ongoing subscription for you to use your own
                code.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Confidentiality
              </h2>
              <p>
                We treat all client code, data, and business information as
                confidential. We do not share, sell, or disclose client
                information to third parties. NDAs are available upon request
                before any engagement begins.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Warranties & Liability
              </h2>
              <p>
                We provide 30 days of included support after delivery for rescue
                and build engagements. Beyond that, services are provided
                &ldquo;as is.&rdquo; Our total liability is limited to the fees
                paid for the specific engagement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Cancellation
              </h2>
              <p>
                You may cancel at any time. If you cancel before delivery, you
                retain all work completed up to that point. Upfront payments are
                non-refundable once work has begun.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. Changes to These Terms
              </h2>
              <p>
                We may update these terms from time to time. Changes take effect
                when posted on this page. Continued use of our services
                constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Contact
              </h2>
              <p>
                Questions about these terms? Reach us at{" "}
                <a
                  href="mailto:hello@upready.dev"
                  className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  hello@upready.dev
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
