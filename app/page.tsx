import Image, { type StaticImageData } from "next/image";

import CirclesIcon from "@/public/assets/icons/circles.png";
import CoinIcon from "@/public/assets/icons/coin.png";
import GridIcon from "@/public/assets/icons/grid.png";
import HoleIcon from "@/public/assets/icons/hole.png";
import PillIcon from "@/public/assets/icons/pill.png";
import RectangleIcon from "@/public/assets/icons/rectangle.png";

import Number10Icon from "@/public/assets/numbers/10.png";
import Number15Icon from "@/public/assets/numbers/15.png";
import Number20Icon from "@/public/assets/numbers/20.png";
import Number30Icon from "@/public/assets/numbers/30.png";
import Link from "next/link";

const icons = {
  circles: CirclesIcon,
  coin: CoinIcon,
  grid: GridIcon,
  hole: HoleIcon,
  pill: PillIcon,
  rectangle: RectangleIcon,
};

const numbers = {
  ten: Number10Icon,
  fifteen: Number15Icon,
  twenty: Number20Icon,
  thirty: Number30Icon,
};

const Logo = () => (
  <svg
    width="147"
    height="24"
    viewBox="0 0 147 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M54.5077 21.1459C51.0927 21.1459 49.1226 18.5254 49.1226 15.3341C49.1226 12.1427 51.0927 9.49622 54.5077 9.49622C57.9226 9.49622 59.8665 12.1427 59.8665 15.3341C59.8665 18.5254 57.9226 21.1459 54.5077 21.1459ZM54.5077 24C59.3411 24 63.0188 20.6789 63.0188 14.893V0H59.8665V11.3643L61.1799 11.3124C60.2605 8.27676 57.4761 6.64216 54.245 6.64216C49.7793 6.64216 45.9703 10.1708 45.9703 15.3341C45.9703 20.4973 49.7793 24 54.5077 24ZM147 23.7146V13.4141C147 10.093 144.925 6.66811 140.485 6.66811C138.252 6.66811 136.545 7.65405 135.415 9.08108C134.338 7.65405 132.684 6.66811 130.424 6.66811C125.801 6.66811 123.726 10.067 123.726 13.3881V23.7146H126.878V13.3881C126.878 11.3643 128.06 9.52216 130.424 9.52216C132.789 9.52216 133.787 11.3903 133.787 13.4141V23.7146H136.939V13.4141V13.3881C136.939 11.3643 138.121 9.52216 140.485 9.52216C142.85 9.52216 143.848 11.3903 143.848 13.4141V23.7146H147ZM27.1619 16.6054L42.8181 16.5016V13.8292H27.1356L27.1619 16.6054ZM42.7655 18.5254H39.4294C38.4575 20.3676 36.8288 21.2757 34.8324 21.2757C31.4174 21.2757 29.4473 18.6551 29.4473 15.3341C29.4473 12.013 31.4174 9.36649 34.8324 9.36649C38.2473 9.36649 40.1912 12.013 40.1912 15.3341L40.0861 16.5276H43.2647C43.3172 16.1384 43.3435 15.7751 43.3435 15.3081C43.3435 10.4043 39.5345 6.64216 34.8324 6.64216C30.104 6.64216 26.295 10.4303 26.295 15.3341C26.295 20.2378 30.104 24 34.8324 24C38.6414 24 41.636 21.5611 42.7655 18.5254ZM82.5365 16.9168H79.3317C78.8063 19.4076 76.8361 21.1459 74.183 21.1459C70.768 21.1459 68.7979 18.5254 68.7979 15.3341C68.7979 12.1427 70.768 9.49622 74.183 9.49622C76.5209 9.49622 78.4385 10.8714 79.2003 13.1805H82.4314C81.5645 9.23676 78.1496 6.64216 74.183 6.64216C69.4546 6.64216 65.6456 10.1708 65.6456 15.3341C65.6456 20.4973 69.4546 24 74.183 24C78.2284 24 81.8797 21.2497 82.5365 16.9168ZM104.523 16.6054L120.18 16.5016V13.8292H104.497L104.523 16.6054ZM120.127 18.5254H116.791C115.793 20.2378 114.19 21.1459 112.194 21.1459C108.779 21.1459 106.809 18.5254 106.809 15.3341C106.809 12.1427 108.779 9.49622 112.194 9.49622C115.609 9.49622 117.553 12.1427 117.553 15.3341L117.448 16.5276H120.626C120.679 16.1384 120.705 15.7751 120.705 15.3081C120.705 10.4043 116.896 6.64216 112.194 6.64216C107.466 6.64216 103.657 10.4303 103.657 15.3341C103.657 20.2378 107.466 24 112.194 24C116.003 24 118.997 21.5611 120.127 18.5254ZM88.3156 23.7405V15.3341C88.3156 12.1427 89.8392 9.49622 92.9389 9.49622C96.1174 9.49622 97.4834 12.0908 97.4834 15.3341V23.7405H100.636V15.3341C100.636 9.80757 97.4308 6.64216 93.2016 6.64216C90.2857 6.64216 87.9216 8.27676 87.0021 11.3124L88.3156 11.3643V0H85.1633V15.36V23.7405H88.3156ZM23.2741 23.7146V13.4141C23.2741 10.093 21.1989 6.66811 16.7595 6.66811C14.5266 6.66811 12.8192 7.65405 11.6896 9.08108C10.6126 7.65405 8.95765 6.66811 6.69853 6.66811C2.07523 6.66811 0 10.067 0 13.3881V23.7146H3.15225V13.3881C3.15225 11.3643 4.33435 9.52216 6.69853 9.52216C9.06272 9.52216 10.0609 11.3903 10.0609 13.4141V23.7146H13.2132V13.4141V13.3881C13.2132 11.3643 14.3953 9.52216 16.7595 9.52216C19.1237 9.52216 20.1219 11.3903 20.1219 13.4141V23.7146H23.2741Z"
      fill="#411319"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="7"
    height="7"
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.87178 3.87178C3.66645 4.07711 3.33355 4.07711 3.12822 3.87178C2.92289 3.66645 2.92289 3.33355 3.12822 3.12822C3.33355 2.92289 3.66645 2.92289 3.87178 3.12822C4.07711 3.33355 4.07711 3.66645 3.87178 3.87178Z"
      fill="#411319"
    />
    <path
      d="M6.846 3.87178C6.64068 4.07711 6.30778 4.07711 6.10245 3.87178C5.89712 3.66645 5.89712 3.33355 6.10245 3.12822C6.30778 2.92289 6.64068 2.92289 6.846 3.12822C7.05133 3.33355 7.05133 3.66645 6.846 3.87178Z"
      fill="#411319"
    />
    <path
      d="M0.897552 3.87178C0.692225 4.07711 0.359323 4.07711 0.153996 3.87178C-0.0513319 3.66645 -0.0513319 3.33355 0.153996 3.12822C0.359323 2.92289 0.692225 2.92289 0.897552 3.12822C1.10288 3.33355 1.10288 3.66645 0.897552 3.87178Z"
      fill="#411319"
    />
    <path
      d="M3.87178 0.897552C3.66645 1.10288 3.33355 1.10288 3.12822 0.897552C2.92289 0.692225 2.92289 0.359323 3.12822 0.153996C3.33355 -0.0513319 3.66645 -0.0513319 3.87178 0.153996C4.07711 0.359323 4.07711 0.692225 3.87178 0.897552Z"
      fill="#411319"
    />
    <path
      d="M3.87178 6.846C3.66645 7.05133 3.33355 7.05133 3.12822 6.846C2.92289 6.64068 2.92289 6.30778 3.12822 6.10245C3.33355 5.89712 3.66645 5.89712 3.87178 6.10245C4.07711 6.30778 4.07711 6.64068 3.87178 6.846Z"
      fill="#411319"
    />
    <path
      d="M3.87178 5.35889C3.66645 5.56422 3.33355 5.56422 3.12822 5.35889C2.92289 5.15356 2.92289 4.82066 3.12822 4.61533C3.33355 4.41001 3.66645 4.41001 3.87178 4.61533C4.07711 4.82066 4.07711 5.15356 3.87178 5.35889Z"
      fill="#411319"
    />
    <path
      d="M2.38467 3.87178C2.17934 4.07711 1.84644 4.07711 1.64111 3.87178C1.43578 3.66645 1.43578 3.33355 1.64111 3.12822C1.84644 2.92289 2.17934 2.92289 2.38467 3.12822C2.58999 3.33355 2.58999 3.66645 2.38467 3.87178Z"
      fill="#411319"
    />
    <path
      d="M3.87178 2.38467C3.66645 2.58999 3.33355 2.58999 3.12822 2.38467C2.92289 2.17934 2.92289 1.84644 3.12822 1.64111C3.33355 1.43578 3.66645 1.43578 3.87178 1.64111C4.07711 1.84644 4.07711 2.17934 3.87178 2.38467Z"
      fill="#411319"
    />
    <path
      d="M5.35889 3.87178C5.15356 4.07711 4.82066 4.07711 4.61533 3.87178C4.41001 3.66645 4.41001 3.33355 4.61533 3.12822C4.82066 2.92289 5.15356 2.92289 5.35889 3.12822C5.56422 3.33355 5.56422 3.66645 5.35889 3.87178Z"
      fill="#411319"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.28335 4.71919C4.0065 4.99604 3.55764 4.99604 3.28079 4.71919C3.00394 4.44234 3.00394 3.99348 3.28079 3.71662C3.55764 3.43977 4.0065 3.43977 4.28335 3.71662C4.5602 3.99348 4.5602 4.44234 4.28335 4.71919Z"
      fill="#411319"
    />
    <path
      d="M7.79232 5.59831C7.51547 5.87516 7.06661 5.87516 6.78976 5.59831C6.51291 5.32146 6.51291 4.87259 6.78976 4.59574C7.06661 4.31889 7.51547 4.31889 7.79232 4.59574C8.06917 4.87259 8.06917 5.32146 7.79232 5.59831Z"
      fill="#411319"
    />
    <path
      d="M7.79232 1.21021C7.51547 1.48706 7.06661 1.48706 6.78976 1.21021C6.51291 0.933355 6.51291 0.48449 6.78976 0.207639C7.06661 -0.0692128 7.51547 -0.0692128 7.79232 0.207639C8.06917 0.48449 8.06917 0.933355 7.79232 1.21021Z"
      fill="#411319"
    />
    <path
      d="M1.27567 7.72689C0.99882 8.00374 0.549958 8.00374 0.273109 7.72689C-0.00374107 7.45004 -0.00374107 7.00118 0.273109 6.72433C0.549958 6.44747 0.99882 6.44747 1.27567 6.72433C1.55252 7.00118 1.55252 7.45004 1.27567 7.72689Z"
      fill="#411319"
    />
    <path
      d="M1.2102 1.21021C0.933349 1.48706 0.484487 1.48706 0.207637 1.21021C-0.0692124 0.933354 -0.0692124 0.48449 0.207637 0.207639C0.484487 -0.0692128 0.933349 -0.0692128 1.2102 0.207639C1.48705 0.48449 1.48705 0.933354 1.2102 1.21021Z"
      fill="#411319"
    />
    <path
      d="M5.78719 3.21534C5.51034 3.49219 5.06148 3.49219 4.78463 3.21534C4.50778 2.93849 4.50778 2.48962 4.78463 2.21277C5.06148 1.93592 5.51034 1.93592 5.78719 2.21277C6.06404 2.48962 6.06404 2.93849 5.78719 3.21534Z"
      fill="#411319"
    />
    <path
      d="M7.79232 7.79236C7.51547 8.06921 7.06661 8.06921 6.78976 7.79236C6.51291 7.51551 6.51291 7.06665 6.78976 6.78979C7.06661 6.51294 7.51547 6.51294 7.79232 6.78979C8.06917 7.06665 8.06917 7.51551 7.79232 7.79236Z"
      fill="#411319"
    />
    <path
      d="M5.78719 3.21534C5.51034 3.49219 5.06148 3.49219 4.78463 3.21534C4.50778 2.93849 4.50778 2.48962 4.78463 2.21277C5.06148 1.93592 5.51034 1.93592 5.78719 2.21277C6.06404 2.48962 6.06404 2.93849 5.78719 3.21534Z"
      fill="#411319"
    />
    <path
      d="M7.79236 3.40426C7.51551 3.68111 7.06665 3.68111 6.7898 3.40426C6.51295 3.12741 6.51295 2.67854 6.7898 2.40169C7.06665 2.12484 7.51551 2.12484 7.79236 2.40169C8.06921 2.67854 8.06921 3.12741 7.79236 3.40426Z"
      fill="#411319"
    />
    <path
      d="M4.28335 4.71919C4.0065 4.99604 3.55764 4.99604 3.28079 4.71919C3.00394 4.44234 3.00394 3.99348 3.28079 3.71662C3.55764 3.43977 4.0065 3.43977 4.28335 3.71662C4.5602 3.99348 4.5602 4.44234 4.28335 4.71919Z"
      fill="#411319"
    />
    <path
      d="M3.40424 1.2102C3.12739 1.48705 2.67853 1.48705 2.40168 1.2102C2.12483 0.93335 2.12483 0.48449 2.40168 0.207639C2.67853 -0.0692128 3.12739 -0.0692128 3.40424 0.207639C3.68109 0.48449 3.68109 0.93335 3.40424 1.2102Z"
      fill="#411319"
    />
    <path
      d="M3.40424 1.2102C3.12739 1.48705 2.67853 1.48705 2.40168 1.2102C2.12483 0.93335 2.12483 0.48449 2.40168 0.207639C2.67853 -0.0692128 3.12739 -0.0692128 3.40424 0.207639C3.68109 0.48449 3.68109 0.93335 3.40424 1.2102Z"
      fill="#411319"
    />
    <path
      d="M5.78719 3.21534C5.51034 3.49219 5.06148 3.49219 4.78463 3.21534C4.50778 2.93849 4.50778 2.48962 4.78463 2.21277C5.06148 1.93592 5.51034 1.93592 5.78719 2.21277C6.06404 2.48962 6.06404 2.93849 5.78719 3.21534Z"
      fill="#411319"
    />
    <path
      d="M5.78719 3.21534C5.51034 3.49219 5.06148 3.49219 4.78463 3.21534C4.50778 2.93849 4.50778 2.48962 4.78463 2.21277C5.06148 1.93592 5.51034 1.93592 5.78719 2.21277C6.06404 2.48962 6.06404 2.93849 5.78719 3.21534Z"
      fill="#411319"
    />
    <path
      d="M5.59828 1.21021C5.32143 1.48706 4.87257 1.48706 4.59572 1.21021C4.31887 0.933354 4.31887 0.48449 4.59572 0.207639C4.87257 -0.0692128 5.32143 -0.0692128 5.59828 0.207639C5.87513 0.48449 5.87513 0.933354 5.59828 1.21021Z"
      fill="#411319"
    />
    <path
      d="M5.59828 1.21021C5.32143 1.48706 4.87257 1.48706 4.59572 1.21021C4.31887 0.933354 4.31887 0.48449 4.59572 0.207639C4.87257 -0.0692128 5.32143 -0.0692128 5.59828 0.207639C5.87513 0.48449 5.87513 0.933354 5.59828 1.21021Z"
      fill="#411319"
    />
    <path
      d="M5.59828 1.21021C5.32143 1.48706 4.87257 1.48706 4.59572 1.21021C4.31887 0.933354 4.31887 0.48449 4.59572 0.207639C4.87257 -0.0692128 5.32143 -0.0692128 5.59828 0.207639C5.87513 0.48449 5.87513 0.933354 5.59828 1.21021Z"
      fill="#411319"
    />
    <path
      d="M5.59828 1.21021C5.32143 1.48706 4.87257 1.48706 4.59572 1.21021C4.31887 0.933354 4.31887 0.48449 4.59572 0.207639C4.87257 -0.0692128 5.32143 -0.0692128 5.59828 0.207639C5.87513 0.48449 5.87513 0.933354 5.59828 1.21021Z"
      fill="#411319"
    />
    <path
      d="M2.77951 6.22304C2.50266 6.49989 2.0538 6.49989 1.77695 6.22304C1.5001 5.94619 1.5001 5.49733 1.77695 5.22048C2.0538 4.94362 2.50266 4.94362 2.77951 5.22048C3.05636 5.49733 3.05636 5.94619 2.77951 6.22304Z"
      fill="#411319"
    />
  </svg>
);

const tagShapeClasses = {
  rectangle: "",
  pill: "rounded-full",
  trapezoid:
    "[clip-path:polygon(10px_0,calc(100%_-_10px)_0,100%_50%,calc(100%_-_10px)_100%,10px_100%,0_50%)]",
};

const tagPaddingClasses = {
  rectangle: "px-[5px]",
  pill: "px-[8px]",
  trapezoid: "px-[16px]",
};

const tagVariantClasses = {
  default: "bg-[#E3E3E3]",
  outline: "bg-background",
};

function Tag({
  text,
  shape,
  variant = "default",
}: {
  text: string;
  shape: "rectangle" | "pill" | "trapezoid";
  variant?: "default" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center justify-center text-tag-button uppercase shrink-0 w-fit whitespace-nowrap text-[#471922]";
  const shapeClasses = tagShapeClasses[shape];
  const paddingClasses = tagPaddingClasses[shape];

  if (variant === "outline") {
    return (
      <div
        className={`${shapeClasses} inline-flex shrink-0 w-fit bg-[#E3E3E3] p-px`}
      >
        <span
          className={`${baseClasses} ${shapeClasses} ${paddingClasses} ${tagVariantClasses[variant]} py-[4px]`}
        >
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${shapeClasses} ${paddingClasses} ${tagVariantClasses[variant]} py-[5px]`}
    >
      {text}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Xantir />
        <Team />
        <Partners />
      </main>
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
    </div>
  );
}

function Partners() {
  return (
    <div className="flex flex-col gap-30 bg-[#E3E3E3] pt-21.5 pb-5">
      <h4 className="text-h2 w-3/4 text-left uppercase px-2">
        лидеры рынка работают с нами
      </h4>
      <div className="flex flex-row gap-11 items-start max-w-full w-full overflow-x-auto">
        <PartnersItem name="Артген Биотех" />
        <PartnersItem name="Валента" />
        <PartnersItem name="Герофарм" />
        <PartnersItem name="Expert Systems" />
        <PartnersItem name="ИФарма" />
        <PartnersItem name="ChemDiv" />
        <PartnersItem name="РосАтом" />
        <PartnersItem name="Сбер" />
        <PartnersItem name="ХимРар" />
        <PartnersItem name="НМИЦ Радиологии" />
        <PartnersItem name="Иннополис" />
        <PartnersItem name="Insilico Medicine" />
        <PartnersItem name="МГУ" />
        <PartnersItem name="ИБГ" />
      </div>
    </div>
  );
}

function PartnersItem({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-12.5 h-12.5 object-contain bg-amber-300" />
      <p className="text-tag-button uppercase text-center">{name}</p>
    </div>
  );
}

function Team() {
  return (
    <div className="flex flex-col px-2 gap-22 pt-16.5 pb-30">
      <div className="flex flex-col gap-8">
        <h3 className="text-h2 uppercase text-center">
          Эксперты, которые создают результат
        </h3>
        <div className="grid grid-cols-2 gap-x-2 gap-y-8">
          <TeamMember
            name="Ян Иваненков"
            badge="Scholar"
            description={[
              "PhD",
              "20+ лет опыта",
              "250+ научных публикаций",
              "40 h-index",
            ]}
            tags={["Основатель", "Директор по науке"]}
          />
          <TeamMember
            name="Анастасия Корженевская"
            description={["MSc", "6+ лет опыта"]}
            tags={["Генеральный директор"]}
          />
          <TeamMember
            name="Александр Малышев"
            description={["PharmD", "9+ лет опыта"]}
            tags={["Директор по продукту"]}
          />
          <TeamMember
            name="Белладонна"
            description={["Талантливая", "и поддерживающая"]}
            tags={["Талисман команды"]}
            isLast
          />
        </div>
      </div>
      <div className="flex flex-row items-end pb-50">
        <Image
          src={numbers.fifteen}
          alt="fifteen"
          width={200}
          height={118}
          className="w-50 h-auto"
        />
        <Tag text="Ученых" variant="outline" shape="rectangle" />
        <div className="translate-y-[2ch]">
          <Tag text="И разработчиков" variant="outline" shape="trapezoid" />
        </div>
      </div>
    </div>
  );
}

function TeamMember({
  name,
  badge,
  description,
  tags,
  isLast,
}: {
  name: string;
  badge?: string;
  description: string[];
  tags: string[];
  isLast?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div
        data-last={isLast}
        className="w-full h-auto aspect-square relative bg-amber-200 data-[last=true]:rounded-full"
      >
        {badge && (
          <div className="absolute bottom-2 right-2 px-2 py-1.5 rounded-full bg-white flex flex-row items-center gap-1">
            <ArrowIcon />
            <p className="text-tag-button uppercase">{badge}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2.5">
        <h4 className="text-h3 uppercase">{name}</h4>
        <div className="flex flex-col gap-0 text-text font-diatype">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-0">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} shape="pill" />
        ))}
      </div>
    </div>
  );
}

function Xantir() {
  return (
    <div className="flex flex-col items-center justify-center  gap-6 text-center px-2 pt-16.5 pb-30">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-h1 uppercase">Xantir</h3>
        <p className="text-text font-diatype w-3/4">
          AI-платформа для патентного анализа, извлечения данных и разработки
          новых структур малых молекул
        </p>
      </div>
      <div className="w-full h-auto aspect-square rounded-full relative bg-amber-200">
        <button
          className="text-text absolute top-1/2 left-1/2 -translate-1/2 px-4.5 py-3 rounded-[10px] uppercase text-white"
          style={{
            background:
              "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
          }}
        >
          запросить доступ
        </button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-text font-diatype w-3/4">
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

function Projects() {
  return (
    <div className="flex flex-col items-center gap-8 pt-19 pb-35">
      <Logo />
      <div className="px-2">
        <div className="flex flex-row items-center text-center">
          <p className="text-h3 uppercase">разработка молекул</p>
          <div className="w-px h-20 bg-[#B1B1B1]" />
          <p className="text-h3 uppercase">цифровые продукты</p>
        </div>
        <div className="w-full h-20 border-t rounded-2xl border-[#B1B1B1] " />
        <div className="flex flex-row justify-between -mt-20">
          <ProjectLane align="left" />
          <ProjectLane align="right" />
        </div>
      </div>
      <button
        className="text-h3 uppercase text-white mx-auto py-3 px-4.5 rounded-[10px]"
        style={{
          background:
            "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
        }}
      >
        Показать больше
      </button>
    </div>
  );
}

function ProjectLane({ align }: { align?: "left" | "right" }) {
  return (
    <div
      className="flex flex-col border-x border-[#B1B1B1] w-full h-fit rounded-t-2xl gap-15 pt-38"
      style={{
        borderLeft: align === "right" ? "none" : "",
        borderRight: align === "left" ? "none" : "",
        paddingLeft: align === "left" ? 8 : undefined,
        paddingRight: align === "right" ? 8 : undefined,
      }}
    >
      {Array.from({ length: align === "left" ? 14 : 7 }).map((_, i) => (
        <ProjectItem key={i} align={align} />
      ))}
      <Image
        src={align === "left" ? numbers.thirty : numbers.ten}
        alt="numbers.thirty"
        width={127}
        height={105}
      />
    </div>
  );
}

function ProjectItem({ align }: { align?: "left" | "right" }) {
  return (
    <div
      className="flex flex-col gap-4"
      style={{
        alignItems: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <div className="w-11.5 h-11.5 bg-[#B1B1B1]" />
      <div
        className="flex flex-col gap-3"
        style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
      >
        <button className="w-4 h-4 flex items-center justify-center bg-[#E3E3E3] rounded-full">
          <PlusIcon />
        </button>
        <div
          className="flex flex-col gap-1"
          style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
        >
          <p className="text-h3">TNIK</p>
          <p className="text-text">Phase II</p>
        </div>
      </div>
      <div className="flex flex-row">
        <Tag text="Insilico" shape="rectangle" />
        <Tag text="Иннополис" shape="pill" />
      </div>
    </div>
  );
}

function Services() {
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

function Hero() {
  return (
    <div
      className="text-white h-dvh flex flex-col items-center justify-end gap-3 pb-43"
      style={{
        background:
          "radial-gradient(164.72% 106.54% at 76.3% 74.35%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <h1 className="text-h1 flex flex-col uppercase">
        <span>проектируем</span>
        <span className="ml-[1ch]">будущее</span>
        <span className="ml-[1ch]">фармацевтики</span>
      </h1>
      <HeroDescription />
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-3">
        <HeroDescriptionItem icon={icons.rectangle} text="drug discovery" />
      </div>
      <div className="flex flex-row gap-3 ml-[62px]">
        <HeroDescriptionItem icon={icons.coin} text="chemoinformatics" />
        <HeroDescriptionItem icon={icons.grid} text="cadd" />
      </div>
      <div className="flex flex-row gap-3 ml-[32px]">
        <HeroDescriptionItem icon={icons.pill} text="medicinal chemistry" />
        <HeroDescriptionItem icon={icons.circles} text="ai" />
      </div>
      <div className="flex flex-row gap-3 ml-[127px]">
        <HeroDescriptionItem icon={icons.hole} text="software development" />
      </div>
    </div>
  );
}

function HeroDescriptionItem({
  icon,
  text,
}: {
  icon: StaticImageData;
  text: string;
}) {
  return (
    <div className="flex flex-row items-center gap-2 shrink-0 flex-none">
      <Image
        src={icon}
        alt={text}
        width={12}
        height={12}
        className="shrink-0! flex-none! w-3 h-3 invert"
      />
      <p className="text-h3 uppercase">{text}</p>
    </div>
  );
}

function About() {
  return (
    <div className="px-10 flex flex-col gap-3.5 h-dvh justify-center">
      <Image
        src={numbers.twenty}
        alt="Number 20"
        className="w-39 h-auto object-contain"
      />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4.5">
          <h2 className="text-h3 uppercase">
            лет Создаем R&D-решения для life sciences
          </h2>
          <p className="text-text">
            Поиск перспективных направлений разработки, патентно-конкурентный
            анализ, дизайн малых молекул, проектирование цифровых инструментов
          </p>
        </div>
        <AboutTags />
      </div>
    </div>
  );
}

function AboutTags() {
  return (
    <div className="flex flex-row items-center">
      <Tag text="pharma" shape="rectangle" />
      <Tag text="agrochem" shape="pill" />
      <Tag text="animal care" shape="rectangle" />
      <Tag text="vc funds" shape="trapezoid" />
      <Tag text="IP teams" shape="rectangle" />
    </div>
  );
}
