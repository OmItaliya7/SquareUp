import { useContactForm } from "../../hooks/useContactForm";

const contactOptions = [
  "Web Design",
  "Collaboration",
  "Mobile App Design",
  "Others",
];

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  textarea = false,
}) => {
  return (
    <div className="flex flex-col px-6 py-4.5 xl:px-7.5 xl:py-5 2xl:px-10 2xl:py-6 gap-3.5 xl:gap-4 2xl:gap-5 border border-subtle rounded-md 2xl:rounded-lg bg-bg-form">

      <label className="font-medium text-base xl:text-lg 2xl:text-[22px] text-primary">
        {label}
      </label>

      {textarea ? (
        <div className="pb-8.5 2xl:pb-10 border-b border-subtle"> 
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={1}
          className="w-full pb-1.5 border-b border-subtle bg-transparent resize-none text-muted focus:border-accent-primary focus:outline-none"
        />
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pb-1.5 border-b border-strong bg-transparent text-base 2xl:text-lg text-muted placeholder:text-placeholder transition-colors focus:border-accent-primary focus:outline-none"
        />
      )}

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

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
        <div className="xl:p-15 2xl:p-20 xl:border-x border-subtle">

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
            <div aria-describedby="services-error" className="flex flex-col p-7.5 2xl:p-10 gap-7.5 2xl:gap-10 border border-subtle rounded-lg 2xl:rounded-xl bg-bg-form">
              <label className="font-medium text-base xl:text-lg 2xl:text-[22px] text-primary">
                Why are you contacting us?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactOptions.map((item) => (
                  <label
                    key={item}
                    className="flex gap-2.5"
                  >
                    <div className="relative flex justify-center">
                      <input
                        type="checkbox"
                        name="services"
                        checked={formData.services.includes(item)}
                        onChange={() => handleCheckbox(item)}
                        className="size-7 border border-strong rounded-sm appearance-none bg-bg-secondary cursor-pointer transition-all peer"
                      />

                      <span className="absolute text-accent-primary text-md opacity-0 transition-opacity peer-checked:opacity-100">
                        ✓
                      </span>
                    </div>
                    <span className="text-base 2xl:text-lg text-[#FDFFFA] cursor-pointer">
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
             <div className="flex flex-col p-6 pb-12.5 xl:p-7.5 2xl:p-10 gap-7.5 2xl:gap-10 border border-subtle rounded-lg 2xl:rounded-xl bg-bg-form">
               <div>
                 <label htmlFor="budget-slider" className="font-medium text-base xl:text-lg 2xl:text-[22px] text-primary">
                   Your Budget
                 </label>
                 <p className="pt-1.5 xl:pt-3.5 text-sm xl:text-base 2xl:text-lg tracking-[-.6%] text-secondary">
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
                   <span className="text-sm 2xl:text-base text-white">$0</span>
                   <span className="text-sm 2xl:text-base text-accent-primary">
                     ${formData.budget}
                   </span>
                   <span className="text-sm 2xl:text-base text-primary">
                     $10,000
                   </span>
                 </div>
                 <label htmlFor="flexible-toggle" className="flex mt-4 gap-2 cursor-pointer">
                   <input
                     type="checkbox"
                     id="flexible-toggle"
                     checked={isFlexible}
                     onChange={handleFlexibleToggle}
                   />
                   <span className="text-sm text-secondary cursor-pointer">
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
                className="w-full md:w-auto px-9 py-3.5 2xl:px-11 2xl:py-4.5 rounded-md 2xl:rounded-lg bg-accent-primary font-medium text-sm 2xl:text-lg text-[#1A1A1A] transition hover:brightness-110 disabled:opacity-60"
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