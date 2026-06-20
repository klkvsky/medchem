import { Tag } from "@/components/ui/tag";

export function Xantir() {
  return (
    <div className="flex flex-col items-center justify-center gap-[clamp(1.5rem,calc(0.4286rem_+_5.3571vw),3rem)] text-center px-2 pt-[clamp(4.125rem,calc(2.0714rem_+_10.2679vw),7rem)] pb-[clamp(7.5rem,calc(6.1607rem_+_6.6964vw),9.375rem)] md:gap-[clamp(2.5rem,calc(4.25rem_-_2.1875vw),3rem)] md:pt-[clamp(7rem,calc(3.4375rem_+_7.4219vw),9.375rem)] xl:grid xl:grid-cols-[20dvw_1fr_20dvw] xl:py-[clamp(9.375rem,calc(1.25rem_+_10.1563vw),11rem)] xl:gap-[clamp(2.5rem,calc(-10rem_+_15.625vw),5rem)] 2xl:py-[clamp(11rem,11.4583vw,13.75rem)] 2xl:gap-20 3xl:py-[clamp(13.75rem,11.4583vw,18.3333rem)]">
      <div className="flex flex-col gap-[clamp(0.5rem,calc(0.1429rem_+_1.7857vw),1rem)] justify-center items-center xl:items-start xl:text-left xl:gap-[clamp(1rem,calc(-0.25rem_+_1.5625vw),1.25rem)] 2xl:gap-[clamp(1.25rem,calc(0.25rem_+_1.0417vw),1.5rem)] 3xl:gap-[clamp(1.5rem,1.25vw,2rem)]">
        <h3 className="text-h1 uppercase xl:text-h2">Xantir</h3>
        <p className="text-text font-diatype w-3/4 md:w-5/8 xl:w-full">
          AI-платформа для патентного анализа, извлечения данных и разработки
          новых структур малых молекул
        </p>
        <div className="hidden xl:flex flex-row items-center justify-center mt-[clamp(0.375rem,calc(-0.25rem_+_0.7813vw),0.5rem)] 2xl:mt-2">
          <Tag text="pharma" shape="rectangle" />
          <Tag text="agrochem" shape="trapezoid" />
          <Tag text="animal care" shape="pill" />
        </div>
      </div>
      <div className="w-full h-auto aspect-square rounded-full relative bg-amber-200">
        <button
          className="text-text absolute top-1/2 left-1/2 -translate-1/2 px-[clamp(1.125rem,calc(0.5893rem_+_2.6786vw),1.875rem)] py-[clamp(0.75rem,calc(0.5714rem_+_0.8929vw),1rem)] rounded-[10px] uppercase text-white"
          style={{
            background:
              "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          запросить доступ
        </button>
      </div>
      <div className="flex flex-col gap-[clamp(1rem,calc(0.7321rem_+_1.3393vw),1.375rem)] justify-center items-center xl:items-end xl:text-left">
        <p className="text-text font-diatype w-3/4 md:w-5/8 xl:w-full">
          Для компаний в фармацевтике, агрохимии и ветеринарии, которые
          используют патентные данные для поиска новых направлений разработки.
        </p>
        <div className="flex flex-row items-center justify-center xl:hidden">
          <Tag text="pharma" shape="rectangle" />
          <Tag text="agrochem" shape="trapezoid" />
          <Tag text="animal care" shape="pill" />
        </div>
      </div>
    </div>
  );
}
