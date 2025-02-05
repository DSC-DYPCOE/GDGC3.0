"use client"

import { motion } from "framer-motion"
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Who can become a member?",
    answer:
      "The clubs is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.",
    color: "group-hover:text-red-400",
    gradient: "from-red-500/20 to-rose-500/20",
    delay: 0,
  },
  {
    question: "How frequently do events and workshops occur?",
    answer:
      "We have a hands-on session every Tuesday at SG25 from 1800hrs to 2030hrs. We also hold workshops and showcases & we would recommend you to join our community to get updates.",
    color: "group-hover:text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
    delay: 0.1,
  },
  {
    question: "What should I carry when attending a workshop?",
    answer:
      "We recommend you carry with you a notebook, pen and a laptop because more often than not we make our hands dirty with code. Most importantly, carry along a healthy dose of curiosity and enthusiasm.",
    color: "group-hover:text-emerald-400",
    gradient: "from-emerald-500/20 to-green-500/20",
    delay: 0.2,
  },
  {
    question: "Who should I reach out to if I have any questions?",
    answer:
      "If you have any questions or comments, please don't hesitate to contact us by clicking the button below. We would be happy to stay engaged via email even after the event",
    color: "group-hover:text-amber-400",
    gradient: "from-amber-500/20 to-yellow-500/20",
    delay: 0.3,
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen py-20 bg-black">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2a_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          maskImage: "radial-gradient(circle at center, transparent 0%, black 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, transparent 0%, black 100%)",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <span className="relative inline-block">
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
              />
             <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center gap-4">
  <HelpCircle className="w-12 h-12 text-white/50" />
  {/* Here's the enhanced text color styling for FAQ */}
  <span className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-x font-extrabold tracking-tight">
    FAQ
  </span>
</h2>
            </span>
          </div>
          <p className="text-gray-400 mt-4 text-lg">Everything you need to know about our community</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: faq.delay,
              }}
              className="group"
            >
              <motion.div
                className={`
                  relative overflow-hidden
                  border border-white/10
                  rounded-lg
                  transition-all duration-300
                  ${openIndex === index ? "bg-white/5" : "hover:bg-white/5"}
                `}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className={`text-xl font-medium transition-colors duration-300 text-white ${faq.color}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-white/70" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white/70" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : "0px",
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400">{faq.answer}</div>
                </motion.div>

                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-r ${faq.gradient}
                    transition-opacity duration-300 pointer-events-none
                  `}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button
            className="
            relative
            px-8 py-3
            text-white font-medium
            overflow-hidden
            rounded-lg
            transition-all
            duration-300
            hover:scale-105
            border border-white/20
            hover:border-white/40
            group
          "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Still have questions?</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

