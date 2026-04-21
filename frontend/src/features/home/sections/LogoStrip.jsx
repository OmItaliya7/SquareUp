import { logos } from "../data/stripData";

const LogoStrip = () => {
  return (
    <section className="relative w-full" id="trusted-companies">
      {/* FLOATING BADGE */}
      <div className="absolute z-20 -translate-x-1/2 left-1/2 -top-6">
        <p className="bg-bg-primary border border-border-subtle rounded-full px-6 py-3 md:px-8 md:py-4 2xl:px-8.5 2xl:py-5 text-text-primary text-sm md:text-base 2xl:text-lg font-medium whitespace-nowrap " >
          Trusted By 250+ Companies
        </p>
      </div>
        {/* OUTER BOX */}

          <div className="grid grid-cols-2 md:grid-cols-6 md:gap-5 md:py-7.5 2xl:py-10 border-y border-border-subtle divide-x divide-y md:divide-x-0 md:divide-y-0 divide-border-subtle">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-7.5 md:px-7.5 md:py-4 2xl:px-10 2xl:py-5">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="object-contain h-8 xl:h-10 aspect-3/1" />
              </div>
            ))}
          </div>
      
    </section>
  );
};

export default LogoStrip;
