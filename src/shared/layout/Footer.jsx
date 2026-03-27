import logo from "../../assets/logo/brand/logo-main.png";
import facebookIcon from "../../assets/icons/social/facebook.png";
import twitterIcon from "../../assets/icons/social/twitter.png";
import linkedinIcon from "../../assets/icons/social/linkedin.png";

import { footerLinks } from "../../shared/data/footerData";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Container from "../../shared/ui/Container"
import { NavLink } from "react-router-dom";

const Footer = () => {
  const contactData = [
    { icon: FiMail, text: "hello@squareup.com" },
    { icon: FiPhone, text: "+91 91813 23 2309" },
    { icon: FiMapPin, text: "Somewhere in the World" },
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#262626]">
      <Container>
        

          {/* ================= TOP SECTION ================= */}
          <div className="flex flex-col items-center gap-10 py-[30px] xl:py-[40px] 2xl:py-[50px] lg:flex-row lg:justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="SquareUp" className="size-[50px] xl:size-10 2xl:size-[60px]" />
              <span className="text-lg font-semibold text-white xl:text-md">
                SquareUp
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-5 2xl:gap-x-[30px] gap-y-5 text-[#E6E6E6]">
              {footerLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="hover:text-[#9EFF00] transition"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Social Capsule */}
            <div className="flex flex-col items-center gap-[14px] md:gap-4 md:flex-row 
                            bg-[#1C1C1C] border border-[#262626] 
                            rounded-lg px-[80px] py-4 md:p-[10px] md:pl-5 2xl:p-[14px] 2xl:pl-[24px]">

              <span className="text-base 2xl:text-lg font-medium leading-normal text-[#E6E6E6]">
                Stay Connected
              </span>

              <div className="flex gap-[10px] 2xl:gap-[14px]">
                <img src={facebookIcon} alt="facebookicon" className="size-[52px] 2xl:size-[64px]" />
                <img src={twitterIcon} alt="twittericon" className="size-[52px] 2xl:size-[64px]" />
                <img src={linkedinIcon} alt="linkedinicon" className="size-[52px] 2xl:size-[64px]" />
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="md:border-b md:border-[#262626]" />

          {/* ================= BOTTOM SECTION ================= */}
          <div className="flex flex-col gap-8 py-8 md:py-10 2xl:py-[50px] lg:flex-row lg:justify-between sm:items-center">

            {/* Contact Info */}
            <div className="flex flex-col gap-5 sm:flex-row md:gap-[22px] 2xl:gap-[30px]">

              {contactData.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center justify-center  gap-[10px] md:gap-[6px] 2xl:gap-[10px] border-b border-[#262626] pb-[20px] md:pb-3 2xl:pb-[16px]">
                  <Icon className="text-[#9EFF00] text-2xl md:text-xl 2xl:text-2xl shrink-0" />
                  <span className="text-lg md:text-base 2xl:text-lg text-[#E6E6E6] font-normal leading-normal">{text}</span>
                </div>
              ))}

            </div>

            {/* Copyright */}
            <p className="text-[#98989A] font-normal leading-normal text-base md:text-lg text-center lg:text-right">
              © 2026 SquareUp. All rights reserved.
            </p>

          </div>

        
      </Container>
    </footer>
  );
};

export default Footer;