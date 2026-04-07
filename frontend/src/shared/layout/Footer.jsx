import logo from "../../assets/logo/brand/logo-main.svg";

import facebookIcon from "../../assets/icons/social/facebook.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";

import mailIcon from "../../assets/icons/social/mail.svg";
import phoneIcon from "../../assets/icons/social/phone.svg";
import locationIcon from "../../assets/icons/social/location.svg";

import {
  footerLinks,
  socialLinks,
  contactInfo,
} from "../../shared/data/footerData";

import Container from "../../shared/ui/Container";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const contactIcons = {
    mail: mailIcon,
    phone: phoneIcon,
    location: locationIcon,
  };

  const socialIcons = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    linkedin: linkedinIcon,
  };

  return (
    <footer className=" border-t border-[#262626]">
      <Container>
        <div className="flex flex-col items-center gap-10 py-7.5 xl:py-10 2xl:py-12.5 lg:flex-row lg:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="SquareUp"
              className="size-12.5 xl:size-10 2xl:size-15"
            />
            <span className="text-lg font-semibold text-white xl:text-md">
              SquareUp
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-5 2xl:gap-x-7.5 gap-y-5 text-[#E6E6E6]">
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
          <div
            className="flex flex-col items-center gap-3.5 md:gap-4 md:flex-row 
                            bg-[#1C1C1C] border border-[#262626] 
                            rounded-lg px-20 py-4 md:p-2.5 md:pl-5 2xl:p-3.5 2xl:pl-6"
          >
            <span className="text-base 2xl:text-lg font-medium leading-normal text-[#E6E6E6]">
              Stay Connected
            </span>

            <div className="flex gap-2.5 2xl:gap-3.5 ">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.alt}
                >
                  <img
                    src={socialIcons[item.icon]}
                    alt={item.alt}
                    className="transition duration-300 size-13 2xl:size-16 hover:scale-110 hover:brightness-125"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="md:border-b md:border-[#262626]" />

        {/* ================= BOTTOM SECTION ================= */}
        <div className="flex flex-col gap-8 py-8 md:py-10 2xl:py-12.5 lg:flex-row lg:justify-between sm:items-center">
          {/* Contact Info */}
          <div className="flex flex-col gap-5 sm:flex-row md:gap-5.5 2xl:gap-7.5">
            {contactInfo.map(({ id, type, text }) => (
              <div
                key={id}
                className="flex items-center justify-center  gap-2.5 md:gap-1.5 2xl:gap-2.5 border-b border-[#262626] pb-5 md:pb-3 2xl:pb-4"
              >
                <img
                  src={contactIcons[type]}
                  alt={text}
                  loading="lazy"
                  className="size-6 md:size-5 2xl:size-6 shirnk-0"
                />
                <span className="text-lg sm:text-sm md:text-base 2xl:text-lg text-[#E6E6E6] font-normal leading-normal">
                  {text}
                </span>
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
