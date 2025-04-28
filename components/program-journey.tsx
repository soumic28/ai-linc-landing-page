"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Briefcase, Award, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProgramJourney() {
  const [activeStep, setActiveStep] = useState(1)

  const journeySteps = [
    {
      id: 0,
      title: "Onboarding",
      icon: BookOpen,
      day: "Day 1-7",
      description: "Get familiar with the platform and prepare for your AI journey",
      metrics: { completion: "100%", skills: 3, projects: 0 },
    },
    {
      id: 1,
      title: "Foundations",
      icon: Code,
      day: "Day 8-28",
      description: "Master the fundamentals of AI and prompt engineering",
      metrics: { completion: "68%", skills: 12, projects: 2 },
    },
    {
      id: 2,
      title: "Work Experience",
      icon: Briefcase,
      day: "Day 29-98",
      description: "Apply your skills on real-world projects with mentorship",
      metrics: { completion: "35%", skills: 8, projects: 4 },
    },
    {
      id: 3,
      title: "Portfolio Building",
      icon: Award,
      day: "Day 99-111",
      description: "Finalize your portfolio and prepare for job placement",
      metrics: { completion: "0%", skills: 0, projects: 0 },
    },
    {
      id: 4,
      title: "Career Launch",
      icon: Rocket,
      day: "Post-Program",
      description: "Leverage your skills and portfolio for career advancement",
      metrics: { completion: "0%", skills: 0, projects: 0 },
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Your 111-Day Journey
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Follow your transformation from AI beginner to industry-ready professional
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative mb-16">
          {/* Timeline connector line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] transform -translate-y-1/2 opacity-30"></div>

          {/* Animated progress line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] transform -translate-y-1/2"
            initial={{ width: "0%" }}
            whileInView={{ width: `${Math.min((activeStep + 1) * 25, 100)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Timeline nodes */}
          <div className="grid grid-cols-5 relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                onClick={() => setActiveStep(step.id)}
              >
                <div className="mb-2 text-sm text-foreground/60">{step.day}</div>
                <div
                  className={cn(
                    "relative size-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-10",
                    step.id <= activeStep
                      ? "bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] shadow-[0_0_15px_rgba(11,197,234,0.5)]"
                      : "bg-card/50 border border-[#0BC5EA]/30",
                  )}
                >
                  <step.icon className={cn("size-6", step.id <= activeStep ? "text-white" : "text-foreground/60")} />

                  {/* Pulsing effect for active node */}
                  {step.id === activeStep && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] opacity-70"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                </div>
                <div className="mt-2 font-medium text-center">
                  <div
                    className={cn(
                      "transition-colors duration-300",
                      step.id <= activeStep ? "text-white" : "text-foreground/60",
                    )}
                  >
                    {step.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active step details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card/30 backdrop-blur-md border border-[#0BC5EA]/20 rounded-xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 size-64 bg-gradient-to-bl from-[#0BC5EA]/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 size-64 bg-gradient-to-tr from-[#6B46C1]/10 to-transparent rounded-tr-full"></div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div>
              <div className="flex items-center mb-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] flex items-center justify-center mr-4">
                  {React.createElement(journeySteps[activeStep].icon, { className: "size-6 text-white" })}
                </div>
                <div>
                  <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 mb-1">
                    {journeySteps[activeStep].day}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white">{journeySteps[activeStep].title}</h3>
                </div>
              </div>
              <p className="text-foreground/80 mb-6">{journeySteps[activeStep].description}</p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">What you'll accomplish:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-foreground/80 bg-background/50 p-3 rounded-lg">
                    <div className="size-5 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="size-2 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Master core AI concepts through hands-on projects
                  </li>
                  <li className="flex items-start text-foreground/80 bg-background/50 p-3 rounded-lg">
                    <div className="size-5 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="size-2 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Build practical skills with real-world applications
                  </li>
                  <li className="flex items-start text-foreground/80 bg-background/50 p-3 rounded-lg">
                    <div className="size-5 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="size-2 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Receive personalized feedback from industry experts
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              {/* Floating UI cards showing student progress metrics */}
              <motion.div
                className="absolute top-0 right-0 md:-right-4 w-48"
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/30 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="text-sm font-medium text-foreground/60 mb-1">Module Completion</div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {journeySteps[activeStep].metrics.completion}
                    </div>
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1]"
                        initial={{ width: "0%" }}
                        animate={{ width: journeySteps[activeStep].metrics.completion }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-0 md:-left-4 w-48"
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-[#6B46C1]/30 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="text-sm font-medium text-foreground/60 mb-1">Skills Acquired</div>
                    <div className="flex items-end">
                      <div className="text-2xl font-bold text-white">{journeySteps[activeStep].metrics.skills}</div>
                      <div className="text-foreground/60 ml-1 mb-1">/ 23</div>
                    </div>
                    <div className="grid grid-cols-5 gap-1 mt-2">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-2 rounded-full",
                            i < journeySteps[activeStep].metrics.skills
                              ? "bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1]"
                              : "bg-background/50",
                          )}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-1/4 w-48"
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/30 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="text-sm font-medium text-foreground/60 mb-1">Projects Completed</div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {journeySteps[activeStep].metrics.projects}
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "flex-1 h-8 rounded-md",
                            i < journeySteps[activeStep].metrics.projects
                              ? "bg-gradient-to-b from-[#0BC5EA]/30 to-[#6B46C1]/30 border border-[#0BC5EA]/50"
                              : "bg-background/30 border border-background/50",
                          )}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <motion.path
                  d="M100,50 C150,100 200,20 250,100"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.path
                  d="M250,100 C300,180 350,120 400,150"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0BC5EA" />
                    <stop offset="100%" stopColor="#6B46C1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
