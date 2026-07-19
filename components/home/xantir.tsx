import { Tag } from "@/components/ui/tag";
import type { HomePageData, HomeTag } from "@/sanity/lib/home";

import { SanityImageView } from "./sanity-image";

type XantirData = NonNullable<HomePageData["xantir"]>;

function tagShape(type: HomeTag["type"]) {
  return type ?? "rectangle";
}

function XantirTags({
  tags,
  className,
}: {
  tags: HomeTag[];
  className: string;
}) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <Tag
          key={tag._key ?? tag.name}
          text={tag.name ?? ""}
          shape={tagShape(tag.type)}
        />
      ))}
    </div>
  );
}

export function Xantir({ data }: { data?: XantirData | null }) {
  const tags = data?.tags ?? [];

  return (
    <div
      id="xantir"
      data-nav-title="Xantir"
      className="flex flex-col items-center justify-center gap-[clamp(1.5rem,calc(0.4286rem_+_5.3571vw),3rem)] text-center px-2 pt-[clamp(2.75rem,calc(1.25rem_+_6vw),4.25rem)] pb-[clamp(7.5rem,calc(6.1607rem_+_6.6964vw),9.375rem)] md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] md:items-center md:gap-4 md:px-4 md:py-[clamp(4rem,calc(1.5rem_+_5vw),7rem)] md:text-left xl:grid-cols-[20dvw_1fr_20dvw] xl:gap-[clamp(2.5rem,calc(-10rem_+_15.625vw),5rem)] xl:px-2 xl:py-[clamp(9.375rem,calc(1.25rem_+_10.1563vw),11rem)] 2xl:py-[clamp(11rem,11.4583vw,13.75rem)] 2xl:gap-20 3xl:py-[clamp(13.75rem,11.4583vw,18.3333rem)] text-[#411319]"
    >
      <div className="flex flex-col gap-[clamp(0.5rem,calc(0.1429rem_+_1.7857vw),1rem)] justify-center items-center md:items-start md:gap-[clamp(0.75rem,calc(-0.25rem_+_1.5625vw),1.25rem)] 2xl:gap-[clamp(1.25rem,calc(0.25rem_+_1.0417vw),1.5rem)] 3xl:gap-[clamp(1.5rem,1.25vw,2rem)]">
        <h3 className="text-h1 uppercase md:text-h2">{data?.title}</h3>
        <p className="text-text font-diatype w-3/4 md:w-full">
          {data?.description}
        </p>
        <XantirTags
          tags={tags}
          className="hidden md:flex flex-row flex-wrap items-center justify-start gap-y-1 mt-[clamp(0.375rem,calc(-0.25rem_+_0.7813vw),0.5rem)] 2xl:mt-2"
        />
      </div>
      <div className="w-full max-w-[22rem] md:max-w-[min(100%,28rem)] xl:max-w-none mx-auto h-auto aspect-square rounded-full relative overflow-hidden bg-amber-200">
        <SanityImageView
          image={data?.image}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
        <a
          href={data?.buttonLink ?? "mailto:info@medchem.ltd"}
          className="text-text absolute top-1/2 left-1/2 -translate-1/2 px-[clamp(1.125rem,calc(0.5893rem_+_2.6786vw),1.875rem)] py-[clamp(0.75rem,calc(0.5714rem_+_0.8929vw),1rem)] rounded-[10px] uppercase text-white whitespace-nowrap"
          style={{
            background:
              "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          {data?.buttonText}
        </a>
      </div>
      <div className="flex flex-col gap-[clamp(1rem,calc(0.7321rem_+_1.3393vw),1.375rem)] justify-center items-center md:items-end">
        <p className="text-text font-diatype w-3/4 md:w-full">
          {data?.description2}
        </p>
        <XantirTags
          tags={tags}
          className="flex flex-row items-center justify-center md:hidden"
        />
      </div>
    </div>
  );
}
