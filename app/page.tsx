import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { SiteFooter } from "@/components/home/site-footer";
import { Team } from "@/components/home/team";
import { Xantir } from "@/components/home/xantir";
import Navbar from "@/components/navbar";
import { HOME_PAGE_QUERY, type HomePageData } from "@/sanity/lib/home";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });
  const home = data as HomePageData | null;

  if (!home) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <main className="text-[#411319]">
        <Hero data={home.hero} />
        <About data={home.about} />
        <Services data={home.services} />
        <Projects data={home.portfolio} />
        <Xantir data={home.xantir} />
        <Team data={home.team} />
        <Partners data={home.partners} />
      </main>
      <SiteFooter data={home.footer} />
    </div>
  );
}
