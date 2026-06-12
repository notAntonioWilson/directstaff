/* Template privacy policy reflecting the site's actual data collection.
   Not legal advice. Client should have counsel review before relying on it. */
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Direct Staff Inc.",
  description: "How Direct Staff Inc. collects, uses, and protects the information you provide through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="June 12, 2026">
      <LegalSection heading="Overview">
        <p>
          Direct Staff Inc. (&quot;Direct Staff,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
          This Privacy Policy explains what information we collect through this website, how we use it, and the
          choices you have. By using this website or submitting information through it, you agree to the practices
          described here.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>We collect information you provide directly through the forms on this site, including:</p>
        <ul>
          <li><strong>Contact details</strong>: name, email address, phone number, and company name.</li>
          <li><strong>Hiring requests</strong>: the role, skill set, or staffing need you describe when requesting talent.</li>
          <li><strong>Job seeker information</strong>: your name, contact details, discipline or area of expertise, and any resume or document you upload.</li>
        </ul>
        <p>
          We may also automatically collect limited technical information, such as your browser type, device
          information, and general usage data, through standard web server logs and similar technologies.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your information">
        <p>We use the information you provide to:</p>
        <ul>
          <li>Respond to hiring requests and return candidate shortlists to employers.</li>
          <li>Review job seeker submissions and match candidates to open or upcoming searches.</li>
          <li>Communicate with you about your inquiry, application, or our services.</li>
          <li>Operate, maintain, and improve this website and our staffing services.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How we share information">
        <p>
          We do not sell your personal information. As a staffing firm, we may share relevant candidate
          information with employers and clients for the purpose of evaluating placements, and with service
          providers who support our operations (for example, hosting and communication tools). We may also
          disclose information when required by law or to protect our rights.
        </p>
      </LegalSection>

      <LegalSection heading="Resume and candidate data">
        <p>
          If you submit a resume or candidate information, you consent to Direct Staff retaining and reviewing
          that information for recruiting purposes, and to sharing it with prospective employers in connection
          with potential opportunities. You may ask us to remove your information from active consideration at
          any time by contacting us.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          We retain the information you provide for as long as needed to fulfill the purposes described in this
          policy, including ongoing recruiting and placement activity, unless a longer retention period is
          required or permitted by law. You may request deletion of your information as described below.
        </p>
      </LegalSection>

      <LegalSection heading="Data security">
        <p>
          We take reasonable measures to protect the information you provide against unauthorized access, loss,
          or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You may request to access, correct, or delete the personal information you have provided to us. To make
          a request, contact us using the details below. We will respond consistent with applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party links">
        <p>
          This website may link to third-party sites, such as our LinkedIn page. We are not responsible for the
          privacy practices of those sites and encourage you to review their policies.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. Changes are effective when posted to this page,
          and the &quot;last updated&quot; date above will reflect the most recent revision.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          If you have questions about this Privacy Policy or your information, contact Direct Staff Inc. at{" "}
          <a href={company.phoneHref}>{company.phone}</a>, based in {company.location}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
