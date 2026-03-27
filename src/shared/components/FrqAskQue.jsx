import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";


const faqData = [
  { id: "01", question: "What services does SquareUp provide?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: "02", question: "How can SquareUp help my business?", answer: "We help businesses scale by providing high-quality digital products, optimizing user journeys, and implementing modern technology stacks that drive efficiency and growth." },
  { id: "03", question: "What industries does SquareUp work with?", answer: "We work across various sectors including Fintech, HealthTech, E-commerce, EdTech, and more. Our multidisciplinary team has experience in creating tailored solutions for a wide range of industries." },
  { id: "04", question: "How long does it take to complete a project with SquareUp?", answer: "The timeline for completing a project with SquareUp depends on the scope and complexity of the work involved. We typically provide a detailed project plan and timeline during the initial consultation phase." },
  { id: "05", question: "Do you offer ongoing support and maintenance after the project is completed?", answer: "Yes, we offer flexible maintenance contracts for bug fixes, performance updates, and feature additions." },
  { id: "06", question: "Can you work with existing design or development frameworks?", answer: "Absolutely, we can integrate with your existing design systems and development workflows to ensure a seamless collaboration process." },
  { id: "07", question: "How involved will I be in the project development process?", answer: "We believe in maintaining open communication throughout the development process. You will have regular opportunities to provide feedback and participate in key decision-making moments." },
  { id: "08", question: "Can you help with website or app maintenance and updates?", answer: "Yes, we offer comprehensive maintenance services to keep your digital assets up-to-date and performing optimally." },
];


const FrqAskQue = () =>{
  const [openId, setOpenId] = useState(null);

  const leftCol = faqData.slice(0, 4);
  const rightCol = faqData.slice(4, 8);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const renderItem = (item, showBorder) => {
    const isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        onClick={() => toggleFAQ(item.id)}
        className={`
          p-6 md:p-8  xl:px-[40px] xl:py-[24px]
          cursor-pointer
          transition-all duration-300
          hover:bg-[#1C1C1C]/40
          
          ${showBorder ? "border-b border-[#262626]" : ""}
        `}
      >
        <div className="flex items-start gap-5 lg:gap-8">

          {/* Number Box */}
          <div
            className={`
              shrink-0 size-[52px] xl:size-[62px] rounded-xl 
               border-transparent
              [border-image:linear-gradient(180deg,#2E2E2E,rgba(46,46,46,0))_1]
               bg-gradient-to-b from-[#242424] to-[#242424]/0
              flex items-center justify-center font-bold text-lg
              transition-all duration-300
              ${isOpen ? " text-[#C5FF66]" : " text-white"}
            `}
          >
            {item.id}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3
                className={`
                  text-sm md:text-base lg:text-lg font-medium
                  transition-colors duration-300 leading-tight
                  ${isOpen ? "text-[#C5FF66]" : "text-white"}
                `}
              >
                {item.question}
              </h3>

              <div
                className={`shrink-0 w-[26px] h-[26px] flex items-center justify-center mt-[2px] ${
                  isOpen ? "text-[#C5FF66]" : "text-white"
                }`}
              >
                {isOpen ? <FiX size={26} /> : <FiPlus size={26} />}
              </div>
            </div>

            {/* Answer */}
            <div
              className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? "min-h-[50px] opacity-100 mt-4" : "max-h-0 opacity-0"}
              `}
            >
              <p className="text-[#E6E6E6] font-normal text-sm lg:text-base 2xl:text-lg  leading-normal ">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };



    return(
        
        <div className="grid lg:grid-cols-2 border border-[#262626]">

          {/* LEFT COLUMN */}
          <div className="border-r border-[#262626]">
            {leftCol.map((item, index) =>
              renderItem(item, index !== leftCol.length - 1)
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {rightCol.map((item, index) =>
              renderItem(item, index !== rightCol.length - 1)
            )}
          </div>

        </div>
        
    )
}

export default FrqAskQue;


















//Both side opennnnnnnnnnn



// import { useState } from "react";
// import { FiPlus, FiX } from "react-icons/fi";

// const faqData = [
//   { id: "01", question: "What services does SquareUp provide?", answer: "SquareUp offers a range of services including design, engineering, and project management..." },
//   { id: "02", question: "How can SquareUp help my business?", answer: "We help businesses scale by providing high-quality digital products..." },
//   { id: "03", question: "What industries does SquareUp work with?", answer: "We work across various sectors including Fintech..." },
//   { id: "04", question: "How long does it take to complete a project with SquareUp?", answer: "Timeline depends on scope..." },
//   { id: "05", question: "Do you offer ongoing support and maintenance after the project is completed?", answer: "Yes, we provide post-launch support..." },
//   { id: "06", question: "Can you work with existing design or development frameworks?", answer: "Absolutely. We can audit your current codebase..." },
//   { id: "07", question: "How involved will I be in the project development process?", answer: "We follow agile methodology..." },
//   { id: "08", question: "Can you help with website or app maintenance and updates?", answer: "Yes, we offer flexible maintenance..." },
// ];

// const FrqAskQue = () => {

//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => {
//     setOpenId(openId === id ? null : id);
//   };

//   return (
//     <div className="border border-[#262626] grid md:grid-cols-2">

//       {faqData.map((item, index) => {

//         const isOpen = openId === item.id;

//         return (
//           <div
//             key={item.id}
//             onClick={() => toggle(item.id)}
//             className={`
//               border-b border-[#262626]
//               md:${index % 2 === 0 ? "border-r" : ""}
//               p-6 md:p-8 lg:p-10 xl:px-[40px] xl:py-[28px]
//               cursor-pointer transition-all duration-300
//               hover:bg-[#1C1C1C]/40
//             `}
//           >

//             <div className="flex items-start gap-5 lg:gap-8">

//               {/* NUMBER BOX */}
//               <div className="
//                 shrink-0 size-[52px] xl:size-[62px]
//                 rounded-xl
//                 border-transparent
//                 [border-image:linear-gradient(180deg,#2E2E2E,rgba(46,46,46,0))_1]
//                 bg-gradient-to-b from-[#242424] to-[#242424]/0
//                 flex items-center justify-center font-bold text-lg
//               ">
//                 <span className={isOpen ? "text-[#C5FF66]" : "text-white"}>
//                   {item.id}
//                 </span>
//               </div>

//               {/* CONTENT */}
//               <div className="flex-1">

//                 <div className="flex items-start justify-between gap-4">

//                   <h3 className={`
//                     text-sm md:text-base lg:text-lg font-medium leading-tight
//                     ${isOpen ? "text-[#C5FF66]" : "text-white"}
//                   `}>
//                     {item.question}
//                   </h3>

//                   <div className="
//                     shrink-0 w-[26px] h-[26px]
//                     flex items-center justify-center mt-[2px]
//                   ">
//                     {isOpen
//                       ? <FiX size={26} className="text-[#C5FF66]" />
//                       : <FiPlus size={26} className="text-white" />
//                     }
//                   </div>

//                 </div>

//                 {/* ANSWER */}
//                 <div className={`
//                   overflow-hidden transition-all duration-500
//                   ${isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}
//                 `}>
//                   <p className="text-[#E6E6E6] text-sm lg:text-base leading-relaxed">
//                     {item.answer}
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
//         );

//       })}

//     </div>
//   );
// };

// export default FrqAskQue;