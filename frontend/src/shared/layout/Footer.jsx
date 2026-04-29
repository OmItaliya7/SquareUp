import logo from "../../assets/logo/brand/logo-main.svg";

import facebookIcon from "../../assets/icons/social/facebook.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";

import mailIcon from "../../assets/icons/social/mail.svg";
import phoneIcon from "../../assets/icons/social/phone.svg";
import locationIcon from "../../assets/icons/social/location.svg";

import { NavLink, Link } from "react-router-dom";

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
    <footer className="w-full py-7.5 md:py-10 2xl:py-12.5 border-t border-subtle">
        <div className="layout-shell flex flex-col items-center lg:flex-row lg:justify-between pb-7.5 lg:pb-10 2xl:pb-12.5 gap-7.5 lg:border-b border-subtle">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="SquareUp-Logo"
              className="size-10 2xl:size-15"
            />
            <span className="font-semibold  2xl:text-xl text-primary">
              SquareUp
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-5 2xl:gap-x-7.5 font-medium text-base 2xl:text-lg text-secondary">
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
          <div className="flex flex-col items-center md:flex-row px-22 py-4 md:p-2.5 md:pl-5 2xl:p-3.5 2xl:pl-6 gap-3.5 md:gap-4 border-t border-subtle rounded-lg 2xl:rounded-xl bg-bg-tertiary">
            <span className="font-medium text-base 2xl:text-lg leading-normal text-secondary">
              Stay Connected  
            </span>

            <div className="flex gap-2.5 2xl:gap-3.5">
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
                    className="size-13 2xl:size-16 transition duration-300 hover:scale-110 hover:brightness-125"
                  />
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* BOTTOM SECTION  */}
        <div className="layout-shell flex flex-col lg:flex-row lg:justify-between sm:items-center pt-7.5 lg:pt-10 2xl:pt-12.5 gap-5">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-5 md:gap-5.5 2xl:gap-7.5">
            {contactInfo.map(({ id, type, text , link }) => (
              <a
                key={id}
                href={link}
                target={link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center justify-center pb-5 md:pb-3 2xl:pb-4 gap-2.5 md:gap-1.5 2xl:gap-2.5 border-b border-subtle cursor-pointer transition-all duration-300 hover:text-accent-primary hover:scale-[1.02]"
              >
                <img
                  src={contactIcons[type]}
                  alt={text}
                  loading="lazy"
                  className="size-6 md:size-5 2xl:size-6 shrink-0"
                />
                <span className="text-lg xl:text-base 2xl:text-lg text-secondary">
                  {text}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-base md:text-sm 2xl:text-lg leading-normal text-muted text-center lg:text-right">
            &copy; {new Date().getFullYear()} SquareUp. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;