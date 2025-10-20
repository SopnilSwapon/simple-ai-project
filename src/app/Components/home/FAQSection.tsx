"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AppButton from "../common/AppButton";
import { motion } from "framer-motion";

const accordionData = [
  {
    id: "item-1",
    title: "How does SIMPLE AI enhance blockchain security?",
    content: [
      "SIMPLE AI uses advanced AI algorithms to scan smart contracts, detect vulnerabilities, prevent exploits before they happen.",
    ],
  },
  {
    id: "item-2",
    title: "Can I integrate it into my existing dApp?",
    content: [
      "SIMPLE AI uses advanced AI algorithms to scan smart contracts, detect vulnerabilities, prevent exploits before they happen.",
    ],
  },
  {
    id: "item-3",
    title: "Do I need coding experience to use SIMPLE AI?",
    content: [
      "SIMPLE AI uses advanced AI algorithms to scan smart contracts, detect vulnerabilities, prevent exploits before they happen.",
    ],
  },
  {
    id: "item-4",
    title: "What kind of insights does SIMPLE AI provide?",
    content: [
      "SIMPLE AI uses advanced AI algorithms to scan smart contracts, detect vulnerabilities, prevent exploits before they happen.",
    ],
  },
  {
    id: "item-5",
    title: "What kind of insights does SIMPLE AI provide?",
    content: [
      "SIMPLE AI uses advanced AI algorithms to scan smart contracts, detect vulnerabilities, prevent exploits before they happen.",
    ],
  },
];

export default function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto mt-8 md:mt-[50px]">
      <AppButton
        title="FAQ"
        className="w-26 border mb-4 py-2! border-[#2A7183]! mx-auto text-sm! rounded-[60px] bg-[#4CCEEE1A]"
      />
      <h1
        className={`font-[700] text-2xl md:text-[48px] my-3 md:my-4 flex justify-center gap-2 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
      >
        <span className="text-white!">Get Answers to</span>Your Questions
      </h1>
      <p className="text-white/70 flex justify-center mb-8 md:mb-12">
        Everything you need to know about SIMPLE AI
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        defaultValue="item-1"
      >
        {accordionData.map(({ id, title, content }) => (
          <motion.div
            key={id}
            initial={{ height: 100, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <AccordionItem
              value={id}
              className="border border-white/10 rounded-2xl shadow-sm bg-gradient-to-r from-[#121e2a] via-[#121e2a] to-[#091017] transition-all duration-300 hover:shadow-lg hover:shadow-[#121e2a]/30 overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 text-xl md:text-2xl font-bold font-[Sofia_Sans] text-[#4cceee]">
                {title}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 flex flex-col gap-3 text-sm text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
