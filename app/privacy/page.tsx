import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Overload",
  description:
    "How Overload collects, uses, and protects your training data and personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="Your training data is yours."
      lede="This policy explains what Overload collects, why we collect it, how we use it, and the choices you have. Plain language, no dark patterns."
      updated="April 23, 2026"
      sections={[
        {
          id: "overview",
          heading: "Overview",
          body: (
            <>
              <p>
                Overload Labs (&ldquo;<strong>Overload</strong>,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us&rdquo;) builds an adaptive
                strength-training app. This Privacy Policy covers the mobile
                app, the website at{" "}
                <strong>overloadfit.app</strong>, and any related services.
              </p>
              <p>
                We designed Overload with a simple data principle: collect
                only what improves your training, keep it secure, and give
                you full control over deletion and export.
              </p>
            </>
          ),
        },
        {
          id: "data-we-collect",
          heading: "Data We Collect",
          body: (
            <>
              <h3>Account</h3>
              <p>
                When you create an account we store your email address, a
                hashed password (or an Apple / Google Sign-In identifier), and
                an account creation timestamp.
              </p>

              <h3>Onboarding Profile</h3>
              <p>
                During the compile funnel we collect information you provide:
                age range, gender, training experience, goals, obstacles,
                available equipment, schedule, and sleep patterns. This is
                used to generate your initial protocol.
              </p>

              <h3>Training Data</h3>
              <p>
                Sets, reps, weights, rest durations, RPE, session timestamps,
                exercise selections, and any notes you attach. This is the
                core of the product and what powers adaptive progression.
              </p>

              <h3>Progress Photos</h3>
              <p>
                If you upload progress photos, they are encrypted at rest and
                visible only to your account. We never use them to train
                public models.
              </p>

              <h3>Device &amp; Usage</h3>
              <p>
                App version, device model, OS version, locale, crash reports,
                and aggregated usage events (e.g., &ldquo;session completed,&rdquo;
                &ldquo;set logged&rdquo;). We do not collect precise location.
              </p>

              <h3>Payments</h3>
              <p>
                Subscription billing is handled by Apple (App Store) or
                Stripe. We receive a transaction identifier and status — we
                never see your full card number.
              </p>
            </>
          ),
        },
        {
          id: "how-we-use",
          heading: "How We Use Your Data",
          body: (
            <>
              <ul>
                <li>Generate and adapt your training protocol.</li>
                <li>
                  Surface insights (e.g., estimated 1RMs, weekly volume,
                  projected strength).
                </li>
                <li>Sync sessions and photos across your devices.</li>
                <li>Diagnose crashes and performance issues.</li>
                <li>Send account-related email (receipts, security).</li>
                <li>Detect abuse and keep the service safe.</li>
              </ul>
              <p>
                We do <strong>not</strong> sell your personal data. We do
                <strong> not</strong> use your photos or training data to
                train public AI models.
              </p>
            </>
          ),
        },
        {
          id: "legal-bases",
          heading: "Legal Bases (GDPR)",
          body: (
            <>
              <p>
                If you are in the European Economic Area or the United
                Kingdom, we process personal data under the following bases:
              </p>
              <ul>
                <li>
                  <strong>Contract</strong> — to deliver the app features you
                  signed up for.
                </li>
                <li>
                  <strong>Legitimate interest</strong> — to secure the
                  service, prevent abuse, and improve the product.
                </li>
                <li>
                  <strong>Consent</strong> — for optional features such as
                  push notifications or uploading progress photos.
                </li>
                <li>
                  <strong>Legal obligation</strong> — to comply with tax,
                  accounting, and law-enforcement requests.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "sharing",
          heading: "Sharing &amp; Third Parties",
          body: (
            <>
              <p>
                We share data only with the vendors required to operate the
                product. These include:
              </p>
              <ul>
                <li>
                  <strong>Apple / Google</strong> — authentication and
                  in-app purchases.
                </li>
                <li>
                  <strong>Stripe</strong> — subscription billing.
                </li>
                <li>
                  <strong>AWS</strong> — hosting, storage, and backups (US /
                  EU regions).
                </li>
                <li>
                  <strong>Sentry</strong> — crash reporting.
                </li>
                <li>
                  <strong>PostHog</strong> — product analytics (self-hosted,
                  IP-anonymized).
                </li>
                <li>
                  <strong>Postmark</strong> — transactional email.
                </li>
              </ul>
              <p>
                Each vendor is bound by a Data Processing Agreement limiting
                use to the service they provide. We may also disclose data
                when compelled by valid legal process, or to protect the
                rights, property, or safety of Overload, our users, or the
                public.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          heading: "Retention",
          body: (
            <>
              <p>
                We keep account and training data for as long as your account
                is active. When you delete your account:
              </p>
              <ul>
                <li>Profile, training, and photo data are removed within 30 days.</li>
                <li>Backups rotate out within 90 days.</li>
                <li>
                  Anonymized, aggregated analytics (which cannot be tied back
                  to you) may be retained.
                </li>
                <li>
                  Billing records are retained for 7 years where required by
                  tax law.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "your-rights",
          heading: "Your Rights",
          body: (
            <>
              <p>
                Regardless of where you live, you can always:
              </p>
              <ul>
                <li>Access and export your data from <strong>Settings → Data</strong>.</li>
                <li>Delete your account and all associated data.</li>
                <li>Correct profile information.</li>
                <li>Turn off push notifications and analytics.</li>
              </ul>
              <p>
                Residents of the EEA, UK, California, and similar
                jurisdictions have additional rights to object to processing,
                restrict processing, port data, and file a complaint with a
                supervisory authority. Reach us at{" "}
                <a href="mailto:privacy@overloadfit.app">privacy@overloadfit.app</a>.
              </p>
            </>
          ),
        },
        {
          id: "transfers",
          heading: "International Transfers",
          body: (
            <p>
              Overload is operated from the United States. If you use the app
              outside the US, your data will be transferred to the US (or
              other regions where our vendors operate). We use Standard
              Contractual Clauses or equivalent safeguards where required.
            </p>
          ),
        },
        {
          id: "children",
          heading: "Children",
          body: (
            <p>
              Overload is not intended for anyone under 16. We do not
              knowingly collect data from children. If you believe a child
              has provided us data, contact{" "}
              <a href="mailto:privacy@overloadfit.app">privacy@overloadfit.app</a>{" "}
              and we will delete it.
            </p>
          ),
        },
        {
          id: "cookies",
          heading: "Cookies &amp; Tracking",
          body: (
            <p>
              The website uses a single essential cookie to remember your
              theme preference and session. We do not run third-party
              advertising trackers. The mobile app does not use web cookies.
              Product analytics events are IP-anonymized and never sold.
            </p>
          ),
        },
        {
          id: "changes",
          heading: "Changes to This Policy",
          body: (
            <p>
              We will post material changes at this URL and notify active
              users in-app at least 14 days before they take effect. The
              &ldquo;Last updated&rdquo; date at the top of this page
              indicates the most recent revision.
            </p>
          ),
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <>
              <p>
                Questions, requests, or concerns? Reach us at{" "}
                <a href="mailto:privacy@overloadfit.app">privacy@overloadfit.app</a>.
              </p>
              <p>
                For EU residents, you may also contact our EU representative
                at <a href="mailto:eu-rep@overloadfit.app">eu-rep@overloadfit.app</a>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
