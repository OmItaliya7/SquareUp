import  { useState } from 'react';

const ContactForm = () => {
const [budget, setBudget] = useState(0);

  return (
    /* Issue 1 Fix: Outer border logic for X and B to match the dashboard flow */
    <section className="w-full bg-[#1A1A1A] border-x  border-[#262626] p-6 md:p-16 lg:p-20">
      <form className="max-w-[1100px] mx-auto flex flex-col gap-6 md:gap-10">
        
        {/* ROW 1: Name & Email - PIXEL PERFECT INPUT GROUP */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          
          {/* Boxed Input Group 1 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 flex flex-col justify-between">
            <label className="mb-12 text-lg font-medium text-white md:text-xl lg:mb-16">Full Name</label>
           
            <input 
              type="text" 
              placeholder="Type here" 
              className="w-full bg-transparent border-b border-[#262626] pb-4 text-[#98989A] focus:outline-none focus:border-[#C5FF66] transition-colors placeholder:text-[#4C4C4D]"
            />
          </div>

          {/* Boxed Input Group 2 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 flex flex-col justify-between">
            <label className="mb-12 text-lg font-medium text-white md:text-xl lg:mb-16">Email</label>
            <input 
              type="email" 
              placeholder="Type here" 
              className="w-full bg-transparent border-b border-[#262626] pb-4 text-[#98989A] focus:outline-none focus:border-[#C5FF66] transition-colors placeholder:text-[#4C4C4D]"
            />
          </div>
        </div>

        {/* ROW 2: Contact Reasons (Checkboxes) - Issue 2 Fix: Neon Checkbox */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 md:p-12 flex flex-col gap-10">
          <label className="text-lg font-medium text-white md:text-xl">Why are you contacting us?</label>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {['Web Design', 'Collaboration', 'Mobile App Design', 'Others'].map((item) => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none size-7 border border-[#2A2A2A] rounded-md bg-[#262626] checked:bg-[#262626] transition-all" 
                  />
                  {/* Neon Green Check Symbol - Just text symbol for 'Right Arrow' look */}
                  <span className="absolute text-[#C5FF66] text-xl font-bold opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none mb-1">
                    ✓
                  </span>
                </div>
                <span className="text-[#98989A] text-base md:text-lg font-light group-hover:text-white transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ROW 3: Budget Range Slider */}
<div className="flex flex-col gap-6 mb-8 bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 md:p-12">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-white">Your Budget</label>
            <p className="text-[#98989A] text-sm">Slide to indicate your budget range</p>
          </div>
          
          <div className="relative pt-6 pb-2">
            <input 
              type="range" 
              min="0" 
              max="10000" 
              step="100"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full h-1 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#9EFF00]"
              style={{
                background: `linear-gradient(to right, #9EFF00 ${budget / 100}%, #262626 ${budget / 100}%)`
              }}
            />
            <div className="flex justify-between mt-4 text-[#E4E4E6] font-medium">
              <span>$0</span>
              <span className="text-[#9EFF00]">${budget}</span>
              <span>$10,000</span>
            </div>
          </div>
        </div>





{/* ROW 4: Message Section */}
<div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-6 md:p-10 xl:px-[30px] xl:py-[20px] flex flex-col gap-5">
  <label className="text-lg font-medium text-white md:text-xl">
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
    <div className="w-full h-[44px] border-b border-[#262626]"></div>
  </div>
</div>



        {/* SUBMIT BUTTON */}
        <div className="flex justify-center pt-8">
          <button className="bg-[#9EFF00] text-[#1A1A1A] font-bold px-16 py-5 rounded-xl ">
            Submit
          </button>
        </div>

      </form>
    </section>
  );
};

export default ContactForm;














