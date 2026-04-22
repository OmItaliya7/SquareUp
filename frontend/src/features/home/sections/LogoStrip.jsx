import { logos } from "../data/stripData";

const LogoStrip = () => {
  return (
    <section className="relative w-full" id="trusted-companies">
      {/* FLOATING BADGE */}
      <div className="absolute left-1/2 top-[-24px] z-20 -translate-x-1/2">
        <p className="whitespace-nowrap rounded-full border border-subtle bg-bg-primary px-6 py-3.5 text-sm font-medium text-[#FDFFFA] md:px-6 2xl:px-8.5 2xl:py-5 2xl:text-lg">
          Trusted By 250+ Companies
        </p>
      </div>
        {/* OUTER BOX */}

          <div className="grid grid-cols-2 divide-x divide-y divide-subtle border-y border-subtle md:grid-cols-6 md:divide-x-0 md:divide-y-0 md:gap-5 md:py-7.5 2xl:py-10">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-7.5 md:px-7.5 md:py-4 2xl:px-10 2xl:py-5">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="object-contain h-8 aspect-[3/1] xl:h-10" />
              </div>
            ))}
          </div>
      
    </section>
  );
};

export default LogoStrip;
