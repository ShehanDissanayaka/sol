"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutFinastra() {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-black via-[#1a002b] to-[#3a0ca3] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-16 shadow-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
            About Finastra
          </h2>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            Finastra is a global provider of financial services software applications across Lending, Payments,
            Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the
            potential of people, businesses and communities everywhere, its vision is to accelerate the future of
            Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by
            ~8,100 financial institutions, including 45 of the world top 50 banks.
          </p>
          <p className="mt-6 text-lg">
            For more information, visit{" "}
            <Link
              href="https://www.finastra.com"
              target="_blank"
              className="text-purple-300 hover:underline"
            >
              www.finastra.com
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
