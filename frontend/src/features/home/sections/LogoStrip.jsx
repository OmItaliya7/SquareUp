import Container from "../../../shared/ui/Container";
import { logos } from "../data/stripData";

const LogoStrip = () => {
  return (
    <section className="relative">
      {/* FLOATING BADGE */}
      <div className="absolute z-20 -translate-x-1/2 left-1/2 -top-6">
        <div className="bg-bg-primary border border-border-subtle rounded-full px-6 py-3 md:px-8 md:py-4 2xl:px-8.5 2xl:py-5 text-text-primary text-sm md:text-base 2xl:text-lg font-medium whitespace-nowrap " >
          Trusted By 250+ Companies
        </div>
      </div>

      <Container>
        {/* OUTER BOX */}
        <div className="border-b border-x border-border-subtle">

          <div className="grid grid-cols-2 md:grid-cols-6 md:gap-5 md:py-7.5 2xl:py-10">

            {logos.map((logo, i) => (
              <div
                key={i}
                className={` flex items-center justify-center border-border-subtle ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 4 ? "border-b md:border-b-0" : ""} p-7.5 md:px-7.5 md:py-4 2xl:px-10 2xl:py-5`}>
                 <div className="h-8 xl:h-10 aspect-3/1"> 
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="object-contain w-full h-full" />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoStrip;
