import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      className="h-dvh flex flex-col items-start justify-end p-2"
      style={{
        background:
          "radial-gradient(111.88% 83.41% at 63.33% 54.29%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <div className="text-text text-left flex flex-col gap-5 text-white font-diatype">
        <div className="flex flex-col gap-1.5">
          <p>
            ООО «МЕД ХЕМ» 2026 <br /> ИНН: 9731155581
          </p>
          <Link href="/">Пользовательское соглашение</Link>
        </div>
        <Link href="/">Designed & Developed by VOSK</Link>
      </div>
    </footer>
  );
}
