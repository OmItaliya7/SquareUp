// import Container from "../ui/Container"

// import zapier from "../../assets/Logo_Strip/zapier.png"
// import spotify from "../../assets/Logo_Strip/spotify.png"
// import zoom from "../../assets/Logo_Strip/zoom.png"
// import slack from "../../assets/Logo_Strip/slack.png"
// import amazon from "../../assets/Logo_Strip/amazon.png"
// import adobe from "../../assets/Logo_Strip/adobe.png"

// const logos = [zapier, spotify, zoom, slack, amazon, adobe]

// const LogoStrip = () => {
//   return (
//     <section className="relative bg-[#1A1A1A]">

//       {/* ⭐ FLOATING BADGE */}
//       <div className="absolute z-20 -translate-x-1/2 left-1/2 -top-5">
//         <div className="
//           bg-[#1A1A1A]
//           border border-[#262626]
//           rounded-full
//           px-6 py-[14px] 2xl:px-[34px] 2xl:py-5
//           text-[#FDFFFA]
//           text-sm 2xl:text-lg font-medium
//           whitespace-nowrap
//         ">
//           Trusted By 250+ Companies
//         </div>
//       </div>

//       <Container>

//         {/* ⭐ OUTER BORDER BOX */}
//         <div className="
          
//           bg-[#24242433]
//           border-x md:border-x border-b border-[#262626]
//           overflow-hidden
//         ">

//           {/* ===== DESKTOP ===== */}
//           <div className="hidden grid-cols-6 md:grid ">

//             {logos.map((logo, i) => (
//               <div
//                 key={i}
//                 className="
//                   h-[130px] lg:h-[132px] 2xl:h-[170px]
//                   flex items-center justify-center
//                   border-[#262626]
//                   last:border-r-0
//                 "
//               >
//                 <img
//                   src={logo}
//                   alt=""
//                   className="h-[30px] lg:h-[40px] object-contain opacity-90"
//                 />
//               </div>
//             ))}

//           </div>

//           {/* ===== MOBILE ===== */}
//           <div className="grid grid-cols-2 md:hidden">

//             {logos.map((logo, i) => (
//               <div
//                 key={i}
//                 className={`
//                   h-[100px]
//                   flex items-center justify-center
//                  border-b border-[#262626]
//                   border-b
                  
//                   ${i % 2 === 0 ? 'border-r' : ''}
//                   ${i >= logos.length - 2 ? 'border-b-0' : ''}
//                 `}
//               >
//                 <img
//                   src={logo}
//                   alt=""
//                   className="h-[40px] object-contain opacity-90"
//                 />
//               </div>
//             ))}

//           </div>

//         </div>

//       </Container>

//     </section>
//   )
// }

// export default LogoStrip











// import Container from "../ui/Container"

// import zapier from "../../assets/Logo_Strip/zapier.png"
// import spotify from "../../assets/Logo_Strip/spotify.png"
// import zoom from "../../assets/Logo_Strip/zoom.png"
// import slack from "../../assets/Logo_Strip/slack.png"
// import amazon from "../../assets/Logo_Strip/amazon.png"
// import adobe from "../../assets/Logo_Strip/adobe.png"

// const logos = [zapier, spotify, zoom, slack, amazon, adobe]

// const LogoStrip = () => {
//   return (
//     <section className="relative bg-[#1A1A1A]">

//       {/* FLOATING BADGE */}
//       <div className="absolute z-20 -translate-x-1/2 left-1/2 -top-6">
//         <div className="bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-[14px] 2xl:px-[34px] 2xl:py-5  text-[#FDFFFA] text-sm 2xl:text-lg font-medium whitespace-nowrap">
//           Trusted By 250+ Companies
//         </div>
//       </div>

//       <Container>
//         {/* OUTER BORDER BOX */}
//         <div className="border-x border-b border-[#262626] bg-[#1A1A1A]">

//           {/* ===== DESKTOP ===== */}
//           <div className="hidden grid-cols-6 md:grid">

//             {logos.map((logo, i) => (
//               <div
//                 key={i}
//                 className={`
//                   flex items-center justify-center
//                   py-[30px]
//                   border-t border-[#262626]
                  
//                 `}
//               >
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="h-[32px] xl:h-[36px] object-contain opacity-90"
//                 />
//               </div>
//             ))}

//           </div>

//           {/* ===== MOBILE ===== */}
//           <div className="grid grid-cols-2 md:hidden">

//             {logos.map((logo, i) => (
//               <div
//                 key={i}
//                 className={`
//                   flex items-center justify-center
//                   p-[30px]
//                   border-t border-[#262626]
//                   ${i % 2 === 0 ? "border-r border-[#262626]" : ""}
//                 `}
//               >
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="h-[28px] object-contain opacity-90"
//                 />
//               </div>
//             ))}

//           </div>

//         </div>
//       </Container>

//     </section>
//   )
// }

// export default LogoStrip











import Container from "../../../shared/ui/Container";

import zapier from "../../../assets/logo/parteners/zapier.png"
import spotify from "../../../assets/logo/parteners/spotify.png"
import zoom from "../../../assets/logo/parteners/zoom.png"
import slack from "../../../assets/logo/parteners/slack.png"
import amazon from "../../../assets/logo/parteners/amazon.png"
import adobe from "../../../assets/logo/parteners/adobe.png"

const logos = [zapier, spotify, zoom, slack, amazon, adobe]

const LogoStrip = () => {
  return (
    <section className="relative bg-[#1A1A1A]">

      {/* FLOATING BADGE */}
      <div className="absolute z-20 -translate-x-1/2 left-1/2 -top-6">
        <div className="
          bg-[#1A1A1A]
          border border-[#262626]
          rounded-full
          px-6 py-3 md:px-8 md:py-4
          text-white text-sm md:text-base font-medium
          whitespace-nowrap
        ">
          Trusted By 250+ Companies
        </div>
      </div>

      <Container>

        {/* OUTER BOX */}
        <div className="
          border-x border-b border-[#262626]
          bg-[#1A1A1A]
        ">

{/* ===== DESKTOP ===== */}
<div className="
  hidden md:grid
  grid-cols-6
  gap-[20px]
  py-[30px]
">
  {logos.map((logo, i) => (
    <div
      key={i}
      className="
        flex items-center justify-center
        px-[30px] py-[16px]
      "
    >
      <img
        src={logo}
        alt="logo"
        className="
          h-[36px]
          w-auto
          object-contain
          opacity-90
        "
      />
    </div>
  ))}
</div>

          {/* ===== MOBILE ===== */}
          <div className="
            grid grid-cols-2 md:hidden
            border-t border-[#262626]
          ">
            {logos.map((logo, i) => (
              <div
                key={i}
                className={`
                  flex items-center justify-center
                  py-[20px]
                  border-[#262626]
                  ${i % 2 === 0 ? "border-r" : ""}
                  ${i < 4 ? "border-b" : ""}
                `}
              >
                <img
                  src={logo}
                  alt="logo"
                  className="h-[28px] object-contain opacity-90"
                />
              </div>
            ))}
          </div>

        </div>

      </Container>

    </section>
  )
}

export default LogoStrip