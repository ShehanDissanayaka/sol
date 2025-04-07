"use client";

import React, { useState } from "react";
import SpeakerModal from "./SpeakerModal";
import { motion } from "framer-motion";

const speakers = [
    {
        id: 1,
        name: 'Mr. Bahaa Farouk',
        title: 'Chief Digital & Data Officer',
        company: 'Suez Canal Bank',
        image: '/bahaa.jpg',
        bio: "Bahaa is graduated in Computer Science 2005, also he holds two masters’ degrees in Computer Science and Business Administration, of more than 20 years’ experience Information Technology, Telco, Banking & Financial Services, Cloud and Digital Transformation in Egypt, Gulf, and Europe worked for Huawei, HP, Ooredoo, Vodafone, Banque Misr  and Currently, at Suez Canal Bank, Chief Transformation Officer in charge of the digital and data transformation adopting best in class solutions and agile operating model",
    },

    {
        id: 2,
        name: 'Mr. Shehab Moustafa',
        title: 'Country Center of Excellence Director Money Fellows',
        company: 'Money Fellows',
        image: '/shehab.jpg',
        bio: `Chief Digital & Data Officer Suez Canal Bank`, // issue...................
    },

    {
        id: 3,
        name: 'Mr. Marwan Abouzeid',
        title: 'Principal Solutions Consultant & Customer Value Lead',
        company: 'MEA & APAC Finastra',
        image: '/marwan.jpg',
        bio: `Marwan Abouzeid is a seasoned professional with over 22 years of experience in the Fintech industry. Currently serving as the Principal Solutions Consultant & Customer Value Lead for MEA and APAC at Finastra, Marwan is known for his strategic consulting, customer relationship management, and business development expertise.

His role involves ensuring Finastra adopts the right Go-to-Market strategy for its core banking platform, blending direct strategic customer engagements for both conventional and Islamic banks with complementary marketing and business development activities. Marwan's direct KPIs include C-level engagements such as ideation sessions, strategy formulation, and business case construction.

Marwan's career background spans various roles in development, product management, professional services, and presales. He has proven ability in technology consultative selling for financial institutions seeking transformation and innovation. His extensive experience and dedication have made him a key player in the industry, contributing to significant projects and initiatives that drive growth and innovation.

Prior to his journey at Finastra Marwan has held multiple roles within the financial industry working for both banking solution providers and financial institutions. Marwan holds an MBA from Manchester Business School and a bachelor’s degree in computer science from The American University in Cairo.`,
    },

    {
        id: 4,
        name: 'Mr. Karim El Mourabet',
        title: 'Solution Consulting Director ',
        company: 'MEA Finastra',
        image: '/karim.jpg', 
        bio: ` Karim El Mourabet leads the Retail Banking Solution Consulting team at Finastra, covering Middle East & Africa. He has over 12 years’ experience in retail banking software implementation and consulting and working with Digital Banks. He previously led the Innovation services for Finastra Global Services team and worked on Next Gen implementation services, including core banking migrations.

Prior to re-joining Finastra, he was global head of solution consulting at Fidor, working on designing and launching digital banks globally. He holds a Masters of Science in Project Management and a Bachelor’s in Business Administration from the American University of Beirut.`,
    },

    {
        id: 5,
        name: 'Ms. Siobhan Byron',
        title: 'Executive Vice President',
        company: 'Universal Banking Finastra',
        image: '/siobhan.jpg', 
        bio: `Siobhan oversees Universal Banking, including market leading core banking and digital solutions globally. She has more than 25 years of experience in IT and channel management, as well as leading and growing prominent technology companies across financial services, insurance, manufacturing, and public sectors. Siobhan is a strong advocate for diversity and inclusion. She is the Executive Sponsor for the company’s LGBTQ+ and Friends initiatives and supports Women@Finastra. Based in Canada, Siobhan enjoys spending down time with her family and friends, travelling, reading, and watching her son play hockey.`,
    },

    {
        id: 6,
        name: 'Mr. Narendra Mistry',
        title: 'Chief Product and Technology Officer Universal Banking',
        company: 'Finastra',
        image: '/narendra.jpg', 
        bio: `Narendra leads the global product and technology organization for Universal Banking as the Chief Product and Technology Officer (CPTO). Narendra has been in the financial software industry for more than 25 years and his career with Finastra spans more than 13 years in various leadership roles, including running product for International Retail. He has experience building new SaaS businesses in Digital Essence cloud banking, whilst ensuring a robust product and go-to-market strategy. Narendra was instrumental in the very successful Equation N-2 program and the Midas Service Pack program that have made the Midas and Equation business extremely stable over the years.

During his time at Finastra, Narendra has built a strong reputation of being a trusted leader who has been central to many successes on our journey. Narendra is based in London.`,
    },

    {
        id: 7,
        name: 'Mr. Ahmed Hamdy Bahey El Din',
        title: 'Head of Information Technology',
        company: 'Incolease',
        image: '/ahmed.png', 
        bio: `Ahmed Hamdy is a results-driven IT professional with extensive experience leading IT departments and delivering innovative solutions. As the IT Head at Incolease, he manages all IT operations, ensuring strategic alignment, process optimization, and efficient resource management. With over 18 years of experience, his career highlights include managing complex projects at EFG-HERMES, Corplease, and Atos, focusing on business process automation and efficiency improvements. Ahmed's expertise includes ERP systems, leasing, factoring, and securitization, and he holds certifications in CBAP® and ITIL® Foundation.`,
    },

    {
        id: 8,
        name: 'Mr. Emad Shawky Habib Hanna',
        title: 'Chief Data and Anakytics Officer',
        company: 'Banque Misr',
        image: '/emad.png', 
        bio: `Chief Digital & Data Officer Banque Misr`, // bio is not available
    },

    {
        id: 9,
        name: 'Ms. Heba Yehia',
        title: 'Head of Digital Products',
        company: 'Arab African International Bank',
        image: '/heba.jpg', 
        bio: `Chief Digital & Data Officer Suez Canal Bank`, // bio is not available
    },

    {
        id: 10,
        name: 'Mr. Hamid Nirouzad',
        title: 'Managing Director',
        company: 'Africa Finastra Universal',
        image: '/hamid.jpg', 
        bio: `Hamid Nirouzad is a seasoned professional in the fintech industry. He began his career at National Westminster Bank in the UK before joining Midas-Kapiti in 1994. Throughout his tenure at Finastra, Hamid has played a pivotal role in various business aspects across Europe and the MEA regions. With a robust background in both retail and corporate banking, he possesses a comprehensive understanding of the banking sector.`,
    },

    {
        id: 11,
        name: 'Mr. Rudy Kawmi',
        title: 'Managing Director - Middle East, Africa & Asia-Pacific',
        company: 'Finastra Universal Banking',
        image: '/rudy.jpg', 
        bio: `Rudy Kawmi oversees the Retail Banking business across the Middle East, Africa, and Asia-Pacific regions at Finastra. With a career dedicated to financial technology, Rudy has collaborated with banks on numerous digital transformation initiatives. As a proponent of innovative business models that promote financial inclusion, he is passionate about establishing fintech partnerships across these regions to drive innovation and expand access to next-generation banking systems.`,
    },

    {
        id: 12,
        name: 'Mr. Matthew Hughes',
        title: 'Global Client Executive Partner',
        company: 'SCB Atos',
        image: '/matthew.jpg', 
        bio: `Matthew Hughes is a seasoned professional with over 25 years of experience in the financial services and insurance sectors. Matthew worked for 17 years at Royal Bank of Scotland in various leadership roles, including Country Head of Operations in China, Head of Retail and Commercial Banking in China, Head of Core Banking Operations for England and Wales, and Head of Consumer Finance for Spain and Portugal.

At Atos, he serves as Global Client Executive Partner and Head of the Financial Services & Insurance Sector for International Markets (covering Middle East, APAC, Latin America, Switzerland, Iberia and South East Europe). In this role, Matthew leads strategic client engagement and initiatives around Platform and/or Mainframe Modernisation and Migrations, Cloud, Cybersecurity and the full range of end-to-end managed services that Atos offers, as well as the management of key client relationships, leveraging his extensive industry expertise to drive business growth and innovation.

In 2022, Atos in Asia Pacific announced Matthew's appointment as the Global Client Executive Partner for our largest customer in APAC (Global Bank), underscoring his pivotal role in strengthening the partnership between Atos and the bank.

Matthew is based in Singapore and is bilingual in Spanish.`,
    },
];

const SpeakersSection = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const handleCardClick = (speaker) => setSelectedSpeaker(speaker);
    const handleClose = () => setSelectedSpeaker(null);

    return (
        <div
            id="speakers"
            className="relative py-28 bg-gradient-to-br from-black via-[#1a002b] to-[#3a0ca3] text-white overflow-hidden"
        >
            
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/overviewimage.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10 blur-lg"
                />
            </div>

            <div className="relative z-10 text-center text-white mb-10">
                <h2 className="text-4xl font-bold mb-4">Our Speakers</h2>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
                {speakers.map((speaker) => (
                    <motion.div
                        key={speaker.id}
                        className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleCardClick(speaker)}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-[300px] object-top object-contain bg-black"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-white text-lg font-bold">{speaker.name}</h3>
                            <p className="text-sm text-gray-300">{speaker.title}</p>
                            <p className="text-sm text-gray-400">{speaker.company}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedSpeaker && (
                <SpeakerModal speaker={selectedSpeaker} onClose={handleClose} />
            )}
        </div>
    );
};

export default SpeakersSection;
