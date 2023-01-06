import React from "react";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
       
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Ho Chi Minh City</span>
            </span>

            <span className={css.pngLine}>
              {" "}
              <PhoneIcon className={css.icon} />
              <a href="tel:352-306-4415">+84-000-000-000</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@amazon.com ">furtum.lab@gmail.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2023 by Furtum, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
