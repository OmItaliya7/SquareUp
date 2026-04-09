import { useState, useCallback } from "react";
import { faqData } from "../../features/home/data/faqData";
import FAQItem from "./FAQItem";

const FAQAccordion = () => {

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const mid = Math.ceil(faqData.length / 2);
  const leftCol = faqData.slice(0, mid);
  const rightCol = faqData.slice(mid);

  if(!faqData || faqData.length === 0) {
    return <h3 className="py-8 text-lg text-center text-text-primary">No FAQs available.</h3>;
  }

  return (
    <div className="grid border border-t-0 lg:grid-cols-2 border-border-subtle">
      
      {/* LEFT */}
      <div className="border-r border-border-subtle">
        {leftCol.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={toggleFAQ}
            showBorder={index !== leftCol.length - 1}
          />
        ))}
      </div>

      {/* RIGHT */}
      <div>
        {rightCol.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={toggleFAQ}
            showBorder={index !== rightCol.length - 1}
          />
        ))}
      </div>

    </div>
  );
};

export default FAQAccordion;

