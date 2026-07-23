"use client";

import { useEffect, useState } from "react";

import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { SiteFooter } from "@/components/home/site-footer";
import { Team } from "@/components/home/team";
import { Xantir } from "@/components/home/xantir";
import Navbar from "@/components/navbar";
import type { HomePageData, HomePageResponse } from "@/types/home";

export default function Home() {
  const [home, setHome] = useState<HomePageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHomePage() {
      try {
        const response = await fetch("/api/home", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Home page request failed with ${response.status}.`);
        }

        const payload = (await response.json()) as HomePageResponse;
        setHome(payload.data);
      } catch (reason) {
        if (reason instanceof Error && reason.name === "AbortError") {
          return;
        }

        console.error("Unable to load home page content.", reason);
        setError("Не удалось загрузить страницу. Попробуйте обновить её.");
      }
    }

    void loadHomePage();

    return () => controller.abort();
  }, []);

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6 text-center text-[#411319]">
        <p>{error}</p>
      </main>
    );
  }

  if (!home) {
    return (
      <main
        aria-busy="true"
        aria-label="Загрузка страницы"
        className="min-h-screen bg-[#411319]"
      />
    );
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
