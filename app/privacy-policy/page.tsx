import type { Metadata } from "next";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for upready.dev. How we handle your data, cookies, and communications.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Effective date: March 1, 2026
          </p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. What We Collect
              </h2>
              <p>
                When you contact us through our website, we collect your name,
                email address, and any information you include in your message.
                We also collect basic analytics data (page views, referral
                source) through Google Analytics.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. How We Use Your Data
              </h2>
              <p>
                We use your contact information to respond to inquiries and
                deliver services you have requested. Analytics data helps us
                understand how visitors use our site so we can improve it. We do
                not sell, rent, or share your personal data with third parties
                for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Client Data
              </h2>
              <p>
                During service engagements, we may access your codebase,
                databases, and production environments. All client data is
                treated as confidential. We do not store copies of your data
                beyond what is necessary to deliver the service. NDAs are
                available upon request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Cookies
              </h2>
              <p>
                Our site uses cookies for analytics (Google Analytics) and
                essential site functionality. You can disable cookies in your
                browser settings, though some site features may not work as
                expected.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Third-Party Services
              </h2>
              <p>
                We use the following third-party services: Google Analytics (site
                analytics), Vercel (hosting), and email providers for
                communication. Each operates under its own privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Data Retention
              </h2>
              <p>
                We retain contact form submissions for as long as needed to
                respond and follow up. Client engagement data is retained for
                the duration of the engagement plus 90 days, unless a longer
                retention is required by law or agreed upon.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal data at any time by emailing us. We will respond within
                30 days.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Changes
                take effect when posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Contact
              </h2>
              <p>
                Questions about your privacy? Reach us at{" "}
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
