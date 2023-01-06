import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
       

        <div className={css.text2}>
          <span>Scented  Candle</span>
          <span>
            {" "}
            FURTUM is more than just a maker of scented candles
            <br />



            <br />
            <br />
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        {/* blue circle */}
        {/* <motion.img
          initial={{ bottom: "5rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg1}
        /> */}

        {/* hero image */}
        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "8rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />

        {/* cart div animating */}
        {/* <motion.div
        transition={transition}
        initial={{right : "4%"}}
        whileInView={{right: "2%"}}
        className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>

        </div>

        <div className={css.customers}>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
