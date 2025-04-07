"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OrgDetails() {
    return (
        <section className="relative pt-28 pb-20 bg-gradient-to-br from-black via-[#1a002b] to-[#3a0ca3] text-white overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/orgimage.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-20 blur-lg"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-16 sm:p-20 shadow-2xl mb-16"
                >
                    <div className="text-center space-y-8">
                        <p className="text-sm uppercase tracking-widest text-purple-200">
                            Organized By
                        </p>

                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            FINASTRA
                        </h2>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                            Reimagine Banking:
                            <br />
                            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                                Adapt. Evolve. Thrive.
                            </span>
                        </h3>

                        <div className="grid gap-4 text-gray-200 text-lg sm:text-xl max-w-md mx-auto">
                            <p><span className="text-white font-medium">Date:</span> 9th April 2025</p>
                            <p><span className="text-white font-medium">Time:</span> 9:30 AM – 2:00 PM GMT+2</p>
                            <p><span className="text-white font-medium">Location:</span> The Nile Ritz-Carlton, Cairo, Egypt</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-center mt-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: 10, y: -30 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        y: 0,
                    }}
                    viewport={{ once: true }} // Trigger the animation only once when the image enters the viewport
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                    }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 5,
                        transition: { duration: 0.3 },
                    }}
                >
                    <Image
                        src="/orgimage.jpg"
                        alt="Event visual content"
                        width={600}
                        height={200}
                        className="transition-all duration-1000 ease-in-out"
                    />
                </motion.div>
            </div>
        </section>
    );
}
