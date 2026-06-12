/* Template disclaimer. Not legal advice — client should have counsel review. */
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer | Direct Staff Inc.",
  description: "Important disclaimers regarding the information presented on the Direct Staff Inc. website.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Disclaimer" updated="June 12, 2026">
      <LegalSection heading="General information">
        <p>
          The information provided on the Direct Staff Inc. (&quot;Direct Staff&quot;) website is for general
          informational purposes only. While we strive to keep the information accurate and current, we make no
          representations or warranties of any kind, express or implied, about the completeness, accuracy,
          reliability, or availability of the website or its content.
        </p>
      </LegalSection>

      <LegalSection heading="No professional advice">
        <p>
          Nothing on this website constitutes legal, employment, financial, or other professional advice. Any
          reliance you place on the information presented is strictly at your own risk. You should seek
          appropriate professional guidance before making decisions based on the content of this site.
        </p>
      </LegalSection>

      <LegalSection heading="Staffing services">
        <p>
          Descriptions of Direct Staff&apos;s services, industries, and capabilities are provided for general
          reference. They do not constitute a guarantee of placement, hire, employment, or any specific outcome.
          Staffing engagements are subject to separate agreements and the independent decisions of employers and
          candidates.
        </p>
      </LegalSection>

      <LegalSection heading="Forward-looking statements">
        <p>
          Statistics, timeframes, and statements regarding past performance or typical results are illustrative
          and are not a promise of future results. Actual outcomes may vary based on circumstances specific to
          each engagement.
        </p>
      </LegalSection>

      <LegalSection heading="External links">
        <p>
          This website may include links to external sites that are not provided or maintained by Direct Staff.
          We do not guarantee the accuracy, relevance, or completeness of any information on those external
          websites and are not responsible for their content.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          In no event will Direct Staff Inc. be liable for any loss or damage, including without limitation
          indirect or consequential loss, arising from the use of this website or reliance on any information
          contained within it.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          If you have questions about this Disclaimer, contact Direct Staff Inc. at{" "}
          <a href={company.phoneHref}>{company.phone}</a>, based in {company.location}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
