import { logos } from "../data/stripData";

const LogoStrip = () => {
  return (
    <section className="relative w-full" id="trusted-companies">
      {/* FLOATING BADGE */}
      <div className="absolute top-0 z-20 -translate-x-1/2 -translate-y-1/2 left-1/2">
        <p className="whitespace-nowrap px-6 py-3.5 md:px-6 2xl:px-8.5 2xl:py-5 border border-subtle rounded-full bg-bg-primary font-medium text-sm 2xl:text-lg text-[#FDFFFA]">
          Trusted By 250+ Companies
        </p>
      </div>
      
        {/* OUTER BOX */}
          <div className="grid grid-cols-2 md:grid-cols-6 md:gap-5 md:py-7.5 2xl:py-10 border-t md:border-y border-subtle">
            {logos.map((logo) => (
              <div key={logo.id} className={`p-7.5 md:px-7.5 md:py-4 2xl:px-10 2xl:py-5 ${logo.id % 2 === 0 ? 'border-b border-subtle' : 'border-r border-b border-subtle'} md:border-0 `}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="object-contain h-8 xl:h-10 w-full aspect-3/1"/>
              </div>
            ))}
          </div>
      
    </section>
  );
};

export default LogoStrip;