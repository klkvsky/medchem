"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import ClientLogo1 from "@/public/assets/clients/1.svg";
import ClientLogo2 from "@/public/assets/clients/2.svg";
import ClientLogo3 from "@/public/assets/clients/3.svg";
import ClientLogo4 from "@/public/assets/clients/4.svg";
import ClientLogo5 from "@/public/assets/clients/5.svg";
import ClientLogo6 from "@/public/assets/clients/6.svg";
import ClientLogo7 from "@/public/assets/clients/7.svg";
import ClientLogo8 from "@/public/assets/clients/8.svg";
import ClientLogo9 from "@/public/assets/clients/9.svg";

export default function ClientsSlider() {
  const clients = [
    {
      name: "Герофарм",
      logo: ClientLogo1,
    },
    {
      name: "Expert Systems",
      logo: ClientLogo2,
    },
    {
      name: "ИФарма",
      logo: ClientLogo3,
    },
    {
      name: "ChemDiv",
      logo: ClientLogo4,
    },
    {
      name: "РосАтом",
      logo: ClientLogo5,
    },
    {
      name: "Сбер",
      logo: ClientLogo6,
    },
    {
      name: "ХимРар",
      logo: ClientLogo7,
    },
    {
      name: "НМИЦ Радиологии",
      logo: ClientLogo8,
    },
    {
      name: "Иннополис",
      logo: ClientLogo9,
    },
  ];
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={4}
        slidesPerView={4}
        breakpoints={{
          768: {
            slidesPerView: 8,
          },
          1280: {
            slidesPerView: 8,
          },
        }}
        loop={true}
        autoplay={{ delay: 1500 }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <ClientSlide name={client.name} logo={client.logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ClientSlide({
  name,
  logo,
}: {
  name: string;
  logo: typeof ClientLogo1;
}) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <Image
        src={logo}
        alt={name}
        width={30}
        height={30}
        className="w-[30px] h-[30px] object-contain"
      />
      <p className="text-subtitle-1 text-burgundy text-center">{name}</p>
    </div>
  );
}
