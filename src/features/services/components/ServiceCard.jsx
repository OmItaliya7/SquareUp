

const ServiceCard = ({ icon, title, index, total }) => {
  return (
    <div
      className={`
        
        flex flex-col gap-5 xl:gap-6 2xl:gap-[30px]        
        p-5 xl:p-10 2xl:p-[50px]
        bg-[#1C1C1C] hover:bg-[#202020]
        transition-colors duration-300
        border-r border-[#262626]
        ${(index + 1) % 2 === 0 ? 'border-r-0 xl:border-r' : ''}
        ${(index + 1) % 4 === 0 ? 'xl:border-r-0' : ''}
        border-b border-[#262626]
        ${index >= total - 2 ? 'border-b-0 xl:border-b' : ''}
        ${index >= total - 4 ? 'xl:border-b-0' : ''}
      `}
    >
      {/* Icon */}
      <div className="size-14 xl:size-16 2xl:size-22 shrink-0">
        <img src={icon} alt={title} className="object-contain w-full h-full" />
      </div>

      {/* Title */}
      <h4 className="font-medium leading-snug text-[#E6E6E6] text-base 2xl:text-xl tracking-[.6%]">
        {title}
      </h4>
    </div>
  );
};

export default ServiceCard;