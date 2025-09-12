import { easeOut } from "motion/react";

export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      type: easeOut,
    },
  },
};

export const children = {
  hidden: {
    y: 75,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'ease-out', bounce: 0, duration: 0.5 },
  },
};

export const whenInViewport = {
  offscreen: { y: 75, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'ease-out', bounce: 0, duration: 1 },
  },
};
