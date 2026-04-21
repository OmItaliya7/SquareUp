import logo from "../../assets/logo/brand/logo-main.svg";

import facebookIcon from "../../assets/icons/social/facebook.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";

import mailIcon from "../../assets/icons/social/mail.svg";
import phoneIcon from "../../assets/icons/social/phone.svg";
import locationIcon from "../../assets/icons/social/location.svg";

import { NavLink } from "react-router-dom";

import { footerLinks, socialLinks, contactInfo} from "../../shared/data/footerData";

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
    <footer className="w-full border-t border-border-subtle">
      <div className="py-8 md:py-10 2xl:py-12.5 layout-shell">
        <div className="flex flex-col gap-7.5 items-center lg:flex-row lg:justify-between pb-[30px] lg:pb-10 2xl:pb-[50px] md:border-b md:border-border-subtle">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="SquareUp"
              className="size-12.5 xl:size-10 2xl:size-15"
            />
            <span className="text-lg font-semibold text-text-primary xl:text-md">
              SquareUp
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-5 2xl:gap-x-7.5 gap-y-5 text-text-secondary">
            {footerLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="transition hover:text-accent-primary"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Social Capsule */}
          <div className="flex flex-col items-center gap-3.5 md:gap-4 md:flex-row bg-bg-tertiary border border-border-subtle rounded-lg px-20 py-4 md:p-2.5 md:pl-5 2xl:p-3.5 2xl:pl-6" >
            <span className="text-base font-medium leading-normal 2xl:text-lg text-text-secondary">
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

        {/* BOTTOM SECTION  */}
        <div className="flex flex-col gap-5 pt-[30px] lg:pt-10 2xl:pt-[50px] lg:flex-row lg:justify-between sm:items-center">
          {/* Contact Info */}
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center md:gap-5.5 2xl:gap-7.5">
            {contactInfo.map(({ id, type, text }) => (
              <div
                key={id}
                className="flex items-center justify-center gap-2.5 md:gap-1.5 2xl:gap-2.5 border-b border-border-subtle pb-5 md:pb-3 2xl:pb-4"
              >
                <img
                  src={contactIcons[type]}
                  alt={text}
                  loading="lazy"
                  className="size-6 md:size-5 2xl:size-6 shrink-0"
                />
                <span className="text-lg xl:text-base 2xl:text-lg text-text-secondary">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-base leading-normal text-center text-text-muted md:text-lg lg:text-right">
            &copy; {new Date().getFullYear()} SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
