import { Tag } from "@/components/ui/tag";

export function Xantir() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center px-2 pt-16.5 pb-30 md:pt-28 md:gap-12 md:pb-37.5">
      <div className="flex flex-col gap-2 justify-center items-center md:gap-4">
        <h3 className="text-h1 uppercase">Xantir</h3>
        <p className="text-text font-diatype w-3/4 md:w-5/8">
          AI-платформа для патентного анализа, извлечения данных и разработки
          новых структур малых молекул
        </p>
      </div>
      <div className="w-full h-auto aspect-square rounded-full relative bg-amber-200">
        <button
          className="text-text absolute top-1/2 left-1/2 -translate-1/2 px-4.5 py-3 rounded-[10px] uppercase text-white md:px-7.5 md:py-4"
          style={{
            background:
              "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          запросить доступ
        </button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center md:gap-5.5">
        <p className="text-text font-diatype w-3/4 md:w-5/8">
          Для компаний в фармацевтике, агрохимии и ветеринарии, которые
          используют патентные данные для поиска новых направлений разработки.
        </p>
        <div className="flex flex-row items-center justify-center">
          <Tag text="pharma" shape="rectangle" />
          <Tag text="agrochem" shape="trapezoid" />
          <Tag text="animal care" shape="pill" />
        </div>
      </div>
    </div>
  );
}
