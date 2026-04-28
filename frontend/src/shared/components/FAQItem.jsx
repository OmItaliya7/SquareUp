import { memo, useRef } from "react";
import { FiPlus } from "react-icons/fi";

const FAQItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  return (
    <div className="w-full border-b border-subtle">
      <button
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.id}`}
        className="w-full p-6 md:p-8 xl:px-10 xl:py-6 2xl:px-12.5 2xl:py-7.5 text-left"
      >
          <div className="flex items-start gap-5 lg:gap-7.5">
            {/* Number */}
            <div className={`flex items-center justify-center p-3.5 xl:p-4 2xl:p-5 rounded-md xl:rounded-lg 2xl:rounded-xl bg-linear-to-b from-[#242424] to-[#242424]/0 font-bold text-xl xl:text-2xl 2xl:text-[28px] ${isOpen ? "text-[#C5FF66]" : "text-primary"}`}>
              {item.id}
            </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-5">
                  <h3 className={`font-medium text-base lg:text-lg 2xl:text-[22px] leading-tight transition-colors duration-300 ${isOpen ? "text-[#C5FF66]" : "text-primary"}`}>
                    {item.question}
                  </h3>

                  <div className={`flex items-center justify-center shrink-0 size-6.5 mt-0.5 transition-transform duration-300  ${ isOpen ? "rotate-45 text-[#C5FF66]" : "rotate-0 text-primary"}`}>
                    <FiPlus size={26} />
                  </div>
                </div>

                {/* Answer */}
                <div id={`faq-${item.id}`} ref={contentRef} style={{ maxHeight: isOpen? contentRef.current?.scrollHeight + "px" : "0px",}} className="overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="mt-6 xl:mt-4 2xl:mt-5 text-sm text-secondary lg:text-base 2xl:text-lg">
                    {item.answer}
                  </p>
                </div>
            </div>
          </div>
      </button>
    </div>
  );
};

export default memo(FAQItem);