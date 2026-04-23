import { useContactForm } from "../../hooks/useContactForm";
import FormField from "../components/form/FormField";

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
    <section className="px-6 py-6 md:px-16 xl:py-0 xl:px-54 2xl:px-67" id="contact-form">
        <div className="xl:border-x border-subtle xl:p-15 2xl:p-20">

          <form onSubmit={handleSubmit} className="flex flex-col gap-7.5 2xl:gap-10">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 2xl:gap-10">

              <FormField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type here"
                error={errors.name}
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type here"
                error={errors.email}
                
              />
            </div>

            {/* ROW 2 */}
            <div aria-describedby="services-error" className="bg-bg-form border border-subtle rounded-xl p-7.5 2xl:p-10 flex flex-col gap-7.5 2xl:gap-10">
              <label className="text-base xl:text-lg 2xl:text-[22px] font-medium text-primary">
                Why are you contacting us?
              </label>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactOptions.map((item) => (
                  <label
                    key={item}
                    className="flex gap-2.5"
                  >
                    <div className="flex justify-center">
                      <input
                        type="checkbox"
                        name="services"
                        checked={formData.services.includes(item)}
                        onChange={() => handleCheckbox(item)}
                        className="transition-all border rounded-sm appearance-none peer size-7 border-strong bg-bg-secondary"
                      />

                      <span className="absolute mb-1 transition-opacity opacity-0 text-accent-primary text-md peer-checked:opacity-100">
                        ✓
                      </span>
                    </div>
                    <span className="text-[#FDFFFA] text-base 2xl:text-lg">
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

              {/*  ROW 3: Budget Range Slider */}
             <div className="flex flex-col gap-7.5 2xl:gap-10 bg-bg-form border border-subtle rounded-md p-6 pb-12.5 xl:p-7.5 2xl:p-10">
               <div>
                 <label htmlFor="budget-slider" className="text-base xl:text-lg 2xl:text-[22px] font-medium text-primary">
                   Your Budget
                 </label>
                 <p className="text-secondary text-sm xl:text-base 2xl:text-lg tracking-[-.6%] pt-1.5 xl:pt-3.5">
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
                 <div className="flex justify-between font-medium">
                   <span className="text-sm text-white 2xl:text-base">$0</span>
                   <span className="text-sm text-accent-primary 2xl:text-base">
                     ${formData.budget}
                   </span>
                   <span className="text-sm text-primary 2xl:text-base">
                     $10,000
                   </span>
                 </div>
                 <label htmlFor="flexible-toggle" className="flex gap-2 mt-4 cursor-pointer">
                   <input
                     type="checkbox"
                     id="flexible-toggle"
                     checked={isFlexible}
                     onChange={handleFlexibleToggle}
                   />
                   <span className="text-sm text-secondary">
                     Not sure / Flexible
                   </span>
                 </label>
               </div>
             </div>

            {/* MESSAGE */}
            <FormField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type here"
              error={errors.message}
              textarea
            />
            
            {/* SUBMIT */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent-primary text-[#1A1A1A] w-full md:w-auto px-9 py-3.5 2xl:px-11 2xl:py-4.5 rounded-lg font-medium hover:brightness-110 disabled:opacity-60 text-sm 2xl:text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

          </form>
        </div>
    </section>
  );
};

export default ContactForm;