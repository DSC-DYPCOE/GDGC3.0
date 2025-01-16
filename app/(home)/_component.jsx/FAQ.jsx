"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const faqData = [
  {
    id: 1,
    question: "Who can become a member?",
    answer:
      "The club is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.",
    position: "left",
  },
  {
    id: 2,
    question: "How frequently do events and workshops occur?",
    answer:
      "We have a hands-on session every Tuesday at SG25 from 1800hrs to 2030hrs. We also hold workshops and showcases & we would recommend you to join our community to get updates.",
    position: "center-left",
  },
  {
    id: 3,
    question: "What should I carry when attending a workshop?",
    answer:
      "We recommend you carry with you a notebook, pen, and a laptop because more often than not we make our hands dirty with code. Most importantly, carry along a healthy dose of curiosity and enthusiasm.",
    position: "center-right",
  },
  {
    id: 4,
    question: "Who should I reach out to if I have any questions?",
    answer:
      "If you have any questions or comments, please don't hesitate to contact us by clicking the button below. We would be happy to stay engaged via email even after the event.",
    position: "right",
  },
];

export default function FAQSection() {
  return (
    <div className="min-h-screen bg-[#e6f7f1] dark:bg-gray-900 p-8 relative">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-[1vh] md:mb-[20vh] text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 relative">
        {faqData.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative flex flex-col items-center"
          >
            {/* Add images for the second and third cards */}
            {index === 1 && (
              <img
                src="./women.png"
                className="w-60 z-10  absolute -top-[13vh] md:-top-[18vh] left-40"
                alt="Women illustration"
              />
            )}
            {index === 2 && (
              <img
                src="./men.png"
                className="w-40  absolute -top-8 "
                alt="Men illustration"
              />
            )}
            <Card
              className={`p-6 mb-[20vh] h-full relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-4 ${
                index == 0
                  ? "border-blue-500"
                  : index === 1
                  ? "border-red-500 mb-10"
                  : "border-green-500"
              } ${index == 3 ? "border-orange-400" : ""}
              ${index%2==0?"top-20":0}
              `}
            >
              <motion.h2
                className="text-xl font-semibold mb-3 mt-4 text-gray-800 dark:text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {faq.question}
              </motion.h2>

              <motion.p
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {faq.answer}
              </motion.p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-[-10vh] md:mt-[20vh] cursor-pointer text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-400 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send us an email
        </motion.button>
      </motion.div>

      {/* <img
        src="/manwalking.gif"
        alt="Human walking"
        className="absolute bottom-4 left-4 w-16 h-16 object-contain animate-walk"
      /> */}
    </div>
  );
}
