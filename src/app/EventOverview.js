"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const text = "Event Overview";

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotate: -10,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

export default function EventOverview() {
  return (
    <section
      id="event-overview"
      className="relative pt-28 pb-20 bg-gradient-to-br from-black via-[#1a002b] to-[#3a0ca3] text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/orgimage.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20 blur-lg"
          priority
        />
      </div>

      <div className="relative z-10 py-24 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2 }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-200"
          >
            <p>
              Join us on April 9th in Cairo, Egypt, for Finastra Universal Banking Forum,
              Reimagine Banking: Adapt. Evolve. Thrive. This exclusive event is designed to help
              you navigate and excel in the rapidly evolving banking landscape.
            </p>
            <p>
              Our forum will bring together business and technology experts, industry leaders, and
              visionaries to share insights on the latest trends and challenges in the banking
              sector.
            </p>
            <p>
              Each session will delve into the implications, challenges, and opportunities these
              topics present, providing you with practical strategies to leverage the latest
              technologies and capitalize on emerging opportunities.
            </p>
            <p>
              Donot miss this opportunity to enhance your knowledge, skills, and network in the
              finance and banking sector. Register today and secure your place at this must-attend
              event!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 py-20 px-6 md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/overviewimage.jpg"
              alt="Conference Watch"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-6 text-gray-100"
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white">
              Top Reasons Why This is the Only Conference You Need to Attend in 2025
            </h3>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span>🎓</span>
                <span>Learn from industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📈</span>
                <span>Stay ahead of emerging trends</span>
              </li>
              <li className="flex items-start gap-3">
                <span>🤝</span>
                <span>Connect with fellow banking professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span>💡</span>
                <span>Enhance your knowledge, skills, and network</span>
              </li>
              <li className="flex items-start gap-3">
                <span>🗣️</span>
                <span>Share your expertise and experience with peers</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
