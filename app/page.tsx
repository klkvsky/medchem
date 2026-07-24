import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { SiteFooter } from "@/components/home/site-footer";
import { Team } from "@/components/home/team";
import { Xantir } from "@/components/home/xantir";
import Navbar from "@/components/navbar";
import homeContent from "@/public/content/home.json";
import type { HomePageData } from "@/types/home";

export default function Home() {
  const home = homeContent as unknown as HomePageData;

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
