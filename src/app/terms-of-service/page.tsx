/* Template terms of service. Not legal advice — client should have counsel review. */
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Direct Staff Inc.",
  description: "The terms governing your use of the Direct Staff Inc. website.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" updated="June 12, 2026">
      <LegalSection heading="Acceptance of terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Direct Staff Inc.
          (&quot;Direct Staff&quot;) website. By accessing or using this website, you agree to be bound by these
          Terms. If you do not agree, please do not use the site.
        </p>
      </LegalSection>

      <LegalSection heading="Use of the website">
        <p>You agree to use this website only for lawful purposes. You agree not to:</p>
        <ul>
          <li>Submit false, misleading, or fraudulent information through any form.</li>
          <li>Upload content that infringes the rights of others or violates any law.</li>
          <li>Attempt to disrupt, damage, or gain unauthorized access to the site or its systems.</li>
          <li>Use the site to transmit harmful code, spam, or unsolicited communications.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Submissions">
        <p>
          When you submit a hiring request, resume, or other information through this site, you represent that
          the information is accurate and that you have the right to provide it. Direct Staff may use submissions
          to provide its staffing services as described in our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection heading="No guarantee of placement or hire">
        <p>
          Direct Staff provides staffing and recruiting services but does not guarantee that any employer will be
          matched with a candidate, that any candidate will be placed, or that any particular role will be filled.
          All placements are subject to the independent decisions of employers and candidates.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The content on this website, including text, graphics, logos, and design, is the property of Direct
          Staff or its licensors and is protected by applicable intellectual property laws. You may not reproduce,
          distribute, or create derivative works without our written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party links">
        <p>
          This website may contain links to third-party websites. We are not responsible for the content,
          policies, or practices of those sites, and links do not imply our endorsement.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest
          extent permitted by law, Direct Staff disclaims all warranties, express or implied, and is not liable
          for any indirect, incidental, or consequential damages arising from your use of, or inability to use,
          this website.
        </p>
      </LegalSection>

      <LegalSection heading="Indemnification">
        <p>
          You agree to indemnify and hold harmless Direct Staff Inc. from any claims, damages, or expenses arising
          out of your use of the website or your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These Terms are governed by the laws of the State of Michigan, without regard to its conflict-of-law
          principles. Any disputes arising under these Terms will be subject to the jurisdiction of the courts
          located in Michigan.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these Terms from time to time. Continued use of the website after changes are posted
          constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about these Terms may be directed to Direct Staff Inc. at{" "}
          <a href={company.phoneHref}>{company.phone}</a>, based in {company.location}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
