import { useState, useCallback } from "react";

const contactOptions = [
  "Web Design",
  "Collaboration",
  "Mobile App Design",
  "Others",
];

const ContactForm = () => {
  const [budget, setBudget] = useState(0);

  const handleBudgetChange = useCallback((e) => {
    setBudget(Number(e.target.value));
  }, []);

  return (
    <section className="w-full bg-[#1A1A1A] border-x border-t  border-[#262626]">
      <div className="px-6 md:px-16 xl:px-[217px] 2xl:px-[268px]">
        <div className="bg-[#1A1A1A] xl:border border-[#262626] p-[24px] px-0 md:p-[40px] xl:p-[60px] 2xl:p-[80px]">
          <form className="flex flex-col  mx-auto gap-[30px] 2xl:gap-10">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-[30px] 2xl:gap-10">
              {/* Name */}
              <div className="bg-[#24242480] border border-[#262626] rounded-md px-[24px] py-[18px] xl:px-[30px] xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-[14px] xl:gap-4 2xl:gap-5">
                <label htmlFor="name" className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Type here"
                  className=" w-full  bg-transparent border-b border-[#333333] pb-[6px] text-[#98989A] placeholder:text-[#656567] focus:outline-none focus:border-[#C5FF66] transition-colors  font-normal text-base 2xl:text-lg leading-normal" />
              </div>

              {/* Email */}
              <div className="bg-[#24242480] border border-[#262626] rounded-md px-[24px] py-[18px] xl:px-[30px] xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-[14px] xl:gap-4 2xl:gap-5">
                <label htmlFor="email" className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Type here"
                  className=" w-full bg-transparent border-b border-[#333333] pb-[6px] text-[#98989A] placeholder:text-[#656567] focus:outline-none focus:border-[#C5FF66] transition-colors font-normal text-base 2xl:text-lg leading-normal" />

              </div>
            </div>

            {/* ROW 2 */}
            <div className="bg-[#24242480] border border-[#262626] rounded-xl p-[30px]  2xl:p-10 flex flex-col gap-[30px] 2xl:gap-10">
              <label className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                Why are you contacting us?
              </label>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactOptions.map((item) => (
                  <label
                    key={item}                  
                    className="flex items-center cursor-pointer gap-[10px]"
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="peer appearance-none size-7 border border-[#333333] rounded-sm bg-[#262626] checked:bg-[#262626] transition-all"
                      />

                      <span className="absolute text-[#9EFF00] text-md font-extralight opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none mb-1">
                        ✓
                      </span>
                    </div>
                    <span className="text-[#FDFFFA] text-base 2xl:text-lg font-normal leading-normal group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* ROW 3: Budget Range Slider */}
            <div className="flex flex-col gap-[30px] 2xl:gap-10  bg-[#24242480] border border-[#262626] rounded-md p-6 pb-[50px] xl:p-[30px] 2xl:p-10">
              <div className="flex flex-col gap-[6px] xl:gap-[14px]">
                <label className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                  Your Budget
                </label>
                <p className="text-[#E6E6E6] text-sm xl:text-base 2xl:text-lg leading-normal tracking-[.6%]">
                  Slide to indicate your budget range
                </p>
              </div>

              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={budget}
                  onChange={handleBudgetChange}
                  className="w-full h-1 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#9EFF00]"
                  style={{
                    background: `linear-gradient(to right, #9EFF00 ${budget / 100}%, #262626 ${budget / 100}%)`,
                  }}
                />
                <div className="flex justify-between  text-[#E4E4E6] font-medium ">
                  <span className="text-sm text-white 2xl:text-base">$0</span>
                  <span className="text-[#9EFF00] text-sm 2xl:text-base">
                    ${budget}
                  </span>
                  <span className="text-sm text-white 2xl:text-base">
                    $10,000
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 4: Message Section */}
            <div className="bg-[#24242480] border border-[#262626] rounded-md px-6 py-[18px] md:p-10 xl:px-[30px] xl:py-[20px] 2xl:px-10 2xl:py-6 flex flex-col gap-5">
              <label className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                Your Message
              </label>

              <div className="flex flex-col">
                {/* First Line: The actual Textarea */}
                <textarea
                  placeholder="Type here"
                  rows="1"
                  name="message"
                  className="w-full bg-transparent text-[#98989A] focus:outline-none resize-none placeholder:text-[#656567] border-b border-[#262626] pb-4 leading-normal transition-colors focus:border-[#9EFF00]"
                ></textarea>

                {/* Second Line: The decorative empty line exactly like Figma structure */}
                <div className="w-full pt-10 border-b border-[#262626]"></div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-center">
              <button className="bg-[#9EFF00] text-[#1A1A1A] w-full md:w-auto font-medium px-9 py-3.5 xl:px-[36px] xl:py-[14px] 2xl:px-[44px] 2xl:py-[18px] rounded-lg ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
