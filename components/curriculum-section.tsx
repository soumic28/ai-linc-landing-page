"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Code, Brain, Database, Bot, LineChart } from "lucide-react"

export function CurriculumSection() {
  const [activeModule, setActiveModule] = useState(0)

  const modules = [
    {
      title: "AI Fundamentals",
      icon: Brain,
      description: "Understand the core concepts and capabilities of modern AI systems",
      topics: [
        "Introduction to AI and Machine Learning",
        "Neural Networks and Deep Learning",
        "Natural Language Processing",
        "Computer Vision Basics",
      ],
    },
    {
      title: "Prompt Engineering",
      icon: Code,
      description: "Master the art of crafting effective prompts for AI systems",
      topics: [
        "Prompt Design Principles",
        "Context and Instruction Optimization",
        "Few-shot and Zero-shot Learning",
        "Prompt Chaining and Workflows",
      ],
    },
    {
      title: "AI Tools & Applications",
      icon: Bot,
      description: "Learn to use and integrate popular AI tools into workflows",
      topics: [
        "GPT Models and Applications",
        "Image Generation with DALL-E and Midjourney",
        "Voice and Audio AI Tools",
        "AI Agents and Automation",
      ],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      description: "Work with data to enhance AI outputs and measure results",
      topics: [
        "Data Preparation for AI",
        "Structured Data Analysis",
        "Unstructured Data Processing",
        "Performance Metrics and Evaluation",
      ],
    },
    {
      title: "Business Applications",
      icon: LineChart,
      description: "Apply AI to solve real business problems and create value",
      topics: [
        "AI Strategy and Implementation",
        "ROI Measurement and Optimization",
        "Ethical Considerations and Governance",
        "Future Trends and Emerging Technologies",
      ],
    },
  ]

  return (
    <section id="curriculum" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Curriculum Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to build practical AI skills that are immediately applicable in the
            workplace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl overflow-hidden">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setActiveModule(index)}
                    className={`w-full text-left p-4 flex items-center border-b border-[#0BC5EA]/10 transition-all duration-300 ${
                      activeModule === index
                        ? "bg-gradient-to-r from-[#0A1128] to-[#1A202C] text-white"
                        : "text-gray-300 hover:bg-[#0A1128]/50"
                    }`}
                  >
                    <div
                      className={`size-10 rounded-full flex items-center justify-center mr-3 ${
                        activeModule === index ? "bg-[#0BC5EA]/20 text-[#0BC5EA]" : "bg-[#0A1128]/50 text-gray-400"
                      }`}
                    >
                      {React.createElement(module.icon, { className: "size-5" })}
                    </div>
                    <span className="font-medium">{module.title}</span>
                    <ChevronDown
                      className={`ml-auto size-5 transition-transform duration-300 ${
                        activeModule === index ? "rotate-180 text-[#0BC5EA]" : ""
                      }`}
                    />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-4">
                  {React.createElement(modules[activeModule].icon, { className: "size-6 text-[#0BC5EA]" })}
                </div>
                <h3 className="text-2xl font-bold text-white">{modules[activeModule].title}</h3>
              </div>
              <p className="text-gray-300 mb-8">{modules[activeModule].description}</p>
              <h4 className="text-lg font-semibold mb-4 text-[#0BC5EA]">What You'll Learn</h4>
              <ul className="space-y-3">
                {modules[activeModule].topics.map((topic, index) => (
                  <li key={index} className="flex items-start text-gray-300 bg-[#0A1128]/50 p-3 rounded-lg">
                    <div className="size-5 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="size-2 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
