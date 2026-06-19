export function Partners() {
  return (
    <div className="flex flex-col gap-30 bg-[#E3E3E3] pt-21.5 pb-5 md:pt-37.5 md:gap-93 md:pb-10 xl:pt-3.5 xl:gap-47.5 xl:pb-5">
      <h4 className="text-h2 w-3/4 text-left uppercase px-2 xl:w-1/2 xl:ml-auto">
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
    <div className="flex flex-col items-center justify-center gap-3 md:gap-6 xl:gap-5">
      <div className="w-12.5 h-12.5 object-contain bg-amber-300 md:w-25 md:h-25 xl:w-15 xl:h-15" />
      <p className="text-tag-button uppercase text-center xl:text-h3 w-full">
        {name}
      </p>
    </div>
  );
}
