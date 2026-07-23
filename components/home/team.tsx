import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ui/pattern-icons";
import { Tag } from "@/components/ui/tag";
import type { HomePageData, HomeTag } from "@/types/home";

import { numbers } from "./assets";
import { SanityImageView } from "./sanity-image";

type TeamData = NonNullable<HomePageData["team"]>;
type TeamMemberData = NonNullable<NonNullable<TeamData["teamMembers"]>[number]>;

function tagShape(type: HomeTag["type"]) {
  return type ?? "pill";
}

export function Team({ data }: { data?: TeamData | null }) {
  const members = data?.teamMembers ?? [];

  return (
    <div
      id="team"
      data-nav-title="Команда"
      className="flex flex-col px-2 gap-22 pt-[clamp(4.125rem,calc(1.8929rem_+_11.1607vw),7.25rem)] pb-[clamp(7.5rem,calc(6.1607rem_+_6.6964vw),9.375rem)] md:pt-[clamp(0rem,calc(18.125rem_-_22.6563vw),7.25rem)] xl:pt-0 xl:gap-[clamp(5.5rem,calc(-10.75rem_+_20.3125vw),8.75rem)] xl:pb-[clamp(9.375rem,calc(1.25rem_+_10.1563vw),11rem)] 2xl:gap-[clamp(8.75rem,calc(3.75rem_+_5.2083vw),10rem)] 2xl:pb-[clamp(11rem,11.4583vw,13.75rem)] 3xl:gap-[clamp(10rem,8.3333vw,13.3333rem)] 3xl:pb-[clamp(13.75rem,11.4583vw,18.3333rem)] text-[#411319]"
    >
      <div className="flex flex-col gap-[clamp(2rem,calc(0.75rem_+_6.25vw),3.75rem)] md:gap-[clamp(1.75rem,calc(6.75rem_-_6.25vw),3.75rem)] xl:gap-7 2xl:gap-[clamp(1.75rem,calc(-6.25rem_+_8.3333vw),3.75rem)] 3xl:gap-[clamp(3.75rem,3.125vw,5rem)]">
        <h3 className="text-h2 uppercase md:w-[75%] xl:w-1/2 xl:ml-auto font-aeonik-mono">
          {data?.title}
        </h3>
        <div className="grid grid-cols-2 gap-x-2 gap-y-[clamp(2rem,calc(0.75rem_+_6.25vw),3.75rem)] md:gap-y-[clamp(1.75rem,calc(6.75rem_-_6.25vw),3.75rem)] xl:grid-cols-4">
          {members.map((member, index) => (
            <TeamMember
              key={member._key ?? member.title ?? index}
              member={member}
              isLast={index === members.length - 1}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row items-end">
        <Image
          src={numbers.fifteen}
          alt="fifteen"
          width={200}
          height={118}
          className="w-[min(clamp(12.5rem,calc(3.5714rem_+_44.6429vw),25rem),45dvw)] h-auto md:w-[clamp(21rem,calc(31rem_-_12.5vw),25rem)] xl:w-[clamp(21rem,calc(1rem_+_25vw),25rem)] 2xl:w-[clamp(25rem,26.0417vw,31.25rem)] 3xl:w-[clamp(31.25rem,26.0417vw,41.6667rem)]"
        />
        {(data?.bottomTags ?? []).map((tag, index) => (
          <div
            key={tag._key ?? tag.name ?? index}
            className={
              index > 0 ? "translate-y-[2ch] md:translate-y-[3ch]" : undefined
            }
          >
            <Tag
              text={tag.name ?? ""}
              variant="outline"
              shape={tagShape(tag.type)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamMember({
  member,
  isLast,
}: {
  member: TeamMemberData;
  isLast?: boolean;
}) {
  const descriptionLines = (member.description ?? "")
    .split(/\r\n|[\r\n\u2028\u2029]/)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-[clamp(1rem,calc(0.6429rem_+_1.7857vw),1.5rem)] text-[#411319]">
      <div
        data-last={isLast}
        className="w-full h-auto aspect-square relative overflow-hidden bg-amber-200 data-[last=true]:rounded-full"
      >
        <SanityImageView
          image={member.image}
          fill
          sizes="(min-width: 1152px) 25vw, 50vw"
          className="object-cover"
        />
        {member.isBadge && (
          <Link
            href="https://scholar.google.com/citations?hl=en&user=uDE4PzEAAAAJ"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <div className="absolute bottom-[clamp(0.5rem,calc(0.2321rem_+_1.3393vw),0.875rem)] right-[clamp(0.5rem,calc(0.2321rem_+_1.3393vw),0.875rem)] px-[clamp(0.5rem,calc(0.1429rem_+_1.7857vw),1rem)] py-[clamp(0.375rem,calc(-0.0268rem_+_2.0089vw),0.75rem)] rounded-full bg-white flex flex-row items-center gap-[clamp(0.25rem,calc(0.0714rem_+_0.8929vw),0.5rem)]">
              <ArrowIcon />
              <p className="text-tag-button uppercase">Scholar</p>
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-[clamp(0.625rem,calc(0.1786rem_+_2.2321vw),1rem)]">
        <h4 className="text-h3 uppercase">{member.title}</h4>
        <div className="flex flex-col gap-0 text-text font-diatype md:h-[8ch]">
          {descriptionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-0 md:flex-row">
        {(member.tags ?? []).map((tag, index) => (
          <Tag
            key={tag._key ?? tag.name ?? index}
            text={tag.name ?? ""}
            shape={tagShape(tag.type)}
          />
        ))}
      </div>
    </div>
  );
}
