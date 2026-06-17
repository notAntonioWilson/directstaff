import type { MetadataRoute } from "next";
import { solutions, industries } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dirstaff.com";
  const routes = ["", "/about", "/employers", "/job-seekers", "/contact", "/solutions", "/industries"];
  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);
  const industryRoutes = industries.map((i) => `/industries/${i.slug}`);
  const legalRoutes = ["/privacy-policy", "/terms-of-service", "/disclaimer", "/eeoc"];
  return [...routes, ...solutionRoutes, ...industryRoutes, ...legalRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : legalRoutes.includes(r) ? 0.3 : 0.7,
  }));
}
