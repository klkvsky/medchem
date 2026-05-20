import { Tag } from "./tag";
export default function ProjectCard({
  title,
  subtitle,
  tags,
  direction,
}: {
  title: string;
  subtitle: string;
  tags: readonly string[];
  direction: "left" | "right" | "up";
}) {
  return (
    <div
      className="flex flex-row gap-3.5 shrink-0"
      style={{
        flexDirection:
          direction === "left"
            ? "row"
            : direction === "up"
              ? "column"
              : "row-reverse",
      }}
    >
      <div
        className="flex items-center gap-3.5 opacity-0 md:opacity-100"
        style={{
          flexDirection:
            direction === "left" || direction === "up" ? "row" : "row-reverse",
        }}
      >
        <Tag icon="rectangle" size={6} />
      </div>
      <div
        className="flex flex-col gap-4 xl:gap-6"
        style={{
          alignItems:
            direction === "left" || direction === "up" ? "start" : "end",
          textAlign:
            direction === "left" || direction === "up" ? "left" : "right",
        }}
      >
        <div className="bg-dark-gray w-11.5 h-11.5 xl:h-23.5 xl:w-23.5" />
        <div
          className="flex flex-col gap-2"
          style={{
            alignItems:
              direction === "left" || direction === "up" ? "start" : "end",
          }}
        >
          <button className="w-4 h-4 bg-light-gray rounded-full flex items-center justify-center text-burgundy xl:w-7.5 xl:h-7.5">
            <Tag
              icon="plus"
              sizes={{
                base: 4,
                md: 14,
              }}
            />
          </button>
          <div className="relative flex flex-col">
            <div
              className="flex items-center gap-3.5 absolute top-0 md:hidden"
              style={{
                right: direction === "left" ? "calc(100% + 16.5px)" : "auto",
                left: direction === "left" ? "auto" : "calc(100% + 16.5px)",
              }}
            >
              <Tag icon="rectangle" size={6} />
            </div>
            <h3 className="text-hero-subtitle uppercase whitespace-pre-line font-aeonik-mono">
              {title}
            </h3>
            <p className="text-subtitle-1 font-diatype mt-2">{subtitle}</p>
          </div>
        </div>

        <div className="flex flex-row gap-1">
          {tags.map((t) => (
            <div
              key={t}
              className="text-caption-0 p-1 bg-light-gray text-burgundy w-fit uppercase font-aeonik-mono whitespace-nowrap "
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
