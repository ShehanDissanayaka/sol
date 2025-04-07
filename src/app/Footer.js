"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#0c0c0c] text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
       
        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4">Cogent Solutions™</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Through our conferences we transform your business challenges into opportunities.
            Our clients and customers are leading government entities and the Fortune 500 companies.
          </p>
        </motion.div>

        
        <motion.div variants={fadeIn}>
          <h3 className="text-2xl font-semibold mb-4">Awards</h3>
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3, 4].map((num, i) => (
              <motion.div
                key={num}
                custom={i * 0.1}
                variants={fadeIn}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="transition-transform duration-300 cursor-pointer"
              >
                <Link
                  href="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/#speakers-02"
                  target="_blank"
                >
                  <Image
                    src={`/awards/award${num}.png`}
                    alt={`Award ${num}`}
                    width={100}
                    height={100}
                    className="rounded-xl shadow-md"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="text-gray-400 space-y-4 text-sm">
            <div>
              <strong className="text-white">Middle East & Africa HQ</strong><br />
              Office No: 209, The Metropolis Tower<br />
              Business Bay, Dubai, UAE
            </div>
            <div>
              <strong className="text-white">Asia Pacific HQ</strong><br />
              7th floor Green Lanka Tower, Colombo, Sri Lanka
            </div>
            <div>
              <strong className="text-white">Saudi Arabia HQ</strong><br />
              Riyadh, Saudi Arabia
            </div>
            <div>📞 +971 50 5718867</div>
            <div>📧 partnerships@cogentsolutions.ae</div>
          </div>

          
          <motion.div
            variants={fadeIn}
            custom={0.4}
            className="mt-6 flex gap-4 text-xl"
          >
            <SocialIcon
              href="https://www.linkedin.com/company/cogent-solutions-event-management/"
              icon={<FaLinkedin />}
            />
            <SocialIcon
              href="https://web.facebook.com/cseventsuae/?_rdc=1&_rdr#"
              icon={<FaFacebookF />}
            />
            <SocialIcon
              href="https://www.instagram.com/cs_event_management/"
              icon={<FaInstagram />}
            />
            <SocialIcon
              href="https://x.com/cseventsdxb"
              icon={<FaXTwitter />}
            />
          </motion.div>
        </motion.div>
      </div>

      
      <motion.div
        variants={fadeIn}
        custom={0.6}
        className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm"
      >
        © 2025 Cogent Solutions Event Management LLC. All Rights Reserved
      </motion.div>
    </motion.footer>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <Link href={href} target="_blank">
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: 5,
          backgroundColor: "#1f1f1f",
        }}
        className="p-3 rounded-full bg-[#111] text-white hover:text-pink-500 transition-all"
      >
        {icon}
      </motion.div>
    </Link>
  );
}
