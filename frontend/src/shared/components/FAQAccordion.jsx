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
    return <h3 className="py-8 text-lg text-center text-primary">No FAQs available.</h3>;
  }

  return (
    <div className="grid divide-x border-subtle lg:grid-cols-2 divide-subtle">
      
      {/* LEFT */}
      <div>
        {leftCol.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={toggleFAQ}
          
          />
        ))}
      </div>

      {/* RIGHT */}
      <div>
        {rightCol.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={toggleFAQ}
            
          />
        ))}
      </div>

    </div>
  );
};

export default FAQAccordion;