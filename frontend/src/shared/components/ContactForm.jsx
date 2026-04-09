import { useContactForm } from "../../hooks/useContactForm";

const contactOptions = [
  "Web Design",
  "Collaboration",
  "Mobile App Design",
  "Others",
];



const ContactForm = () => {
  const {
    formData,
    handleChange,
    handleBlur,
    handleCheckbox,
    handleBudgetChange,
    handleSubmit,
    isSubmitting,
    errors,
    isFlexible,
    handleFlexibleToggle,
  } = useContactForm();

  const MIN_BUDGET = 0;
  const MAX_BUDGET = 10000;

  const pct = ((formData.budget - MIN_BUDGET) / (MAX_BUDGET - MIN_BUDGET)) * 100;

  return (
    <section className="w-full border-t border-x border-border-subtle">
      <div className="px-6 md:px-16 xl:px-54 2xl:px-67">
        <div className="p-6 px-0 xl:border border-border-subtle md:p-10 xl:p-15 2xl:p-20">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col relative mx-auto gap-7.5 2xl:gap-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 2xl:gap-10">
              {/* Honeypot Field  */}
              <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              {/* Name */}
              <div className="bg-bg-form border border-border-subtle rounded-md px-6 py-4.5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-3.5 xl:gap-4 2xl:gap-5">
                <label
                  htmlFor="name"
                  className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-text-primary"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  maxLength={100}
                  aria-describedby="name-error"
                  aria-invalid={!!errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Type here"
                  className="w-full bg-transparent border-b border-border-strong pb-1.5 text-text-muted placeholder:text-text-placeholder focus:outline-none  focus:border-accent-primary transition-colors font-normal text-base 2xl:text-lg leading-normal"
                />
                {errors.name && (
                  <span id="name-error" role="alert" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="bg-bg-form border border-border-subtle rounded-md px-6 py-4.5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-3.5 xl:gap-4 2xl:gap-5">
                <label
                  htmlFor="email"
                  className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-text-primary"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  maxLength={254}
                  aria-describedby="email-error"
                  aria-invalid={!!errors.email}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Type here"
                  className=" w-full bg-transparent border-b border-border-strong pb-1.5 text-text-muted placeholder:text-text-placeholder focus:outline-none focus:border-accent-primary transition-colors font-normal text-base 2xl:text-lg leading-normal"
                />
                {errors.email && (
                  <span id="email-error" role="alert" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* ROW 2 */}
            <div aria-describedby="services-error" className="bg-bg-form border border-border-subtle rounded-xl p-7.5 2xl:p-10 flex flex-col gap-7.5 2xl:gap-10">
              <label className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-text-primary">
                Why are you contacting us?
              </label>
              <div role="group" aria-describedby="services-error" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                        className="transition-all border rounded-sm appearance-none peer size-7 border-border-strong bg-bg-secondary checked:bg-bg-secondary"
                      />

                      <span className="absolute mb-1 transition-opacity opacity-0 pointer-events-none text-accent-primary text-md font-extralight peer-checked:opacity-100">
                        ✓
                      </span>
                    </div>
                    <span className="text-[#FDFFFA] text-base 2xl:text-lg font-normal leading-normal group-hover:text-text-primary transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
                {errors.services && (
                  <span id="services-error" role="alert" className="mt-2 text-sm text-red-500">
                    {errors.services}
                  </span>
                )}
              </div>
            </div>

            {/* ROW 3: Budget Range Slider */}
            <div className="flex flex-col gap-7.5 2xl:gap-10  bg-bg-form border border-border-subtle rounded-md p-6 pb-12.5 xl:p-7.5 2xl:p-10">
              <div className="flex flex-col gap-1.5 xl:gap-3.5">
                <label htmlFor="budget-slider" className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-text-primary">
                  Your Budget
                </label>
                <p className="text-text-secondary text-sm xl:text-base 2xl:text-lg leading-normal tracking-[.6%]">
                  Slide to indicate your budget range
                </p>
              </div>

              <div className="relative">
                <input
                  id="budget-slider"
                  type="range"
                  min={MIN_BUDGET}
                  max={MAX_BUDGET}
                  step="100"
                  disabled={isFlexible}
                  value={formData.budget}
                  onChange={handleBudgetChange}
                  className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-bg-secondary accent-accent-primary"
                  style={{
                    background: `linear-gradient(to right, var(--color-accent-primary) ${pct}%, var(--color-bg-secondary) ${pct}%)`,
                  }}
                />
                <div className="flex justify-between font-medium text-text-secondary ">
                  <span className="text-sm text-white 2xl:text-base">$0</span>
                  <span className="text-sm text-accent-primary 2xl:text-base">
                    ${formData.budget}
                  </span>
                  <span className="text-sm text-text-primary 2xl:text-base">
                    $10,000
                  </span>
                </div>
                <label htmlFor="flexible-toggle" className="flex items-center gap-2 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    id="flexible-toggle"
                    checked={isFlexible}
                    onChange={handleFlexibleToggle}
                  />
                  <span className="text-sm text-text-secondary">
                    Not sure / Flexible
                  </span>
                </label>
              </div>
            </div>

            {/* ROW 4: Message Section */}
            <div className="bg-bg-form border border-border-subtle rounded-md px-6 py-4.5 md:p-10 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 flex flex-col gap-5">
              <label className="text-base xl:text-lg 2xl:text-[22px] font-medium leading-normal text-text-primary">
                Your Message
              </label>

              <div className="flex flex-col">
                {/* First Line: The actual Textarea */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onInput={(e) => {e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px";}}
                  maxLength={2000}
                  aria-describedby="message-error"
                  aria-invalid={!!errors.message}
                  placeholder="Type here"
                  rows={1}
                  className="w-full pb-4 leading-normal transition-colors bg-transparent border-b resize-none text-text-muted focus:outline-none placeholder:text-text-placeholder border-border-subtle focus:border-accent-primary"
                />
                {errors.message && (
                  <span id="message-error" role="alert" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </span>
                )}

                {/* Second Line: The decorative empty line  */}
                <div className="w-full pt-10 border-b border-border-subtle"></div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent-primary text-[#1A1A1A]
                               w-full md:w-auto
                               font-medium
                               px-9 py-3.5 xl:px-9 xl:py-3.5 2xl:px-11 2xl:py-4.5
                               rounded-lg 
                               transition-all duration-200
                               hover:brightness-110
                               focus:outline-none
                               focus:ring-2 focus:ring-accent-primary
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
