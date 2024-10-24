'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const layoutTransition = { duration: 1, easings: ['easeOut'] }
const opacityTransition = { duration: 1, delay: 5 , easings: ['easeOut'] }

export default function AnimatedLogo() {
  const [expand, setExpand] = useState(true);
  const [isInitialPageLoad, setIsInitialPageLoad] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setExpand(false);
      sessionStorage.setItem('initialLoad', true);
    }, 5000);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    let initialLoad = !sessionStorage.getItem('initialLoad');
    setIsInitialPageLoad(initialLoad);
  }, []);

  if (isInitialPageLoad === null) return <div className="fixed inset-0 z-[10000] h-screen w-screen bg-black" />;

  return (
    <Link href="/" className="relative block h-12">
      {isInitialPageLoad ?
        <>
          <motion.div
            layout
            data-expand={expand}
            transition={layoutTransition}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: opacityTransition }}
            className="absolute left-0 top-0 z-[1000] flex h-max w-max items-center justify-center rounded data-[expand=true]:fixed data-[expand=true]:inset-0 data-[expand=true]:z-[10000] data-[expand=true]:h-screen data-[expand=true]:w-screen"
          >
            <motion.img
              layout
              data-expand={expand}
              transition={layoutTransition}
              src="/logo.png"
              alt="Sofject logo"
              className="h-12 data-[expand=true]:h-auto data-[expand=true]:w-3/6"
            />
          </motion.div>
          <motion.div
            layout
            data-expand={expand}
            transition={layoutTransition}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: opacityTransition }}
            className="absolute left-0 top-0 z-[1000] flex h-max w-max items-center justify-center rounded bg-black data-[expand=true]:fixed data-[expand=true]:inset-0 data-[expand=true]:z-[10000] data-[expand=true]:h-screen data-[expand=true]:w-screen"
          >
            <motion.video
              layout
              data-expand={expand}
              transition={layoutTransition}
              src='/logo.webm'
              autoPlay
              muted
              className="h-12 object-contain object-center data-[expand=true]:h-screen data-[expand=true]:w-screen"
            />
          </motion.div>
        </>
        :
        <img src="/logo.png" alt="Sofject logo" className="h-12" />
      }
    </Link>
  );
}
