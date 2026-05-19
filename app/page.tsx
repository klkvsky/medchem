import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";

import { Tag } from "@/components/tag";
import ClientsSlider from "@/components/clients-slider";
import DrugDiscovery from "@/components/drug-discovery";
import Projects from "@/components/projects";

export default function Home() {
  const data = {
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
              image: "",
              tags: ["CHEMDIV"],
            },
            {
              title: "DDR1",
              subtitle: "Preclinical",
              image: "",
              tags: ["INSILICO MEDICINE"],
            },
            {
              title: "IRAK4",
              subtitle: "Preclinical",
              image: "",
              tags: ["INSILICO MEDICINE"],
            },
            {
              title: "JAK3",
              subtitle: "Preclinical",
              image: "",
              tags: ["INSILICO MEDICINE"],
            },
            {
              title: "AR",
              subtitle: "Phase I",
              image: "",
              tags: ["ALLA CHEM"],
            },
            {
              title: "QPCTL",
              subtitle: "Phase I",
              image: "",
              tags: ["INSILICO MEDICINE"],
            },
            {
              title: "ATM/DNA-PK",
              subtitle: "Preclinical",
              image: "",
              tags: ["РОСАТОМ", "НМИЦ РАДИОЛОГИИ"],
            },
            {
              title: "MPRO",
              subtitle: "Phase II",
              image: "",
              tags: ["INSILICO MEDICINE"],
            },
            {
              title: "TNIK",
              subtitle: "Phase II",
              image: "",
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
              image: "",
              tags: ["EXPERTSYSTEMS"],
            },
            {
              title: "CHEMISTRY42",
              subtitle: "Generative Chemistry",
              image: "",
              tags: ["INSILICO MEDICINE"],
            },
            {
              title: "INVENTUM.AI",
              subtitle: "Generative Chemistry",
              image: "",
              tags: ["РОСАТОМ", "ИННОПОЛИС"],
            },
            {
              title: "BIOLOGY42",
              subtitle: "Generative Biology",
              image: "",
              tags: ["INSILICO MEDICINE"],
            },
            {
              title: "GOLDEN CUBES",
              subtitle: "AI-Assisted Workflow",
              image: "",
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
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <nav className="fixed top-0 left-0 w-full z-100 ">
        <div className="relative w-full h-full flex p-2">
          <Image
            src={logo}
            width={147}
            height={24}
            alt="MedChem logo"
            className="absolute top-2 left-1/2 -translate-x-1/2 md:w-[88px]! md:h-[14px]!"
          />
          <div className="flex flex-col text-nav-link uppercase text-[#FAFAFA] max-md:ml-auto font-aeonik-mono md:mr-auto">
            <Link href="/#">Услуги</Link>
            <Link href="/#">Проекты</Link>
            <Link href="/#">Команда</Link>
            <Link href="/#">Портфолио</Link>
            <Link href="/#">Контакты</Link>
          </div>
        </div>
      </nav>
      <main className="w-full h-full">
        <Hero />
        <DrugDiscovery />
        <Slider />
        <Projects />
        <RequestAccess />
        <Team />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div
      id="hero"
      className="w-full h-dvh text-[#FAFAFA] flex flex-col items-start justify-end pb-50 px-3 gap-3 max-w-dvw overflow-hidden md:items-end md:justify-end md:gap-0 md:pb-10 xl:pb-26"
      style={{
        background:
          "radial-gradient(160.91% 74.35% at 76.3% 74.35%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <h1 className="text-title-1 uppercase font-aeonik-mono md:text-center md:w-full md:flex md:flex-col md:mt-[50dvh]">
        <span>проектируем</span>
        <span className="md:translate-x-15 xl:translate-x-40"> будущее </span>
        <span className="md:translate-x-20 xl:translate-x-50">
          фармацевтики
        </span>
      </h1>
      {/* mobile */}
      <div className="flex flex-col text-hero-subtitle uppercase font-aeonik-mono md:hidden">
        <div className="flex flex-row gap-3">
          <div className="flex flex-row gap-1.5">
            <Tag icon="rectangle" label="DRUG DISCOVERY" />
            <Tag icon="coin" label="chemoinformatics" />
          </div>
        </div>
        <div className="flex flex-row gap-1.5">
          <Tag icon="grid" label="CADD" />
          <Tag icon="circles" label="AI" />
          <Tag icon="pill" label="medicinal chemistry" />
        </div>
        <div className="flex flex-row gap-1.5">
          <Tag icon="subtract" label="software development" />
        </div>
      </div>
      {/* end of mobile */}
      {/* tablet */}
      <div className="hidden md:flex flex-col text-hero-subtitle uppercase font-aeonik-mono -translate-x-17 gap-1">
        <div className="ml-auto">
          <Tag icon="grid" label="CADD" sizes={{ base: 11, xl: 21 }} />
        </div>
        <div className="flex flex-row gap-3 translate-x-17">
          <div className="flex flex-row gap-1.5">
            <Tag
              icon="rectangle"
              label="DRUG DISCOVERY"
              sizes={{ base: 11, xl: 21 }}
            />
            <Tag
              icon="subtract"
              label="software development"
              sizes={{ base: 11, xl: 21 }}
            />
          </div>
        </div>
        <div className="flex flex-row gap-1.5 translate-x-3">
          <Tag
            icon="pill"
            label="medicinal chemistry"
            sizes={{ base: 11, xl: 21 }}
          />
          <Tag
            icon="coin"
            label="chemoinformatics"
            sizes={{ base: 11, xl: 21 }}
          />
        </div>
        <div className="translate-x-16">
          <Tag icon="circles" label="AI" sizes={{ base: 11, xl: 21 }} />
        </div>
      </div>
      {/* end of tablet */}
    </div>
  );
}

function Slider() {
  return (
    <div className="relative">
      <div className="h-dvh pt-29 bg-dark-gray px-2">
        <div className="flex flex-row gap-10 text-white">
          <div className="border-[0.5px] border-current rounded-full flex items-center justify-center px-2 w-[25px] h-[25px] aspect-square ">
            <p className="text-hero-subtitle font-aeonik-mono">A</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-title-1 uppercase font-aeonik-mono">
              разработка молекул
            </h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              <div className="flex flex-col">
                <p className="text-subtitle-1">1</p>
                <p className="text-hero-subtitle font-aeonik-mono uppercase mt-1">
                  Выбор мишени и патентный анализ
                </p>
                <div className="mt-2 flex flex-row items-center gap-">
                  <p className="text-caption-0 py-0.5 px-1 border-[0.5px] border-white w-fit">
                    Target ID
                  </p>
                  <p className="text-caption-0 py-0.5 px-1 border-[0.5px] border-white w-fit rounded-full">
                    Target ID
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-dvh pt-29 bg-dark-gray px-2">
        <div className="flex flex-row gap-10 text-white">
          <div className="border-[0.5px] border-current rounded-full flex items-center justify-center px-2 w-[25px] h-[25px] aspect-square ">
            <p className="text-hero-subtitle font-aeonik-mono">Б</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-title-1 uppercase font-aeonik-mono">
              цифровые продукты
            </h2>
            <div className="flex flex-col gap-0 text-subtitle-1 font-diatype">
              <p>Поиск и выбор мишени</p>
              <p>Валидация мишени</p>
              <p>Поиск и оптимизация «хита»</p>
              <p>Доклинические исследования</p>
              <p>Клинические исследования</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestAccess() {
  return (
    <div className="w-full h-full pt-32 relative md:py-32 xl:pt-0">
      <div className="flex flex-col items-start w-fit mx-auto justify-center gap-2 translate-x-[20%] md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-2">
        <h3 className="text-display-1 uppercase font-aeonik-mono">Xantir</h3>
        <div className="flex flex-col gap-0 text-subtitle-1 w-fit items-start justify-start font-diatype ">
          <p>Поиск и выбор мишени</p>
          <p>Валидация мишени</p>
          <p>Поиск и оптимизация</p>
          <p>Доклинические исследования</p>
        </div>
      </div>
      <div className="w-92 h-auto aspect-square bg-dark-gray rounded-full mx-auto mt-8 relative md:w-104 xl:w-[50dvw]">
        <button
          className="text-white text-center text-xs font-light leading-[1.1] tracking-[-0.02em] uppercase absolute top-1/2 left-1/2 -translate-1/2 px-4.5 py-3 rounded-[10px] font-aeonik-mono md:text-[6px] md:font-light md:not-italic md:leading-[110%] md:tracking-[-0.12px]  md:py-1.5 md:px-2 md:rounded-[5px] xl:text-[16px] xl:font-light xl:not-italic xl:leading-[110%] xl:tracking-[-0.32px] xl:py-4 xl:px-6 xl:rounded-[13.5px]"
          style={{
            background:
              "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          запросить доступ
        </button>
      </div>
    </div>
  );
}

function Team() {
  const teamMembers = [
    {
      name: "ЯН ИВАНЕНКОВ",
      facts: [
        ">20 years in Drug Design",
        ">250 scientific papers",
        "~38 h-index",
      ],
      tag: "FIRST TAG TYPE",
    },
    {
      name: "АНАСТАСИЯ КОРЖЕНЕВКСАЯ",
      facts: [
        ">20 years in Drug Design",
        ">250 scientific papers",
        "~38 h-index",
      ],
      tag: "FIRST TAG TYPE",
    },
    {
      name: "АЛЕКСЕЙ МАЛЫШЕВ",
      facts: [
        ">20 years in Drug Design",
        ">250 scientific papers",
        "~38 h-index",
      ],
      tag: "FIRST TAG TYPE",
    },
    {
      name: "BELLADONNA THE DOG",
      facts: ["Talented and supportive"],
      tag: "FIRST TAG TYPE",
    },
  ];
  return (
    <div className="w-full h-full pt-30 grid grid-cols-2 px-2 gap-x-2 gap-y-10 md:grid-cols-4">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
}

function TeamMember({
  name,
  facts,
  tag,
}: {
  name: string;
  facts: string[];
  tag: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full h-auto aspect-square bg-dark-gray" />
      <p className="text-hero-subtitle mt-5 font-aeonik-mono">{name}</p>
      <div className="text-subtitle-1 flex flex-col items-start gap-0 mt-2 max-md:h-10 font-diatype">
        {facts.map((fact, index) => (
          <p key={index}>{fact}</p>
        ))}
      </div>
      <p className="text-caption-0 p-1 bg-light-gray rounded-full mt-6 font-aeonik-mono">
        {tag}
      </p>
    </div>
  );
}

function Clients() {
  return (
    <div className="flex flex-col pt-30">
      <div className="flex flex-row items-end px-2">
        <svg
          width="208"
          height="140"
          viewBox="0 0 208 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="xl:w-[515px]! xl:h-[305px]"
        >
          <path
            d="M51.4 -9.53674e-06H106.8V140H51.4V-9.53674e-06ZM41.4 3.39999C41.4 2.6 41.6667 1.93333 42.2 1.4C42.8667 0.73333 43.6 0.399997 44.4 0.399997C45.2 0.399997 45.8667 0.73333 46.4 1.4C47.0667 1.93333 47.4 2.6 47.4 3.39999C47.4 11.5333 45.4 19 41.4 25.8C37.4 32.6 32 38 25.2 42C18.4 46 11 48 3 48C2.2 48 1.46667 47.7333 0.800001 47.2C0.266667 46.5333 5.66244e-07 45.8 5.66244e-07 45C5.66244e-07 44.2 0.266667 43.5333 0.800001 43C1.46667 42.3333 2.2 42 3 42C9.93333 42 16.3333 40.2667 22.2 36.8C28.0667 33.3333 32.7333 28.6667 36.2 22.8C39.6667 16.9333 41.4 10.4667 41.4 3.39999ZM132.052 114.4C130.985 113.333 130.452 112.067 130.452 110.6C130.452 109.133 130.985 107.867 132.052 106.8C133.252 105.6 134.585 105 136.052 105C137.518 105 138.785 105.533 139.852 106.6L155.052 121.8C155.985 122.733 156.452 124 156.452 125.6C156.452 127.2 155.918 128.533 154.852 129.6C153.918 130.533 152.652 131 151.052 131C149.452 131 148.185 130.533 147.252 129.6L132.052 114.4ZM162.252 139.8C160.652 139.8 159.252 139.267 158.052 138.2C156.852 137 156.252 135.533 156.252 133.8C156.252 132.2 156.852 130.8 158.052 129.6C159.252 128.4 160.652 127.8 162.252 127.8C163.985 127.8 165.385 128.4 166.452 129.6C167.652 130.8 168.252 132.2 168.252 133.8C168.252 135.533 167.652 137 166.452 138.2C165.385 139.267 163.985 139.8 162.252 139.8ZM171.252 127.6C169.652 127.6 168.252 127.067 167.052 126C165.852 124.8 165.252 123.333 165.252 121.6C165.252 120 165.852 118.6 167.052 117.4C168.252 116.2 169.652 115.6 171.252 115.6C172.985 115.6 174.385 116.2 175.452 117.4C176.652 118.6 177.252 120 177.252 121.6C177.252 123.333 176.652 124.8 175.452 126C174.385 127.067 172.985 127.6 171.252 127.6ZM180.452 114.2C178.852 114.2 177.452 113.667 176.252 112.6C175.052 111.4 174.452 109.933 174.452 108.2C174.452 106.6 175.052 105.2 176.252 104C177.452 102.8 178.852 102.2 180.452 102.2C182.185 102.2 183.585 102.8 184.652 104C185.852 105.2 186.452 106.6 186.452 108.2C186.452 109.933 185.852 111.4 184.652 112.6C183.585 113.667 182.185 114.2 180.452 114.2ZM190.452 101.4C188.852 101.4 187.452 100.867 186.252 99.8C185.052 98.6 184.452 97.1333 184.452 95.4C184.452 93.8 185.052 92.4 186.252 91.2C187.452 90 188.852 89.4 190.452 89.4C192.185 89.4 193.585 90 194.652 91.2C195.852 92.4 196.452 93.8 196.452 95.4C196.452 97.1333 195.852 98.6 194.652 99.8C193.585 100.867 192.185 101.4 190.452 101.4ZM163.052 88.2C155.052 88.2 147.652 86.2667 140.852 82.4C134.052 78.4 128.652 73.0667 124.652 66.4C120.785 59.6 118.852 52.2 118.852 44.2C118.852 36.0667 120.785 28.6667 124.652 22C128.652 15.2 133.985 9.86666 140.652 6C147.452 1.99999 154.918 -9.53674e-06 163.052 -9.53674e-06C171.185 -9.53674e-06 178.585 1.99999 185.252 6C192.052 9.86666 197.385 15.2 201.252 22C205.252 28.6667 207.252 36.0667 207.252 44.2C207.252 52.2 205.252 59.6 201.252 66.4C197.385 73.0667 192.052 78.4 185.252 82.4C178.452 86.2667 171.052 88.2 163.052 88.2ZM199.852 87.8C198.252 87.8 196.852 87.2667 195.652 86.2C194.452 85 193.852 83.5333 193.852 81.8C193.852 80.2 194.452 78.8 195.652 77.6C196.852 76.4 198.252 75.8 199.852 75.8C201.585 75.8 202.985 76.4 204.052 77.6C205.252 78.8 205.852 80.2 205.852 81.8C205.852 83.5333 205.252 85 204.052 86.2C202.985 87.2667 201.585 87.8 199.852 87.8ZM191.052 72.8V17H135.252V72.8H191.052Z"
            fill="#B1B1B1"
          />
        </svg>
        <div className="flex flex-col h-fit *:shrink-0 *:flex-none">
          <div className="border-y text-burgundy border-current h-fit relative py-[7px] px-[3px] translate-x-[30%] hidden xl:flex">
            <div className="absolute top-1/2 -translate-y-[49%] right-[80%] h-[77%] aspect-square w-auto border-l border-t -rotate-45 border-current xl:right-[92.5%] xl:h-[73%]" />
            <div className="absolute top-1/2 -translate-y-[49%] left-[80%] h-[77%] aspect-square w-auto border-l border-t rotate-135 border-current xl:left-[92.5%] xl:h-[73%]" />
            <p className="font-aeonik-mono uppercase text-xs font-light leading-[1.1] tracking-[0.01em] xl:text-[24px] xl:font-light xl:leading-[110%] xl:tracking-[0.24px] ">
              разработчиков
            </p>
          </div>
          <div className="border-y text-burgundy border-current h-fit relative py-[7px] px-[3px] w-fit">
            <div className="absolute top-1/2 -translate-y-[49%] right-[80%] h-[77%] aspect-square w-auto border-l border-t -rotate-45 border-current xl:right-[89%] xl:h-[73%]" />
            <div className="absolute top-1/2 -translate-y-[49%] left-[80%] h-[77%] aspect-square w-auto border-l border-t rotate-135 border-current xl:left-[88.5%] xl:h-[73%]" />
            <p className="font-aeonik-mono uppercase text-xs font-light leading-[1.1] tracking-[0.01em] xl:text-[24px] xl:font-light xl:leading-[110%] xl:tracking-[0.24px] ">
              <span className="max-xl:hidden">и</span> Ученых
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 pt-30 bg-light-gray gap-15 pb-20 md:mt-12 md:pt-6 md:gap-10 md:pb-6 xl:pt-15 xl:gap-30 xl:pb-18.5">
        <h3 className="text-display-1 uppercase font-aeonik-mono px-2 md:ml-auto md:mr-30">
          лидеры рынка <br />
          работают <br className="md:hidden" />с нами
        </h3>
        <ClientsSlider />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="pt-50 w-full px-2 pb-2 md:py-2 md:h-dvh md:flex md:flex-row md:*:flex-1"
      style={{
        background:
          "radial-gradient(145.01% 93.79% at 67.18% 65.45%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center md:-translate-x-1/8">
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
        <Link
          href="/"
          className="text-white text-center text-xs font-light leading-[1.1] tracking-[-0.02em] uppercase font-aeonik-mono py-3 px-4.5 rounded-[10px] translate-x-20 -translate-y-10 md:text-[6px] md:font-light md:not-italic md:leading-[110%] md:tracking-[-0.12px]  md:py-1.5 md:px-2 md:rounded-[5px] xl:text-[16px] xl:font-light xl:leading-[110%] xl:tracking-[-0.32px] xl:py-4 xl:px-6 xl:rounded-[13.6px] xl:translate-x-45 xl:-translate-y-30"
          style={{
            background:
              "radial-gradient(1283.06% 349.86% at 269.51% 194.67%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          medchem@hello.com
        </Link>
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
          <Link href="">
            Пользовательское <br className="md:hidden" />
            соглашение
          </Link>
        </div>
      </div>
    </footer>
  );
}
