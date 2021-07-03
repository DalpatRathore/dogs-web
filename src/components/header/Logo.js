import React from "react";
import { motion } from "framer-motion";

const logoVariants1 = {
  enter: {
    pathLength: 0,
  },
  center: {
    pathLength: 1,
    transition: {
      duration: 5,
    },
  },
};
const logoVariants2 = {
  enter: {
    pathLength: 0,
  },
  center: {
    pathLength: 1,
    transition: {
      duration: 9,
    },
  },
};

const Logo = () => {
  return (
    <svg
      viewBox="0 0 220 70"
      className="header__logo-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M187.317 58.2628C188.549 59.2967 190.038 59.9778 191.626 60.234C193.214 60.4902 194.841 60.3119 196.336 59.718C197.83 59.1241 199.137 58.1368 200.116 56.8607C201.095 55.5846 201.71 54.0674 201.897 52.4699C201.939 51.7776 201.939 51.0835 201.898 50.3911C201.894 48.7119 202.764 47.0926 203.92 45.7142C204.963 44.4722 206.211 43.3851 207.682 43.0534C208.564 43.0413 209.439 42.8974 210.279 42.6266C210.294 42.6193 210.311 42.6145 210.327 42.6123L210.331 42.6153C210.347 42.6114 210.362 42.6056 210.376 42.5981C210.389 42.5969 210.392 42.5933 210.392 42.5933C211.947 42.0744 213.327 41.1338 214.379 39.8763L214.418 39.8297C215.592 38.4294 216.308 36.7022 216.468 34.8818C216.628 33.0615 216.224 31.236 215.313 29.6526C214.401 28.0691 213.024 26.8042 211.37 26.029C209.715 25.2538 207.862 25.006 206.062 25.3188C205.217 25.2619 204.397 25.0129 203.663 24.5909C203.639 24.5717 203.613 24.554 203.586 24.5379C202.992 24.199 202.432 23.8049 201.913 23.3606C200.542 22.2102 199.406 20.7864 199.12 19.1518C199.042 18.426 198.917 17.706 198.746 16.9962C198.277 15.4617 197.402 14.0822 196.214 13.0034C195.027 11.9246 193.57 11.1864 191.997 10.8666C190.425 10.5469 188.795 10.6575 187.28 11.1868C185.765 11.7161 184.421 12.6444 183.39 13.8739L183.327 13.9493C181.839 15.7646 181.127 18.0934 181.345 20.4304C181.563 22.7673 182.693 24.924 184.491 26.4324L184.524 26.4595C185.851 27.5632 187.47 28.2569 189.185 28.456C189.877 28.4965 190.571 28.4968 191.263 28.4569C192.943 28.4529 194.558 29.3192 195.94 30.4787C196.384 30.8467 196.801 31.2472 197.186 31.6767C197.911 32.4389 198.413 33.3853 198.639 34.413C198.695 34.7174 198.736 35.0265 198.776 35.3356C198.772 35.3692 198.775 35.4022 198.774 35.4322C198.767 38.4587 195.523 42.0249 192.594 42.5286C191.868 42.6099 191.148 42.7373 190.438 42.9101C189.178 43.2957 188.019 43.9557 187.044 44.8427C186.069 45.7297 185.303 46.8216 184.801 48.04C184.796 48.0496 184.794 48.06 184.793 48.0706C184.08 49.8178 183.94 51.7466 184.393 53.5785C184.847 55.4104 185.871 57.0508 187.317 58.2628Z"
        stroke="url(#paint0_logo_linear)"
        strokeWidth="4"
        variants={logoVariants1}
        initial="enter"
        animate="center"
      />
      <motion.path
        d="M163.34 36.4783H170.808C168.319 50.663 163.33 54.532 153.88 58M143.923 58C120.523 48.7065 119.029 21.8043 143.923 13M152.885 13C161.846 14.9565 164.336 17.4022 167.821 22.7826"
        stroke="url(#paint1_logo_linear)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={logoVariants2}
        initial="enter"
        animate="center"
      />
      <motion.path
        d="M147.366 31.8253C145.735 31.2056 143.564 32.2368 143.345 34.7079C143.515 37.964 143.118 39.9247 142.787 41.3256C142.454 44.8049 144.353 47.2859 146.886 47.0579C148.507 46.8907 149.231 46.2106 150.383 44.5513C151.86 42.6612 153.02 42.0724 155.287 41.2993C156.774 40.6705 157.404 40.2161 157.96 39.1203C159.022 36.7829 157.476 34.1838 153.686 33.5133C151.577 33.2137 149.359 32.5825 147.366 31.8253Z"
        fill="url(#paint2_logo_linear)"
        stroke="url(#paint3_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint2_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M138.926 36.4921C139.692 36.9799 140.223 37.6375 140.476 38.2856C140.729 38.9341 140.694 39.5354 140.405 39.9844C140.117 40.4333 139.583 40.7174 138.886 40.7609C138.188 40.8044 137.366 40.6003 136.6 40.1124C135.833 39.6246 135.302 38.9671 135.049 38.319C134.796 37.6704 134.831 37.0691 135.12 36.6202C135.408 36.1712 135.942 35.8871 136.64 35.8436C137.337 35.8002 138.159 36.0043 138.926 36.4921Z"
        fill="url(#paint4_logo_linear)"
        stroke="url(#paint5_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint4_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M155.024 26.9146C155.238 27.7985 155.166 28.644 154.9 29.2909C154.634 29.9382 154.194 30.3521 153.677 30.4807C153.16 30.6093 152.58 30.4492 152.048 30.0003C151.517 29.5518 151.066 28.8363 150.852 27.9524C150.637 27.0686 150.71 26.223 150.975 25.5762C151.241 24.9288 151.682 24.515 152.199 24.3864C152.716 24.2578 153.295 24.4178 153.827 24.8667C154.359 25.3153 154.809 26.0308 155.024 26.9146Z"
        fill="url(#paint6_logo_linear)"
        stroke="url(#paint7_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint6_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M140.453 29.0069C141.177 29.6665 141.621 30.4645 141.771 31.2036C141.921 31.9432 141.773 32.5849 141.377 33.0176C140.982 33.4503 140.355 33.6552 139.603 33.5732C138.852 33.4913 138.015 33.1222 137.292 32.4626C136.568 31.803 136.124 31.005 135.974 30.2659C135.824 29.5264 135.972 28.8846 136.367 28.4519C136.763 28.0193 137.39 27.8143 138.142 27.8963C138.893 27.9783 139.729 28.3473 140.453 29.0069Z"
        fill="url(#paint8_logo_linear)"
        stroke="url(#paint9_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint8_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M147.494 25.1498C147.885 26.0485 147.964 26.9605 147.8 27.6988C147.635 28.4376 147.239 28.9656 146.703 29.2013C146.166 29.4369 145.512 29.3701 144.861 28.9897C144.21 28.6094 143.599 27.9313 143.208 27.0326C142.818 26.1339 142.739 25.222 142.903 24.4836C143.068 23.7448 143.464 23.2168 144 22.9811C144.537 22.7455 145.191 22.8123 145.842 23.1927C146.492 23.573 147.104 24.2512 147.494 25.1498Z"
        fill="url(#paint10_logo_linear)"
        stroke="url(#paint11_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint10_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M86.9626 13C65.0219 17.557 61.0839 49.4557 86.9626 58M96.5264 13C122.968 20.9747 116.779 52.8734 95.4013 58"
        stroke="url(#paint12_logo_linear)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={logoVariants2}
        initial="enter"
        animate="center"
      />
      <motion.path
        d="M91.366 31.3253C89.7353 30.7056 87.5635 31.7368 87.3445 34.2079C87.5155 37.464 87.1178 39.4247 86.7872 40.8256C86.4541 44.3049 88.3531 46.7859 90.8862 46.5579C92.5067 46.3907 93.2311 45.7106 94.3832 44.0513C95.8597 42.1612 97.0205 41.5724 99.2867 40.7993C100.774 40.1705 101.404 39.7161 101.96 38.6203C103.022 36.2829 101.476 33.6838 97.6862 33.0133C95.577 32.7137 93.3586 32.0825 91.366 31.3253Z"
        fill="url(#paint13_logo_linear)"
        stroke="url(#paint14_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint13_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M82.9256 35.9921C83.6921 36.4799 84.2232 37.1375 84.476 37.7856C84.729 38.4341 84.6937 39.0354 84.4053 39.4844C84.1168 39.9333 83.5832 40.2174 82.8856 40.2609C82.1884 40.3044 81.3659 40.1003 80.5995 39.6124C79.8331 39.1246 79.302 38.4671 79.0491 37.819C78.7961 37.1704 78.8314 36.5691 79.1199 36.1202C79.4084 35.6712 79.9419 35.3871 80.6396 35.3436C81.3367 35.3002 82.1592 35.5043 82.9256 35.9921Z"
        fill="url(#paint15_logo_linear)"
        stroke="url(#paint16_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint15_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M99.0236 26.4146C99.238 27.2985 99.1658 28.144 98.9001 28.7909C98.6341 29.4382 98.1936 29.8521 97.6766 29.9807C97.1596 30.1093 96.5799 29.9492 96.0481 29.5003C95.5167 29.0518 95.066 28.3363 94.8517 27.4524C94.6374 26.5686 94.7095 25.723 94.9753 25.0762C95.2413 24.4288 95.6818 24.015 96.1988 23.8864C96.7158 23.7578 97.2954 23.9178 97.8272 24.3667C98.3586 24.8153 98.8093 25.5308 99.0236 26.4146Z"
        fill="url(#paint17_logo_linear)"
        stroke="url(#paint18_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint17_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M84.4532 28.5069C85.177 29.1665 85.6211 29.9645 85.7709 30.7036C85.9209 31.4432 85.7732 32.0849 85.3774 32.5176C84.9815 32.9503 84.3545 33.1552 83.603 33.0732C82.8519 32.9913 82.0153 32.6222 81.2916 31.9626C80.5678 31.303 80.1237 30.505 79.9739 29.7659C79.8239 29.0264 79.9716 28.3846 80.3674 27.9519C80.7633 27.5193 81.3903 27.3143 82.1418 27.3963C82.8929 27.4783 83.7295 27.8473 84.4532 28.5069Z"
        fill="url(#paint19_logo_linear)"
        stroke="url(#paint20_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint19_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M91.4943 24.6498C91.8848 25.5485 91.9641 26.4605 91.7995 27.1988C91.6348 27.9376 91.239 28.4656 90.7026 28.7013C90.1662 28.9369 89.512 28.8701 88.861 28.4897C88.2104 28.1094 87.5989 27.4313 87.2084 26.5326C86.818 25.6339 86.7386 24.722 86.9032 23.9836C87.0679 23.2448 87.4637 22.7168 88.0001 22.4811C88.5365 22.2455 89.1907 22.3123 89.8417 22.6927C90.4923 23.073 91.1039 23.7512 91.4943 24.6498Z"
        fill="url(#paint21_logo_linear)"
        stroke="url(#paint22_logo_linear)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint2_logo_linear_nocolor)",
        }}
        animate={{
          fill: "url(#paint21_logo_linear)",
          pathLength: 1,
          transition: {
            fill: { delay: 12 },
            pathLength: { delay: 5, duration: 3 },
          },
        }}
      />
      <motion.path
        d="M35.5288 29.2209V55.907H48.8351C52.9293 54.8605 54.4646 52.7674 56 48.5814V19.8023C54.9764 15.6163 52.9293 13.5233 48.8351 13H28.3639C20.5414 16.9184 21.3654 21.7199 19.6636 28.6977L6.86912 28.1744C3.74999 45.0501 8.67772 49.8917 27.3403 51.7209V58M8.4044 34.4535C10.4706 33.7791 11.2826 33.0213 11.4751 30.2674"
        stroke="url(#paint23_logo_linear)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={logoVariants1}
        initial="enter"
        animate="center"
      />

      <defs>
        <linearGradient
          id="paint0_logo_linear"
          x1="170.875"
          y1="18.062"
          x2="207.145"
          y2="48.4967"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint1_logo_linear"
          x1="148.308"
          y1="13"
          x2="148.308"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint2_logo_linear"
          x1="144.675"
          y1="32.2091"
          x2="152.782"
          y2="43.5185"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint3_logo_linear"
          x1="144.675"
          y1="32.2091"
          x2="152.782"
          y2="43.5185"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint4_logo_linear"
          x1="134.698"
          y1="36.3517"
          x2="140.81"
          y2="40.2789"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint5_logo_linear"
          x1="134.698"
          y1="36.3517"
          x2="140.81"
          y2="40.2789"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint6_logo_linear"
          x1="152.081"
          y1="23.9004"
          x2="153.836"
          y2="30.9562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint7_logo_linear"
          x1="152.081"
          y1="23.9004"
          x2="153.836"
          y2="30.9562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint8_logo_linear"
          x1="135.998"
          y1="28.1151"
          x2="141.737"
          y2="33.3656"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint9_logo_linear"
          x1="135.998"
          y1="28.1151"
          x2="141.737"
          y2="33.3656"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint10_logo_linear"
          x1="143.801"
          y1="22.5225"
          x2="146.931"
          y2="29.6472"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint11_logo_linear"
          x1="143.801"
          y1="22.5225"
          x2="146.931"
          y2="29.6472"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint12_logo_linear"
          x1="91.5"
          y1="13"
          x2="91.5"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint13_logo_linear"
          x1="88.6755"
          y1="31.7091"
          x2="96.7821"
          y2="43.0185"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint14_logo_linear"
          x1="88.6755"
          y1="31.7091"
          x2="96.7821"
          y2="43.0185"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint15_logo_linear"
          x1="78.6981"
          y1="35.8517"
          x2="84.8103"
          y2="39.7789"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint16_logo_linear"
          x1="78.6981"
          y1="35.8517"
          x2="84.8103"
          y2="39.7789"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint17_logo_linear"
          x1="96.0809"
          y1="23.4004"
          x2="97.8361"
          y2="30.4562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint18_logo_linear"
          x1="96.0809"
          y1="23.4004"
          x2="97.8361"
          y2="30.4562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint19_logo_linear"
          x1="79.9979"
          y1="27.6151"
          x2="85.7367"
          y2="32.8656"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint20_logo_linear"
          x1="79.9979"
          y1="27.6151"
          x2="85.7367"
          y2="32.8656"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint21_logo_linear"
          x1="87.8009"
          y1="22.0225"
          x2="90.9307"
          y2="29.1472"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint22_logo_linear"
          x1="87.8009"
          y1="22.0225"
          x2="90.9307"
          y2="29.1472"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint23_logo_linear"
          x1="31"
          y1="13"
          x2="31"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
