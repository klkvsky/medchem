import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { SiteFooter } from "@/components/home/site-footer";
import { Team } from "@/components/home/team";
import { Xantir } from "@/components/home/xantir";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Xantir />
        <Team />
        <Partners />
      </main>
      <SiteFooter />
    </div>
  );
}
