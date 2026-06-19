import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      className="h-dvh flex flex-col items-start justify-end p-2 md:p-5"
      style={{
        background:
          "radial-gradient(111.88% 83.41% at 63.33% 54.29%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <div className="text-text text-left flex flex-col gap-5 text-white font-diatype md:gap-10 xl:flex-row-reverse xl:items-end xl:ml-auto xl:gap-48">
        <div className="flex flex-col gap-1.5 md:gap-3">
          <p>
            ООО «МЕД ХЕМ» 2026 <br /> ИНН: 9731155581
          </p>
          <Link href="/" className="xl:w-1/2">
            Пользовательское соглашение
          </Link>
        </div>
        <Link href="/">Designed & Developed by VOSK</Link>
      </div>
    </footer>
  );
}
