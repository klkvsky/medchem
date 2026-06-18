import { Tag } from "@/components/ui/tag";

export function Services() {
  return (
    <div>
      <ServicesSlide />
      <ServicesSlide />
    </div>
  );
}

function ServicesSlide() {
  return (
    <div className="flex flex-col h-dvh justify-between bg-amber-300 pt-21 pb-5 px-2">
      <div className="flex flex-col gap-3">
        <p
          className="text-h3 flex items-center justify-center rounded-full ring ring-white"
          style={{
            width: 25,
            height: 25,
          }}
        >
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
    <div className="flex flex-col gap-8">
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
    <div className="flex flex-row gap-2">
      <p className="text-text tabular-nums w-4 h-4">{number}</p>
      <div className="flex flex-col gap-2">
        <p className="text-h3 uppercase">{title}</p>
        <div>
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
