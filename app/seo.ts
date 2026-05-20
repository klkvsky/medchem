export const siteConfig = {
  name: "MedChem",
  legalName: "ООО «МЕД ХЕМ»",
  title: "MedChem — R&D-решения для Life Sciences",
  description:
    "MedChem проектирует R&D-решения для фармацевтики, агрохимии и ветеринарии: drug discovery, chemoinformatics, CADD, AI-платформы и патентно-конкурентный анализ.",
  email: "info@medchem.ltd",
  inn: "9731155581",
  locale: "ru_RU",
  language: "ru",
  keywords: [
    "MedChem",
    "drug discovery",
    "medicinal chemistry",
    "chemoinformatics",
    "CADD",
    "AI drug discovery",
    "патентный анализ",
    "фармацевтический R&D",
    "разработка малых молекул",
  ],
} as const;

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://medchem.ltd";

  if (!configuredUrl) {
    return new URL("https://medchem.ltd");
  }

  const normalizedUrl = configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;

  return new URL(normalizedUrl);
}
