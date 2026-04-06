import { useContactForm } from "../../hooks/useContactForm";

const contactOptions = [
  "Web Design",
  "Collaboration",
  "Mobile App Design",
  "Others",
];

const ContactForm = () => {
  
const { formData, handleChange, handleCheckbox, handleBudgetChange, handleSubmit, isSubmitting, errors, isFlexible, handleFlexibleToggle } = useContactForm();

  return (
    <section className="w-full bg-[#1A1A1A] border-x border-t  border-[#262626]">
      <div className="px-6 md:px-16 xl:px-54.25 2xl:px-67">
        <div className="bg-[#1A1A1A] xl:border border-[#262626] p-6 px-0 md:p-10 xl:p-15 2xl:p-20">
          <form onSubmit={handleSubmit} className="flex flex-col  mx-auto gap-7.5 2xl:gap-10">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-7.5 2xl:gap-10">
              {/* Honeypot Field */}
              <input
                type="text"
                name="company"
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />
              {/* Name */}
              <div className="bg-[#24242480] border border-[#262626] rounded-md px-6 py-4.5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-3.5 xl:gap-4 2xl:gap-5">
                <label htmlFor="name" className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  
                  placeholder="Type here"
                  className=" w-full  bg-transparent border-b border-[#333333] pb-1.5 text-[#98989A] placeholder:text-[#656567] focus:outline-none  focus:border-[#C5FF66] transition-colors  font-normal text-base 2xl:text-lg leading-normal" />
                {errors.name && (<span className="mt-1 text-sm text-red-500">{errors.name}</span>)}
              </div>

              {/* Email */}
              <div className="bg-[#24242480] border border-[#262626] rounded-md px-6 py-4.5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-3.5 xl:gap-4 2xl:gap-5">
                <label htmlFor="email" className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  
                  placeholder="Type here"
                  className=" w-full bg-transparent border-b border-[#333333] pb-1.5 text-[#98989A] placeholder:text-[#656567] focus:outline-none focus:border-[#C5FF66] transition-colors font-normal text-base 2xl:text-lg leading-normal" />
                  {errors.email && (<span className="mt-1 text-sm text-red-500">{errors.email}</span>)}

              </div>
            </div>

            {/* ROW 2 */}
            <div className="bg-[#24242480] border border-[#262626] rounded-xl p-7.5 2xl:p-10 flex flex-col gap-7.5 2xl:gap-10">
              <label className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                Why are you contacting us?
              </label>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactOptions.map((item) => (
                  <label
                    key={item}                  
                    className="flex items-center cursor-pointer gap-2.5"
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        name="services"
                        checked={formData.services.includes(item)}
                        onChange={() => handleCheckbox(item)}
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
                {errors.services && (<span className="mt-2 text-sm text-red-500">{errors.services}</span>)}
              </div>
            </div>

            {/* ROW 3: Budget Range Slider */}
            <div className="flex flex-col gap-7.5 2xl:gap-10  bg-[#24242480] border border-[#262626] rounded-md p-6 pb-12.5 xl:p-7.5 2xl:p-10">
              <div className="flex flex-col gap-1.5 xl:gap-3.5">
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
                  disabled={isFlexible}
                  value={formData.budget}
                  onChange={handleBudgetChange}
                  className="w-full h-1 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#9EFF00]"
                  style={{
                    background: `linear-gradient(to right, #9EFF00 ${formData.budget / 100}%, #262626 ${formData.budget / 100}%)`,
                  }}
                />
                <div className="flex justify-between  text-[#E4E4E6] font-medium ">
                  <span className="text-sm text-white 2xl:text-base">$0</span>
                  <span className="text-[#9EFF00] text-sm 2xl:text-base">
                    ${formData.budget}
                  </span>
                  <span className="text-sm text-white 2xl:text-base">
                    $10,000
                  </span>
                </div>
                <label className="flex items-center gap-2 mt-4 cursor-pointer">
  <input
    type="checkbox"
    checked={isFlexible}
    onChange={handleFlexibleToggle}
  />
  <span className="text-sm text-[#E6E6E6]">
    Not sure / Flexible
  </span>
</label>
              </div>
            </div>

            {/* ROW 4: Message Section */}
            <div className="bg-[#24242480] border border-[#262626] rounded-md px-6 py-4.5 md:p-10 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-5">
              <label className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-white">
                Your Message
              </label>

              <div className="flex flex-col">
                {/* First Line: The actual Textarea */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type here"
                  rows="1"
                  
                  className="w-full bg-transparent text-[#98989A] focus:outline-none resize-none placeholder:text-[#656567] border-b border-[#262626] pb-4 leading-normal transition-colors focus:border-[#9EFF00]"
                />
                {errors.message && <span className="mt-1 text-sm text-red-500">{errors.message}</span>}

                {/* Second Line: The decorative empty line  */}
                <div className="w-full pt-10 border-b border-[#262626]"></div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-center">
              <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#9EFF00] text-[#1A1A1A]
                               w-full md:w-auto
                               font-medium
                               px-9 py-3.5 xl:px-9 xl:py-3.5 2xl:px-11 2xl:py-4.5
                               rounded-lg 
                               transition-all duration-200
                               hover:brightness-110
                               focus:outline-none
                               focus:ring-2 focus:ring-[#9EFF00]
                               disabled:opacity-60
                               disabled:cursor-not-allowed
                               "
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


