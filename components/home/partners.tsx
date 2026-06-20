export function Partners() {
  return (
    <div className="flex flex-col gap-[clamp(7.5rem,calc(-3.75rem_+_56.25vw),23.25rem)] bg-[#E3E3E3] pt-[clamp(5.375rem,calc(2.5179rem_+_14.2857vw),9.375rem)] pb-[clamp(1.25rem,calc(0.3571rem_+_4.4643vw),2.5rem)] md:gap-[clamp(11.875rem,calc(40.3125rem_-_35.5469vw),23.25rem)] md:pt-[clamp(0.875rem,calc(22.125rem_-_26.5625vw),9.375rem)] md:pb-[clamp(1.25rem,calc(4.375rem_-_3.9063vw),2.5rem)] xl:pt-[clamp(0.875rem,calc(-0.375rem_+_1.5625vw),1.125rem)] xl:gap-[clamp(11.875rem,calc(-10rem_+_27.3438vw),16.25rem)] xl:pb-5 2xl:pt-[clamp(1.125rem,calc(0.625rem_+_0.5208vw),1.25rem)] 2xl:gap-[clamp(16.25rem,calc(-0.75rem_+_17.7083vw),20.5rem)] 3xl:pt-[clamp(1.25rem,1.0417vw,1.6667rem)] 3xl:gap-[clamp(20.5rem,17.0833vw,27.3333rem)]">
      <h4 className="text-h2 w-3/4 text-left uppercase px-2 xl:w-[clamp(40%,calc(48rem_-_10vw),50%)] 2xl:w-[40%] xl:ml-auto">
        лидеры рынка работают с нами
      </h4>
      <div className="flex flex-row gap-11 items-start max-w-full w-full overflow-x-auto 2xl:gap-[clamp(2.75rem,calc(-1.25rem_+_4.1667vw),3.75rem)] 3xl:gap-[clamp(3.75rem,3.125vw,5rem)]">
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
    <div className="flex flex-col items-center justify-center gap-[clamp(0.75rem,calc(0.2143rem_+_2.6786vw),1.5rem)] md:gap-[clamp(1.25rem,calc(1.875rem_-_0.7813vw),1.5rem)] xl:gap-[clamp(1.25rem,1.5625vw,1.5rem)] 2xl:gap-[clamp(1.5rem,1.5625vw,1.875rem)] 3xl:gap-[clamp(1.875rem,1.5625vw,2.5rem)]">
      <div className="w-[clamp(3.125rem,calc(0.8929rem_+_11.1607vw),6.25rem)] h-[clamp(3.125rem,calc(0.8929rem_+_11.1607vw),6.25rem)] object-contain bg-amber-300 md:w-[clamp(3.75rem,calc(10rem_-_7.8125vw),6.25rem)] md:h-[clamp(3.75rem,calc(10rem_-_7.8125vw),6.25rem)] xl:w-[clamp(3.75rem,4.6875vw,4.5rem)] xl:h-[clamp(3.75rem,4.6875vw,4.5rem)] 2xl:w-[clamp(4.5rem,4.6875vw,5.625rem)] 2xl:h-[clamp(4.5rem,4.6875vw,5.625rem)] 3xl:w-[clamp(5.625rem,4.6875vw,7.5rem)] 3xl:h-[clamp(5.625rem,4.6875vw,7.5rem)]" />
      <p className="text-tag-button uppercase text-center xl:text-h3 w-full">
        {name}
      </p>
    </div>
  );
}
