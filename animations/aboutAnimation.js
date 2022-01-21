const leftAnimation = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate1: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
    },
  },
  animate2: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
  animate3: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.4,
    },
  },

  exitanimate1: {
    y: 0,
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
    },
  },
  exitanimate2: {
    y: 0,
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
  exitanimate3: {
    y: 0,
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
      type: "spring",
      duration: 1,
      delay: 0.4,
    },
  },
};

const rightAnimation = {
  initial: {
    backgroundPosition: "1000px ",
    filter: "hue-rotate(-100deg)",
  },
  animate: {
    backgroundPosition: `-88px`,
    filter: "hue-rotate(0deg)",
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};
export { leftAnimation, rightAnimation };
