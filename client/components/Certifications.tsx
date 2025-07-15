import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import Tilt from 'react-parallax-tilt';
import { useIsMobile } from "../hooks/use-mobile";

const certifications = [
  {
    name: "Java Certificate",
    issuer: "Java Foundation",
    date: "2025",
    image: "/jayshreeCertification.png",
    type: "pdf",
  }
];

const Certifications = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  const handleClick = (cert: typeof certifications[0]) => {
    if (cert.type === "pdf") {
      window.open(cert.image, "_blank");
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Certifications{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
              Section
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>
        <div className="flex justify-center">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.04}
            transitionSpeed={1500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="rounded-xl"
          >
            <motion.button
              onClick={() => handleClick(certifications[0])}
              animate={isMobile ? { scale: 1.08, rotate: -2, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.25)' } : {}}
              whileHover={!isMobile ? { scale: 1.08, rotate: -2, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.25)' } : {}}
              whileTap={!isMobile ? { scale: 0.97 } : {}}
              className="bg-gray-800/80 rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:bg-blue-900/40 transition border border-gray-700 hover:border-blue-500/50"
            >
              <motion.h3
                className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                {certifications[0].name}
              </motion.h3>
              <p className="text-gray-300 mb-1">{certifications[0].issuer}</p>
              <span className="text-sm text-gray-400">{certifications[0].date}</span>
            </motion.button>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 