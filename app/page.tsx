import Image from "next/image";
import Link from "next/link";

import SliderImageADesktop from "@/public/assets/slider/a_desktop.png";
import SliderImageATablet from "@/public/assets/slider/a_tablet.png";
import SliderImageAMobile from "@/public/assets/slider/a_mobile.png";
import SliderImageBDesktop from "@/public/assets/slider/b_desktop.png";
import SliderImageBTablet from "@/public/assets/slider/b_tablet.png";
import SliderImageBMobile from "@/public/assets/slider/b_mobile.png";

import RequestAccessImage from "@/public/assets/request/circle.png";

import { Tag } from "@/components/tag";
import ClientsSlider from "@/components/clients-slider";
import DrugDiscovery from "@/components/drug-discovery";
import Projects from "@/components/projects";
import { getSiteUrl, siteConfig } from "./seo";

import Slider from "@/components/slider";
import Nav from "@/components/nav";

const accessRequestEmailBody =
  "Привет! Запросить доступ можно уже прямо сейчас, связавшись с нашей командой!";
const accessRequestMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Запрос доступа")}&body=${encodeURIComponent(accessRequestEmailBody)}`;

const homeData = {
  hero: {
    title: {
      ru: "Проектируем будущее фармацевтики",
      lines: ["ПРОЕКТИРУЕМ", "БУДУЩЕЕ", "ФАРМАЦЕВТИКИ"],
    },
    tags: [
      { icon: "◆", label: "Drug Discovery" },
      { icon: "◙", label: "Chemoinformatics" },
      { icon: "⁞⁞", label: "CADD" },
      { icon: "∴", label: "AI" },
      { icon: "💊", label: "Medicinal Chemistry" },
      { icon: "◘", label: "Software Development" },
    ],
  },
  drugDiscovery: {
    title: {
      ru: "Создаем R&D-решения для Life Sciences",
      lines: ["СОЗДАЕМ R&D-РЕШЕНИЯ", "ДЛЯ LIFE SCIENCES"],
    },
    icon: "◆",
    description: {
      ru: "Помогаем найти перспективные направления разработки, создать новые структуры малых молекул, провести патентно-конкурентный анализ или спроектировать цифровой инструмент для R&D.",
    },
    tags: [
      { label: "PHARMA" },
      { label: "AGROCHEM" },
      { label: "ANIMAL CARE" },
      { label: "VC FUNDS" },
      { label: "IP-TEAMS" },
    ],
  },
  slider: {
    slides: [
      {
        marker: "А",
        title: {
          ru: "Разработка молекул",
          lines: ["РАЗРАБОТКА", "МОЛЕКУЛ"],
        },
        steps: [
          {
            number: 1,
            title: {
              ru: "Выбор мишени и патентный анализ",
              lines: ["ВЫБОР МИШЕНИ", "И ПАТЕНТНЫЙ", "АНАЛИЗ"],
            },
            tags: ["TARGET ID", "COMPETITORS"],
          },
          {
            number: 2,
            title: {
              ru: "Дизайн молекул",
              lines: ["ДИЗАЙН", "МОЛЕКУЛ"],
            },
            tags: ["AIDD", "IN SILICO"],
          },
          {
            number: 3,
            title: {
              ru: "Идентификация и оптимизация хита",
              lines: ["ИДЕНТИФИКАЦИЯ", "И ОПТИМИЗАЦИЯ", "ХИТА"],
            },
            tags: ["HITID", "H2L"],
          },
          {
            number: 4,
            title: {
              ru: "Оптимизация лидера",
              lines: ["ОПТИМИЗАЦИЯ", "ЛИДЕРА"],
            },
            tags: ["LEADOPT", "ADMET"],
          },
          {
            number: 5,
            title: {
              ru: "Разработка доклинического кандидата",
              lines: ["РАЗРАБОТКА", "ДОКЛИНИЧЕСКОГО", "КАНДИДАТА"],
            },
            tags: ["PK", "PD"],
          },
        ],
        images: {
          mobile: SliderImageAMobile,
          tablet: SliderImageATablet,
          desktop: SliderImageADesktop,
        },
      },
      {
        marker: "Б",
        title: {
          ru: "Цифровые продукты",
          lines: ["ЦИФРОВЫЕ", "ПРОДУКТЫ"],
        },
        steps: [
          {
            number: 1,
            title: {
              ru: "Концептуализация продукта",
              lines: ["КОНЦЕПТУАЛИЗАЦИЯ", "ПРОДУКТА"],
            },
            tags: ["PRODUCT CONCEPT", "ROADMAP"],
          },
          {
            number: 2,
            title: {
              ru: "Создание R&D-модулей",
              lines: ["СОЗДАНИЕ", "R&D-МОДУЛЕЙ"],
            },
            tags: ["CHEMINFORMATICS", "AI"],
          },
          {
            number: 3,
            title: {
              ru: "Разработка прототипа и MVP",
              lines: ["РАЗРАБОТКА", "ПРОТОТИПА", "И MVP"],
            },
            tags: ["PROTOTYPE", "POC"],
          },
          {
            number: 4,
            title: {
              ru: "Построение R&D-платформы",
              lines: ["ПОСТРОЕНИЕ", "R&D-", "ПЛАТФОРМЫ"],
            },
            tags: ["SOFTWARE DEVELOPMENT", "AI PLATFORM"],
          },
          {
            number: 5,
            title: {
              ru: "Внедрение и поддержка",
              lines: ["ВНЕДРЕНИЕ", "И ПОДДЕРЖКА"],
            },
            tags: ["ADOPTION", "SUPPORT"],
          },
        ],
        images: {
          mobile: SliderImageBMobile,
          tablet: SliderImageBTablet,
          desktop: SliderImageBDesktop,
        },
      },
    ],
  },
  projects: {
    title: {
      ru: "Портфолио",
      lines: ["ПОРТФОЛИО"],
    },
    tracks: [
      {
        title: {
          ru: "Разработка молекул",
          lines: ["РАЗРАБОТКА", "МОЛЕКУЛ"],
        },
        items: [
          {
            title: "NS5A",
            subtitle: "Phase I/II",
            image: "/assets/projects/NS5A.png",
            tags: ["CHEMDIV"],
          },
          {
            title: "DDR1",
            subtitle: "Preclinical",
            image: "/assets/projects/DDR1.png",
            tags: ["INSILICO MEDICINE"],
          },
          {
            title: "IRAK4",
            subtitle: "Preclinical",
            image: "/assets/projects/IRAK4.png",
            tags: ["INSILICO MEDICINE"],
          },
          {
            title: "JAK3",
            subtitle: "Preclinical",
            image: "/assets/projects/JAK3.png",
            tags: ["INSILICO MEDICINE"],
          },
          {
            title: "AR",
            subtitle: "Phase I",
            image: "/assets/projects/AR.png",
            tags: ["ALLA CHEM"],
          },
          {
            title: "QPCTL",
            subtitle: "Phase I",
            image: "/assets/projects/QPCTL.png",
            tags: ["INSILICO MEDICINE"],
          },
          {
            title: "ATM/DNA-PK",
            subtitle: "Preclinical",
            image: "/assets/projects/ATM-DNA-PK.png",
            tags: ["РОСАТОМ", "НМИЦ РАДИОЛОГИИ"],
          },
          {
            title: "MPRO",
            subtitle: "Phase II",
            image: "/assets/projects/Mpro.png",
            tags: ["INSILICO MEDICINE"],
          },
          {
            title: "TNIK",
            subtitle: "Phase II",
            image: "/assets/projects/TNIK.png",
            tags: ["INSILICO MEDICINE"],
          },
        ],
      },
      {
        title: {
          ru: "Цифровые продукты",
          lines: ["ЦИФРОВЫЕ", "ПРОДУКТЫ"],
        },
        items: [
          {
            title: "XANTIR",
            subtitle: "Patent Intelligence Platform",
            image: "/assets/projects/Xantir.png",
            tags: ["EXPERTSYSTEMS"],
          },
          {
            title: "CHEMISTRY42",
            subtitle: "Generative Chemistry",
            image: "/assets/projects/Chemistry42.png",
            tags: ["INSILICO MEDICINE"],
          },
          {
            title: "INVENTUM.AI",
            subtitle: "Generative Chemistry",
            image: "/assets/projects/Inventum.AI.png",
            tags: ["РОСАТОМ", "ИННОПОЛИС"],
          },
          {
            title: "BIOLOGY42",
            subtitle: "Generative Biology",
            image: "/assets/projects/Biology42.png",
            tags: ["INSILICO MEDICINE"],
          },
          {
            title: "GOLDEN CUBES",
            subtitle: "AI-Assisted Workflow",
            image: "/assets/projects/Golden-Cubes.png",
            tags: ["INSILICO MEDICINE"],
          },
        ],
      },
    ],
  },
  requestAccess: {
    title: {
      ru: "XANTIR",
      lines: ["XANTIR"],
    },
    description: {
      ru: "AI-платформа для патентного анализа, извлечения данных и разработки новых структур малых молекул",
    },
    audience: {
      description: {
        ru: "Для компаний в фармацевтике, агрохимии и ветеринарии, которые используют патентные данные для поиска новых направлений разработки.",
      },
      tags: [
        { label: "PHARMA" },
        { label: "AGROCHEM" },
        { label: "ANIMAL CARE" },
      ],
    },
  },
  team: {
    members: [
      {
        name: {
          ru: "Ян Иваненков",
          lines: ["ЯН", "ИВАНЕНКОВ"],
        },
        image: "",
        shape: "square",
        credentials: [
          "PhD",
          "20+ лет опыта",
          "250+ научных публикаций",
          "40 h-index",
        ],
        roles: [{ label: "ОСНОВАТЕЛЬ" }, { label: "ДИРЕКТОР ПО НАУКЕ" }],
        links: [{ icon: "⊹", label: "SCHOLAR", url: "" }],
      },
      {
        name: {
          ru: "Александр Малышев",
          lines: ["АЛЕКСАНДР", "МАЛЫШЕВ"],
        },
        image: "",
        shape: "square",
        credentials: ["PharmD", "9+ лет опыта"],
        roles: [{ label: "ДИРЕКТОР ПО ПРОДУКТУ" }],
        links: [],
      },
      {
        name: {
          ru: "Анастасия Корженевская",
          lines: ["АНАСТАСИЯ", "КОРЖЕНЕВСКАЯ"],
        },
        image: "",
        shape: "square",
        credentials: ["MSc", "6+ лет опыта"],
        roles: [{ label: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР" }],
        links: [],
      },
      {
        name: {
          ru: "Белладонна",
          lines: ["БЕЛЛАДОННА"],
        },
        image: "",
        shape: "circle",
        credentials: ["Талантливая", "и поддерживающая"],
        roles: [{ label: "ТАЛИСМАН КОМАНДЫ" }],
        links: [],
      },
    ],
  },
} as const;

export default function Home() {
  const data = homeData;
  const siteUrl = getSiteUrl().toString().replace(/\/$/, "");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteUrl,
        email: siteConfig.email,
        taxID: siteConfig.inn,
        logo: `${siteUrl}/logo.svg`,
        description: siteConfig.description,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        inLanguage: siteConfig.language,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#services`,
        name: siteConfig.name,
        url: siteUrl,
        email: siteConfig.email,
        description: siteConfig.description,
        areaServed: "Worldwide",
        parentOrganization: {
          "@id": `${siteUrl}/#organization`,
        },
        knowsAbout: [
          "Drug discovery",
          "Chemoinformatics",
          "Computer-aided drug design",
          "AI drug discovery",
          "Patent intelligence",
          "Medicinal chemistry",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "R&D-услуги MedChem",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Разработка молекул",
                serviceType: "Drug discovery",
                description:
                  "Выбор мишени, патентный анализ, дизайн молекул, идентификация и оптимизация хитов и лидеров.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Цифровые продукты для R&D",
                serviceType: "R&D software development",
                description:
                  "Создание R&D-модулей, прототипов, MVP и AI-платформ для Life Sciences.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Патентный анализ XANTIR",
                serviceType: "Patent intelligence",
                description:
                  "AI-платформа для патентного анализа, извлечения данных и разработки новых структур малых молекул.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main className="w-full h-full">
        <Hero data={data.hero} />
        <DrugDiscovery data={data.drugDiscovery} />
        <Slider data={data.slider} />
        <Projects data={data.projects} />
        <RequestAccess data={data.requestAccess} />
        <Team data={data.team} />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

function Hero({ data }: { data: typeof homeData.hero }) {
  return (
    <section
      id="hero"
      className="w-full h-dvh text-[#FAFAFA] flex flex-col items-start justify-end pb-50 px-3 gap-3 max-w-dvw overflow-hidden md:items-end md:justify-end md:gap-0 md:pb-[15dvh] xl:pb-26"
      style={{
        background:
          "radial-gradient(160.91% 74.35% at 76.3% 74.35%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <h1 className="text-title-1 uppercase font-aeonik-mono md:text-center md:w-full md:flex md:flex-col md:mt-[50dvh] md:translate-x-0 xl:-translate-x-0">
        <span>{data.title.lines[0]}</span>
        <span className="md:translate-x-15 xl:translate-x-40">
          {" "}
          {data.title.lines[1]}{" "}
        </span>
        <span className="md:translate-x-20 xl:translate-x-50">
          {data.title.lines[2]}
        </span>
      </h1>
      {/* mobile */}
      <div className="flex flex-col gap-1 text-hero-subtitle uppercase font-aeonik-mono md:hidden">
        <div className="flex flex-row gap-3">
          <div className="flex flex-row gap-1.5">
            <Tag icon="rectangle" label={data.tags[0].label} />
            <Tag icon="coin" label={data.tags[1].label} />
          </div>
        </div>
        <div className="flex flex-row gap-1.5">
          <Tag icon="grid" label={data.tags[2].label} />
          <Tag icon="circles" label={data.tags[3].label} />
          <Tag icon="pill" label={data.tags[4].label} />
        </div>
        <div className="flex flex-row gap-1.5">
          <Tag icon="subtract" label={data.tags[5].label} />
        </div>
      </div>
      {/* end of mobile */}
      {/* tablet */}
      <div className="hidden md:flex flex-col text-hero-subtitle uppercase font-aeonik-mono -translate-x-17 gap-1 xl:gap-2">
        <div className="ml-auto">
          <Tag
            icon="grid"
            label={data.tags[2].label}
            sizes={{ base: 11, xl: 21 }}
          />
        </div>
        <div className="flex flex-row gap-3 translate-x-17">
          <div className="flex flex-row gap-4">
            <Tag
              icon="rectangle"
              label={data.tags[0].label}
              sizes={{ base: 11, xl: 21 }}
            />
            <Tag
              icon="subtract"
              label={data.tags[5].label}
              sizes={{ base: 11, xl: 21 }}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 translate-x-4 xl:-translate-x-20">
          <Tag
            icon="pill"
            label={data.tags[4].label}
            sizes={{ base: 11, xl: 21 }}
          />
          <Tag
            icon="coin"
            label={data.tags[1].label}
            sizes={{ base: 11, xl: 21 }}
          />
        </div>
        <div className="translate-x-16">
          <Tag
            icon="circles"
            label={data.tags[3].label}
            sizes={{ base: 11, xl: 21 }}
          />
        </div>
      </div>
      {/* end of tablet */}
    </section>
  );
}

// function Slider({ data }: { data: typeof homeData.slider }) {
//   return (
//     <section id="process" className="relative">
//       {data.slides.map((slide) => (
//         <div
//           key={slide.marker}
//           className="h-dvh pt-29 bg-dark-gray px-2 relative"
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title.lines.join(" ")}
//             fill
//             sizes="100vw"
//             className="object-cover z-0"
//           />
//           <div className="flex flex-row gap-10 text-white z-10 relative">
//             <div className="border-[0.5px] border-current rounded-full flex items-center justify-center px-2 w-[25px] h-[25px] aspect-square xl:w-[50px] xl:h-[50px] xl">
//               <p className="text-hero-subtitle font-aeonik-mono">
//                 {slide.marker}
//               </p>
//             </div>
//             <div className="flex flex-col items-center gap-9 xl:flex-row xl:items-start">
//               <h2 className="text-title-1 uppercase font-aeonik-mono">
//                 {slide.title.lines.join(" ")}
//               </h2>
//               <div className="grid grid-cols-2 gap-x-2 gap-y-4">
//                 {slide.steps.map((step) => (
//                   <div key={step.number} className="flex flex-col">
//                     <p className="text-subtitle-1">{step.number}</p>
//                     <p className="text-hero-subtitle font-aeonik-mono uppercase mt-1">
//                       {step.title.lines.join(" ")}
//                     </p>
//                     <div className="mt-2 flex flex-row items-center gap-0">
//                       {step.tags.map((tag, i) => (
//                         <p
//                           key={tag}
//                           className={`text-caption-0 py-0.5 px-1 text-white! border-[0.5px] border-white w-fit${i % 2 === 1 ? " rounded-full" : ""}`}
//                         >
//                           {tag}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

function RequestAccess({ data }: { data: typeof homeData.requestAccess }) {
  return (
    <section
      id="xantir"
      className="w-full h-full pt-32 relative md:py-32 xl:pt-0 max-w-dvw overflow-hidden"
    >
      <div className="flex flex-col items-start w-full px-2  justify-center gap-2 max-md:w-1/2 max-md:mr-auto md:mx-auto md:absolute md:top-1/2 md:-translate-y-1/2 md:left-2">
        <h2 className="text-display-1 uppercase font-aeonik-mono">
          {data.title.lines.join(" ")}
        </h2>
        <p className="text-subtitle-1 font-diatype max-w-xs">
          {data.description.ru}
        </p>
      </div>
      <div className="w-92 h-auto aspect-square bg-dark-gray rounded-full mx-auto mt-8 relative md:w-104 xl:w-[50dvw] overflow-hidden">
        <Image
          src={RequestAccessImage}
          alt="request access"
          fill
          className="object-cover"
        />
        <a
          href={accessRequestMailto}
          className="text-white text-center text-xs font-light leading-[1.1] tracking-[-0.02em] uppercase absolute top-1/2 left-1/2 -translate-1/2 px-4.5 py-3 rounded-[10px] font-aeonik-mono md:text-[6px] md:font-light md:not-italic md:leading-[110%] md:tracking-[-0.12px]  md:py-1.5 md:px-2 md:rounded-[5px] xl:text-[16px] xl:font-light xl:not-italic xl:leading-[110%] xl:tracking-[-0.32px] xl:py-4 xl:px-6 xl:rounded-[13.5px]"
          style={{
            background:
              "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          запросить доступ
        </a>
      </div>
      <div className="flex flex-col gap-4 items-start w-1/2 ml-auto mt-5 md:mx-auto md:absolute md:bottom-[5dvw] md:right-[5dvw] md:max-w-xs">
        <p className="text-subtitle-1 font-diatype">
          {data.audience.description.ru}
        </p>
        <div className="flex flex-row flex-wrap gap-1 mt-1 w-fit">
          {data.audience.tags.map((tag) => (
            <span
              key={tag.label}
              className="text-caption-0 py-0.5 px-1 border-[0.5px] border-dark-gray font-aeonik-mono uppercase"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team({ data }: { data: typeof homeData.team }) {
  return (
    <section
      id="team"
      className="w-full h-full pt-30 grid grid-cols-2 px-2 gap-x-2 gap-y-10 md:grid-cols-4"
    >
      <h2 className="sr-only">Команда MedChem</h2>
      {data.members.map((member, index) => (
        <TeamMember key={index} member={member} />
      ))}
    </section>
  );
}

function TeamMember({
  member,
}: {
  member: (typeof homeData.team.members)[number];
}) {
  return (
    <div className="flex flex-col items-start">
      <div
        className={`w-full h-auto aspect-square bg-dark-gray${member.shape === "circle" ? " rounded-full" : ""}`}
      />
      <h3 className="text-hero-subtitle mt-5 font-aeonik-mono">
        {member.name.lines.join(" ")}
      </h3>
      <div className="text-subtitle-1 flex flex-col items-start gap-0 mt-2 max-md:h-10 font-diatype">
        {member.credentials.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-1 mt-6">
        {member.roles.map((role) => (
          <p
            key={role.label}
            className="text-caption-0 p-1 bg-light-gray rounded-full font-aeonik-mono"
          >
            {role.label}
          </p>
        ))}
      </div>
    </div>
  );
}

function Clients() {
  return (
    <section id="partners" className="flex flex-col pt-30">
      <div className="flex flex-row items-end px-2">
        <svg
          width="185"
          height="118"
          viewBox="0 0 185 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[200px] h-[118px] xl:w-[515px]! xl:h-[305px]"
        >
          <path
            d="M43.176 8.96454e-05H89.712V117.6H43.176V8.96454e-05ZM34.776 2.85609C34.776 2.18409 35 1.6241 35.448 1.17609C36.008 0.616095 36.624 0.336095 37.296 0.336095C37.968 0.336095 38.528 0.616095 38.976 1.17609C39.536 1.6241 39.816 2.18409 39.816 2.85609C39.816 9.68809 38.136 15.9601 34.776 21.6721C31.416 27.3841 26.88 31.9201 21.168 35.2801C15.456 38.6401 9.24003 40.3201 2.52003 40.3201C1.84803 40.3201 1.23203 40.0961 0.67203 39.6481C0.22403 39.0881 2.97725e-05 38.4721 2.97725e-05 37.8001C2.97725e-05 37.1281 0.22403 36.5681 0.67203 36.1201C1.23203 35.5601 1.84803 35.2801 2.52003 35.2801C8.34403 35.2801 13.72 33.8241 18.648 30.9121C23.576 28.0001 27.496 24.0801 30.408 19.1521C33.32 14.2241 34.776 8.79209 34.776 2.85609ZM99.8353 75.2641C99.8353 74.7041 100.059 74.1441 100.507 73.5841C101.067 73.0241 101.683 72.7441 102.355 72.7441C103.027 72.7441 103.587 73.0241 104.035 73.5841C104.595 74.1441 104.875 74.7041 104.875 75.2641C104.875 82.0961 106.555 88.3681 109.915 94.0801C113.275 99.6801 117.811 104.16 123.523 107.52C129.235 110.88 135.507 112.56 142.339 112.56C149.171 112.56 155.443 110.88 161.155 107.52C166.867 104.16 171.403 99.6241 174.763 93.9121C178.123 88.2001 179.803 81.9841 179.803 75.2641C179.803 68.5441 178.123 62.3281 174.763 56.6161C171.403 50.9041 166.867 46.3681 161.155 43.0081C155.443 39.6481 149.171 37.9681 142.339 37.9681H124.531C123.859 37.9681 123.243 37.7441 122.683 37.2961C122.235 36.7361 122.011 36.1201 122.011 35.4481C122.011 34.7761 122.235 34.2161 122.683 33.7681C123.243 33.2081 123.859 32.9281 124.531 32.9281H142.339C149.955 32.9281 157.011 34.8321 163.507 38.6401C170.115 42.4481 175.323 47.6001 179.131 54.0961C182.939 60.4801 184.843 67.5361 184.843 75.2641C184.843 82.9921 182.939 90.1041 179.131 96.6001C175.323 102.984 170.115 108.08 163.507 111.888C157.011 115.696 149.955 117.6 142.339 117.6C134.611 117.6 127.499 115.696 121.003 111.888C114.507 108.08 109.355 102.984 105.547 96.6001C101.739 90.1041 99.8353 82.9921 99.8353 75.2641ZM115.795 49.2241C114.563 49.2241 113.499 48.7761 112.603 47.8801C111.707 46.9841 111.259 45.9761 111.259 44.8561V22.3441C111.259 21.7841 110.979 21.5041 110.419 21.5041H101.011C100.451 21.5041 100.171 21.2241 100.171 20.6641V1.0081C100.171 0.448091 100.451 0.168087 101.011 0.168087H183.163C183.723 0.168087 184.003 0.448091 184.003 1.0081V20.6641C184.003 21.2241 183.723 21.5041 183.163 21.5041H121.339C120.779 21.5041 120.499 21.7841 120.499 22.3441V44.8561C120.499 46.0881 120.051 47.1521 119.155 48.0481C118.259 48.8321 117.139 49.2241 115.795 49.2241Z"
            fill="#B1B1B1"
          />
          <path
            d="M17.6926 62.7622V73.9997M17.6926 85.2372V73.9997M17.6926 73.9997H28.9301M17.6926 73.9997H6.45508"
            stroke="#B1B1B1"
            strokeWidth="3.4875"
          />
        </svg>

        <div className="flex flex-col h-fit *:shrink-0 *:flex-none">
          <div className="border text-burgundy border-current h-fit relative py-[7px] px-[8px] translate-x-[30%] hidden xl:flex">
            <p className="font-aeonik-mono uppercase text-xs font-light leading-[1.1] tracking-[0.01em] xl:text-[24px] xl:font-light xl:leading-[110%] xl:tracking-[0.24px] ">
              разработчиков
            </p>
          </div>
          <div className="border-y text-burgundy border-current h-fit relative py-[7px] px-[3px] w-fit">
            <div className="absolute top-1/2 -translate-y-[50%] right-[80%] h-[75%] aspect-square w-auto border-l border-t -rotate-45 border-current xl:right-[89%] xl:h-[73%]" />
            <div className="absolute top-1/2 -translate-y-[50%] left-[80%] h-[75%] aspect-square w-auto border-l border-t rotate-135 border-current xl:left-[88.5%] xl:h-[73%]" />
            <p className="font-aeonik-mono uppercase text-xs font-light leading-[1.1] tracking-[0.01em] xl:text-[24px] xl:font-light xl:leading-[110%] xl:tracking-[0.24px] ">
              <span className="max-xl:hidden">и</span> Ученых
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 pt-30 bg-light-gray gap-15 pb-20 md:mt-12 md:pt-6 md:gap-10 md:pb-6 xl:pt-15 xl:gap-30 xl:pb-18.5">
        <h2 className="text-display-1 uppercase font-aeonik-mono px-2 md:ml-auto md:mr-30">
          лидеры рынка <br />
          работают <br className="md:hidden" />с нами
        </h2>
        <ClientsSlider />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contacts"
      className="pt-50 w-full px-2 pb-2 md:py-2 md:h-dvh md:flex md:flex-row md:*:flex-1"
      style={{
        background:
          "radial-gradient(145.01% 93.79% at 67.18% 65.45%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <svg
          width="167"
          height="322"
          viewBox="0 0 167 322"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[136px] md:h-[264px] xl:w-[353px] xl:h-[680px]"
        >
          <path
            d="M18.7181 0L65.5943 119.269C80.2631 156.68 101.628 157.32 123.632 157.32C137.344 157.32 149.78 167.872 149.78 183.22C149.78 199.847 149.461 200.806 153.926 215.515L167 258.682H162.557L148.844 217.114C144.699 204.643 136.706 197.289 122.994 197.289C86.3219 197.289 100.353 229.904 66.8699 229.904C62.4054 229.904 49.65 228.945 40.4023 215.835C40.0834 214.876 26.6902 322.953 27.0091 321.994L18.7181 313.68L10.4271 321.994C-16.6782 276.908 12.0215 227.346 62.4054 179.703C21.5881 141.652 2.13602 94.0081 2.13602 68.4276C2.13602 41.8879 7.55708 22.7026 18.7181 0ZM136.387 183.859C138.938 183.859 140.851 181.941 140.851 179.063C140.851 176.505 138.938 174.586 136.387 174.586C133.517 174.586 131.604 176.505 131.604 179.063C131.604 181.941 133.517 183.859 136.387 183.859Z"
            fill="#FAFAFA"
          />
        </svg>
        <a
          href={accessRequestMailto}
          className="text-white text-center text-xs font-light leading-[1.1] tracking-[-0.02em] uppercase font-aeonik-mono py-3 px-4.5 rounded-[10px] translate-x-20 -translate-y-10 md:text-[6px] md:font-light md:not-italic md:leading-[110%] md:tracking-[-0.12px]  md:py-1.5 md:px-2 md:rounded-[5px] xl:text-[16px] xl:font-light xl:leading-[110%] xl:tracking-[-0.32px] xl:py-4 xl:px-6 xl:rounded-[13.6px] xl:translate-x-45 xl:-translate-y-30"
          style={{
            background:
              "radial-gradient(1283.06% 349.86% at 269.51% 194.67%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          {siteConfig.email}
        </a>
      </div>
      <div className="flex flex-row w-full items-end justify-end text-subtitle-1 text-white mt-40 md:mt-0">
        <div className="flex flex-row items-start gap-1 w-full md:items-center">
          <div className="w-[9px] h-[9px] bg-white md:w-[6px] md:h-[6px] xl:w-[14px] xl:h-[14px] animate-pulse" />
          <p>
            Designed & Developed <br className="md:hidden" />
            by VOSK
          </p>
        </div>
        <div className="flex flex-col gap-1 w-fit whitespace-nowrap xl:gap-4">
          <p>
            ООО «МЕД ХЕМ» 2026 <br />
            ИНН: 9731155581
          </p>
          <Link href="#">
            Пользовательское <br className="md:hidden" />
            соглашение
          </Link>
        </div>
      </div>
    </footer>
  );
}
