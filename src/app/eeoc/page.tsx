import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Equal Employment Opportunity | Direct Staff Inc.",
  description:
    "Direct Staff Inc. is proud to be an equal opportunity employer, providing equal employment opportunities to all employees and applicants.",
};

export default function EeocPage() {
  return (
    <LegalLayout eyebrow="Equal Opportunity" title="Equal Employment Opportunity" updated="June 16, 2026">
      <LegalSection heading="Our commitment">
        <p>
          Direct Staff is proud to be an equal opportunity employer and encourages all individuals to join
          our team. Direct Staff provides equal employment opportunities to all employees and applicants
          without regard to race, color, religion, national origin, sex (including pregnancy, childbirth,
          and related medical conditions), sexual orientation, gender identity or expression, age, height,
          weight, familial status, marital status, disability, genetic information, military or veteran
          status, or any other status protected by applicable law.
        </p>
        <p>
          Our equal opportunity commitment applies to all aspects of employment including recruiting,
          hiring, training, promotion and compensation.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
