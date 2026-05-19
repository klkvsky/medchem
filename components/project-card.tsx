import { Tag } from "./tag";
export default function ProjectCard({
  title,
  year,
  tag,
  direction,
}: {
  title: string;
  year: number;
  tag: string;
  direction: "left" | "right" | "up";
}) {
  return (
    <div
      className="flex flex-row gap-3.5"
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
        className="flex flex-col gap-4"
        style={{
          alignItems:
            direction === "left" || direction === "up" ? "start" : "end",
          textAlign:
            direction === "left" || direction === "up" ? "left" : "right",
        }}
      >
        <div className="bg-dark-gray w-11.5 h-11.5" />
        <div
          className="flex flex-col gap-2"
          style={{
            alignItems:
              direction === "left" || direction === "up" ? "start" : "end",
          }}
        >
          <button className="w-4 h-4 bg-light-gray rounded-full flex items-center justify-center text-burgundy">
            <Tag icon="plus" size={7} />
          </button>
          <div className="relative ">
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
          </div>
        </div>
        <div className="text-caption-0 p-1 bg-light-gray text-burgundy w-fit uppercase font-aeonik-mono whitespace-nowrap">
          {tag}
        </div>
      </div>
    </div>
  );
}
