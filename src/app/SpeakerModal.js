"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const SpeakerModal = ({ speaker, onClose }) => {
  return (
    <AnimatePresence>
      {speaker && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-2xl relative"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          >
            
            <button
              className="absolute top-4 right-4 text-black text-2xl hover:text-gray-600 transition"
              onClick={onClose}
            >
              ✖
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
              <div className="text-gray-800">
                <h3 className="text-2xl font-bold">{speaker.name}</h3>
                <p className="text-sm text-gray-700">{speaker.title}</p>
                <p className="text-sm text-gray-500 mb-3">{speaker.company}</p>
                <p className="text-sm whitespace-pre-line">
                  <strong>Bio:</strong> {speaker.bio}
                </p>
              </div>
            </div>

            
            <div className="flex justify-end mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                onClick={onClose}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpeakerModal;
