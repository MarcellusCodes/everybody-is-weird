import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  const pageMotion = {
    initial: {
      scale: 0.9,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.75,
      },
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.75,
      },
    },
    exit: {
      scale: 0.9,
      transition: {
        type: "spring",
        duration: 0.3,
        bounce: 0,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <motion.div
        className=" bg-primary overflow-hidden"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
        key={router.route}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
