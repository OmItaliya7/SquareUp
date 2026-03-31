import Container from "../../../shared/ui/Container";
import { logos } from "../data/stripData";

const LogoStrip = () => {
  return (
    <section className="relative bg-[#1A1A1A]">
      {/* FLOATING BADGE */}
      <div className="absolute z-20 -translate-x-1/2 left-1/2 -top-6">
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-3 md:px-8 md:py-4 2xl:px-8.5 2xl:py-5 text-white text-sm md:text-base 2xl:text-lg font-medium whitespace-nowrap " >
          Trusted By 250+ Companies
        </div>
      </div>

      <Container>
        {/* OUTER BOX */}
        <div className=" border-x border-b border-[#262626] bg-[#1A1A1A] ">

          <div className="grid grid-cols-2 md:grid-cols-6 md:gap-5 md:py-7.5 2xl:py-10">

            {logos.map((logo, i) => (
              <div
                key={i}
                className={` flex items-center justify-center border-[#262626] ${i % 2 === 0 ? "border-r md:border-r-0" : ""} ${i < 4 ? "border-b md:border-b-0" : ""} p-7.5 md:px-7.5 md:py-4 2xl:px-10 2xl:py-5`}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="object-contain h-7 md:h-9" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoStrip;
