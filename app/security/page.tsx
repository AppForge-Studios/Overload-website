import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Security — Overload",
  description:
    "How Overload encrypts, isolates, and protects your training data and account.",
};

export default function SecurityPage() {
  return (
    <LegalLayout
      eyebrow="Security"
      title="Built like the bar is loaded."
      lede="Overload is engineered to keep your account, training history, and photos safe. Here's what we do under the hood and what you can do on your end."
      updated="April 23, 2026"
      sections={[
        {
          id: "approach",
          heading: "Our Approach",
          body: (
            <>
              <p>
                We treat security as a product feature. Every change to
                authentication, storage, or payment code is reviewed by at
                least two engineers, tested against a threat model, and
                shipped behind an incremental rollout.
              </p>
              <p>
                We apply the principle of least privilege across engineering,
                infrastructure, and vendor relationships: access is scoped,
                logged, and reviewed quarterly.
              </p>
            </>
          ),
        },
        {
          id: "encryption",
          heading: "Encryption",
          body: (
            <>
              <h3>In Transit</h3>
              <p>
                All traffic between the app, the website, and our API is
                encrypted with TLS 1.3. HSTS is enforced on every Overload
                domain with a one-year max-age.
              </p>
              <h3>At Rest</h3>
              <p>
                Databases, object storage (progress photos, exports), and
                backups are encrypted with AES-256. Keys are managed through
                AWS KMS with automatic annual rotation.
              </p>
              <h3>On Device</h3>
              <p>
                The iOS app stores credentials and tokens in the iOS Keychain
                (hardware-backed where available). Cached training data is
                stored in an encrypted, app-sandboxed database.
              </p>
            </>
          ),
        },
        {
          id: "infrastructure",
          heading: "Infrastructure",
          body: (
            <>
              <p>
                Overload is hosted on AWS, with primary regions in
                us-east-1 (Virginia) and eu-central-1 (Frankfurt). We use
                managed services (RDS, S3, KMS) so we can focus on product
                and depend on AWS&rsquo;s physical and perimeter controls.
              </p>
              <ul>
                <li>
                  Isolated VPCs with private subnets for application and
                  database tiers.
                </li>
                <li>
                  Automated daily backups with point-in-time recovery for 35 days.
                </li>
                <li>
                  Infrastructure defined as code — every change is reviewed
                  and audited in Git.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "access",
          heading: "Access Controls",
          body: (
            <>
              <ul>
                <li>
                  Engineering access requires SSO with hardware-key-backed 2FA.
                </li>
                <li>
                  No one has standing production database access. Break-glass
                  access is short-lived and audit-logged.
                </li>
                <li>
                  Vendors are scoped to the minimum data required and bound
                  by DPAs.
                </li>
                <li>
                  Employee access is reviewed quarterly and revoked on
                  offboarding the same day.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "authentication",
          heading: "Authentication",
          body: (
            <>
              <p>
                You can sign in with Sign in with Apple, Google, or
                email + password. Passwords are hashed with argon2id and
                never stored in plaintext.
              </p>
              <p>
                Sessions are short-lived JWTs rotated on every refresh.
                Suspicious login patterns (new device, new country) trigger
                an email notification and an optional re-auth requirement.
              </p>
              <p>
                On-device biometrics (Face ID, Touch ID) can be enabled in
                Settings to require a second factor before opening the app.
              </p>
            </>
          ),
        },
        {
          id: "data-minimization",
          heading: "Data Minimization",
          body: (
            <p>
              We collect only what the product needs. We do not collect
              precise location, contact lists, or health records from
              HealthKit unless you explicitly opt in. Analytics events are
              IP-anonymized at ingestion and we do not sync advertising
              identifiers.
            </p>
          ),
        },
        {
          id: "monitoring",
          heading: "Monitoring &amp; Incident Response",
          body: (
            <>
              <p>
                We run 24/7 automated monitoring on availability, error
                rates, and authentication anomalies. A rotating on-call
                engineer is paged for incidents above defined severity.
              </p>
              <p>
                If we confirm a security incident that affects your personal
                data, we will notify you without undue delay — and in any
                event within 72 hours where required by GDPR or similar
                regulation.
              </p>
            </>
          ),
        },
        {
          id: "disclosure",
          heading: "Responsible Disclosure",
          body: (
            <>
              <p>
                If you believe you&rsquo;ve found a vulnerability, please
                report it to{" "}
                <a href="mailto:security@overloadfit.app">security@overloadfit.app</a>.
                We investigate every report and will respond within 2
                business days.
              </p>
              <p>Please do not:</p>
              <ul>
                <li>Access data that does not belong to your own account.</li>
                <li>Run denial-of-service or brute-force attacks.</li>
                <li>Publicly disclose an issue before we&rsquo;ve had a chance to fix it.</li>
              </ul>
              <p>
                We credit researchers who follow responsible disclosure and
                we&rsquo;re building a formal bug-bounty program — email us
                to be notified when it launches.
              </p>
            </>
          ),
        },
        {
          id: "what-you-can-do",
          heading: "What You Can Do",
          body: (
            <>
              <ul>
                <li>Use a unique, long passphrase or a password manager.</li>
                <li>Turn on biometric unlock for the app.</li>
                <li>
                  Keep iOS up to date — we follow the two most recent major
                  versions.
                </li>
                <li>
                  Review active sessions in <strong>Settings → Security</strong> and
                  sign out devices you no longer use.
                </li>
                <li>
                  Enable login notifications so a new sign-in on an unfamiliar
                  device lands in your inbox.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "compliance",
          heading: "Compliance &amp; Certifications",
          body: (
            <>
              <p>
                We align our controls to industry frameworks and run
                third-party audits:
              </p>
              <ul>
                <li>
                  <strong>SOC 2 Type II</strong> — audit in progress, report
                  expected Q3 2026.
                </li>
                <li>
                  <strong>GDPR / UK GDPR</strong> — processes and DPAs in
                  place, Data Protection Officer appointed.
                </li>
                <li>
                  <strong>CCPA / CPRA</strong> — California residents can
                  exercise rights at{" "}
                  <a href="mailto:privacy@overloadfit.app">privacy@overloadfit.app</a>.
                </li>
              </ul>
              <p>
                Current audit reports and security questionnaires are
                available to enterprise customers under NDA.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <p>
              Security questions, vulnerability reports, or audit requests —{" "}
              <a href="mailto:security@overloadfit.app">security@overloadfit.app</a>.
              Our PGP key is available on request.
            </p>
          ),
        },
      ]}
    />
  );
}
