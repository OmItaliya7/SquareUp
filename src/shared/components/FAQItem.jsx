import { memo } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const FAQItem = ({ item, isOpen, onToggle, showBorder }) => {
  return (
    <button
      onClick={() => onToggle(item.id)}
      aria-expanded={isOpen}
      aria-controls={`faq-${item.id}`}
      className="w-full text-left"
    >
      <div
        className={`
          p-6 md:p-8 xl:px-[40px] xl:py-[24px]
          transition-all duration-300
          hover:bg-[#1C1C1C]/40
          ${showBorder ? "border-b border-[#262626]" : ""}
        `}
      >
        <div className="flex items-start gap-5 lg:gap-8">
          
          {/* Number */}
          <div className={`
            shrink-0 size-[52px] xl:size-[62px] rounded-xl 
            bg-gradient-to-b from-[#242424] to-[#242424]/0
            flex items-center justify-center font-bold text-lg
            ${isOpen ? "text-[#C5FF66]" : "text-white"}
          `}>
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
                 id={`faq-${item.id}`}
                 className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                   ${isOpen ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0"}
                 `}
               >
                 <p className="text-[#E6E6E6] font-normal text-sm lg:text-base 2xl:text-lg leading-normal">
                   {item.answer}
                 </p>
               </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default memo(FAQItem);