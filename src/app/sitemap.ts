import type { MetadataRoute } from "next";
import { solutions } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dirstaff.com";
  const routes = ["", "/about", "/employers", "/job-seekers", "/contact"];
  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);
  return [...routes, ...solutionRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
