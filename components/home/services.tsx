import { Tag } from "@/components/ui/tag";

export function Services() {
  return (
    <div>
      <ServiceMobile />
      <ServicesDesktop />
    </div>
  );
}

function ServicesDesktop() {
  const activeSlide: number = 2;
  return (
    <div className="hidden xl:flex h-dvh bg-blue-900 items-end text-white px-2 pb-10 2xl:pb-22">
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-row items-start gap-16.5 2xl:gap-22">
          <p className="text-h3 uppercase w-10 h-10 flex items-center justify-center border rounded-full">
            {activeSlide === 1 ? "а" : "b"}
          </p>
          <div className="flex flex-col gap-3.5 2xl:gap-4">
            <p
              data-active={activeSlide === 1}
              className="text-h1 uppercase data-[active=false]:opacity-20 data-[active=false]:-translate-y-[3.5ch]"
            >
              разработка <br />
              молекул
            </p>
            <p
              data-active={activeSlide === 2}
              className="text-h1 uppercase data-[active=false]:opacity-20 data-[active=true]:-translate-y-[3.5ch]"
            >
              цифровые <br />
              продукты
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="opacity-0">
            <ServicesList />
          </div>
          <div
            data-active={activeSlide === 1}
            className="absolute top-0 left-0 data-[active=false]:opacity-0 data-[active=false]:-translate-y-1/2"
          >
            <ServicesList />
          </div>
          <div
            data-active={activeSlide === 2}
            className="absolute top-0 left-0 data-[active=false]:opacity-0 data-[active=false]:-translate-y-1/2"
          >
            <ServicesList />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceMobile() {
  return (
    <div className="xl:hidden">
      <ServicesSlide />
      <ServicesSlide />
    </div>
  );
}

function ServicesSlide() {
  return (
    <div className="flex flex-col h-dvh justify-between bg-amber-300 pt-21 md:pt-41 pb-5 px-2">
      <div className="flex flex-col gap-3 md:gap-5">
        <p className="text-h3 flex items-center justify-center rounded-full ring ring-white w-[25px] h-[25px] md:w-10 md:h-10">
          A
        </p>
        <h3 className="text-h1 uppercase">разработка молекул</h3>
      </div>
      <ServicesList />
    </div>
  );
}

function ServicesList() {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-y-6.5 md:gap-x-2 xl:gap-y-7 xl:w-100 2xl:gap-y-8 2xl:w-125">
      <ServicesItem
        number="1"
        title="Выбор мишени и патентный анализ"
        tags={["target id", "competitors"]}
      />
      <ServicesItem
        number="2"
        title="Дизайн молекул"
        tags={["aidd", "in silico"]}
      />
      <ServicesItem
        number="3"
        title="Идентификация и оптимизация хита"
        tags={["hitid", "h2l"]}
      />
      <ServicesItem
        number="4"
        title="Оптимизация лидера"
        tags={["leadopt", "admet"]}
      />
      <ServicesItem
        number="5"
        title="Разработка доклинического кандидата"
        tags={["pk", "pd"]}
      />
    </div>
  );
}

function ServicesItem({
  number,
  title,
  tags,
}: {
  number: string;
  title: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-row gap-2 md:gap-2.5 xl:flex-col xl:gap-0.5 2xl:gap-1 2xl:w-fit">
      <p className="text-text tabular-nums w-4 h-4">{number}</p>
      <div className="flex flex-col gap-2 md:gap-2.5 2xl:gap-3">
        <p className="text-h3 uppercase">{title}</p>
        <div className="xl:flex xl:flex-wrap">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag}
              variant="outline"
              shape={index === 0 ? "rectangle" : "pill"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
