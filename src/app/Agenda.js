"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const agendaItems = [
    {
        time: "09:30 AM",
        title: "Registration",
        description: "Registration & Welcome Coffee",
    },
    {
        time: "10:00 AM",
        title: "Opening Remarks",
        description: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
    },
    {
        time: "10:10 AM",
        title: "Keynote: Digital Transformation in a Gen AI World",
        description: "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking",
    },
    {
        time: "10:30 AM",
        title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
        description: "TBA",
    },
    {
        time: "11:00 AM",
        title: "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
        description: "Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking Bahaa Farouk, Chief Digital & Data Officer, Suez Canal Bank, Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. 'Incolease'.",
    },
    {
        time: "11:30 AM",
        title: "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
        description: "Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking Heba Yehia, Head of Digital Products, Arab African International Bank; Ismail Ali, CEO, CariTech",
    },
    {
        time: "12:00 PM",
        title: "Coffee Break & Networking",
        description: "",
    },
    {
        time: "12:30 PM",
        title: "Panel Discussion: Cost to Serve: Deliver Customer Delight",
        description: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking Shehab Moustafa, Country Center of Excellence Director, Money Fellows; Matthew Hughes, Global Client Executive Partner, SCB, Atos; Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.",
    },
    {
        time: "01:00 PM",
        title: 'The Essential Elements: "All things to all people"',
        description: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking",
    },
    {
        time: "01:30 PM",
        title: "Making the case for change: The Question is How",
        description: "Marwan Abouzeid, Principal Solutions Consultant, Finastra Universal Banking",
    },
    {
        time: "01:50 PM",
        title: "Closing Remarks",
        description: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
    },
    {
        time: "02:00 PM",
        title: "Lunch",
        description: "",
    },
];

export default function Agenda() {
    return (
        <section
            id="agenda"
            className="relative py-28 bg-gradient-to-br from-black via-[#1a002b] to-[#3a0ca3] text-white overflow-hidden"
        >

            <div className="absolute inset-0 z-0">
                <Image
                    src="/orgimage.jpg"
                    alt="Agenda Background"
                    fill
                    className="object-cover opacity-20 blur-lg"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                    Agenda
                </motion.h2>

                <div className="space-y-6">
                    {agendaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md transition-all px-6 py-5"
                        >
                            <p className="text-lg font-semibold text-white">
                                {item.time} - {item.title}
                            </p>
                            {item.description && (
                                <p className="text-sm text-purple-200 mt-1">{item.description}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}