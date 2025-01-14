'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"


const faqData = [
  {
    id: 1,
    question: "Who can become a member?",
    answer: "The clubs is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.",
    position: 'left'
  },
  {
    id: 2,
    question: "How frequently do events and workshops occur?",
    answer: "We have a hands-on session every Tuesday at SG25 from 1800hrs to 2030hrs. We also hold workshops and showcases & we would recommend you to join our community to get updates.",
    position: 'center-left'
  },
  {
    id: 3,
    question: "What should I carry when attending a workshop?",
    answer: "We recommend you carry with you a notebook, pen and a laptop because more often than not we make our hands dirty with code. Most importantly, carry along a healthy dose of curiosity and enthusiasm.",
    position: 'center-right'
  },
  {
    id: 4,
    question: "Who should I reach out to if I have any questions?",
    answer: "If you have any questions or comments, please don't hesitate to contact us by clicking the button below. We would be happy to stay engaged via email even after the event",
    position: 'right'
  }
]

export default function FAQSection() {
  return (
    <div className="min-h-screen bg-[#e6f7f1] p-8 relative">
      <motion.h1 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {faqData.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Card className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              {/* Animated Figure */}
              <motion.div
                className="absolute -top-12 right-4"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* You can replace this with actual illustrations */}
                    <div className="w-12 h-12 bg-primary-foreground rounded-full" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h2
                className="text-xl font-semibold mb-3 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {faq.question}
              </motion.h2>

              <motion.p
                className="text-muted-foreground"
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
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send us an email
        </motion.button>
      </motion.div>

      {/* Human GIF Animation */}
      <img
        src="/human.gif"
        alt="Human walking"
        className="absolute bottom-0 left-0 w-20 h-20 object-contain animate-walk"
      />
    </div>
  )
}

