"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Clock, Brain, Sparkles, BarChart, LineChart, Target, Gauge } from "lucide-react"

export function AiLearningAcceleration() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Learn 100X Faster with AI
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Our AI-powered platform accelerates your learning journey through personalized pathways and adaptive content
          </p>
        </motion.div>

        {/* Main comparison cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 h-full overflow-hidden relative">
              <div className="absolute top-0 right-0 size-64 bg-gradient-to-bl from-[#6B46C1]/10 to-transparent rounded-bl-full"></div>

              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="size-12 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-4">
                    <Clock className="size-6 text-[#6B46C1]" />
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30 mb-1">
                      Traditional Learning
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">12+ Months</h3>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-background/30 rounded-lg p-4 flex items-start">
                    <div className="size-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Clock className="size-4 text-[#6B46C1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Time-Consuming</h4>
                      <p className="text-foreground/70 text-sm">
                        Average 1,000+ hours to master professional AI skills
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-4 flex items-start">
                    <div className="size-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <LineChart className="size-4 text-[#6B46C1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Linear Progression</h4>
                      <p className="text-foreground/70 text-sm">One-size-fits-all curriculum with fixed pacing</p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-4 flex items-start">
                    <div className="size-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Target className="size-4 text-[#6B46C1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Limited Feedback</h4>
                      <p className="text-foreground/70 text-sm">Delayed assessment and generic guidance</p>
                    </div>
                  </div>
                </div>

                {/* Learning Speed Visualization */}
                <div className="relative h-16 bg-background/20 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <motion.div
                      className="h-0 w-full bg-gradient-to-t from-[#6B46C1]/50 to-[#6B46C1]/10"
                      animate={{ height: "60%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-foreground/60">
                    12 Months Average
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI-Powered Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 h-full overflow-hidden relative">
              <div className="absolute top-0 left-0 size-64 bg-gradient-to-br from-[#0BC5EA]/10 to-transparent rounded-br-full"></div>

              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-4">
                    <Zap className="size-6 text-[#0BC5EA]" />
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 mb-1">
                      AI-Powered Learning
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">Just 111 Days</h3>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-background/30 rounded-lg p-4 flex items-start">
                    <div className="size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Zap className="size-4 text-[#0BC5EA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Ultra-Efficient</h4>
                      <p className="text-foreground/70 text-sm">Master professional AI skills in just 111 days</p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-4 flex items-start">
                    <div className="size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Brain className="size-4 text-[#0BC5EA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Adaptive Learning</h4>
                      <p className="text-foreground/70 text-sm">Personalized curriculum that adapts to your progress</p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-4 flex items-start">
                    <div className="size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Sparkles className="size-4 text-[#0BC5EA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Real-time Feedback</h4>
                      <p className="text-foreground/70 text-sm">Instant assessment and personalized guidance</p>
                    </div>
                  </div>
                </div>

                {/* Learning Speed Visualization */}
                <div className="relative h-16 bg-background/20 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <motion.div
                      className="h-0 w-full bg-gradient-to-t from-[#0BC5EA]/50 to-[#0BC5EA]/10"
                      animate={{ height: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-foreground/60">
                    111 Days with AI LINC
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 100X Acceleration Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
          }}
          className="mb-16"
        >
          <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">The 100X Acceleration Factor</h3>
                  <p className="text-foreground/70 max-w-2xl">
                    Our AI-powered platform combines multiple acceleration factors to dramatically speed up your
                    learning
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-background/30 rounded-lg p-4 text-center">
                  <div className="size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mx-auto mb-3">
                    <Target className="size-6 text-[#0BC5EA]" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-1">
                    10X
                  </div>
                  <div className="text-sm font-medium text-white mb-1">Personalization</div>
                  <div className="text-xs text-foreground/60">Content tailored to your learning style</div>
                </div>

                <div className="bg-background/30 rounded-lg p-4 text-center">
                  <div className="size-12 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mx-auto mb-3">
                    <Gauge className="size-6 text-[#6B46C1]" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] bg-clip-text text-transparent mb-1">
                    5X
                  </div>
                  <div className="text-sm font-medium text-white mb-1">Efficiency</div>
                  <div className="text-xs text-foreground/60">Optimized learning paths</div>
                </div>

                <div className="bg-background/30 rounded-lg p-4 text-center">
                  <div className="size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="size-6 text-[#0BC5EA]" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-1">
                    4X
                  </div>
                  <div className="text-sm font-medium text-white mb-1">Retention</div>
                  <div className="text-xs text-foreground/60">Enhanced memory techniques</div>
                </div>

                <div className="bg-background/30 rounded-lg p-4 text-center">
                  <div className="size-12 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mx-auto mb-3">
                    <Brain className="size-6 text-[#6B46C1]" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] bg-clip-text text-transparent mb-1">
                    2.5X
                  </div>
                  <div className="text-sm font-medium text-white mb-1">Application</div>
                  <div className="text-xs text-foreground/60">Immediate practical use</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl p-6 max-w-md text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#0BC5EA] via-[#6B46C1] to-[#0BC5EA] bg-clip-text text-transparent mb-2">
                    100X Faster Learning
                  </div>
                  <div className="text-sm text-foreground/70 max-w-sm mx-auto">
                    Our AI-powered platform combines these acceleration factors to deliver results in a fraction of the
                    time
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Learning Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
            className="group"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 h-full group-hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mb-6 group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                  <Brain className="size-8 text-[#0BC5EA]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#0BC5EA] transition-colors duration-300">
                  Adaptive Learning Engine
                </h3>
                <p className="text-foreground/70">
                  Our AI continuously analyzes your learning patterns and adapts content to optimize your progress
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
            className="group"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 h-full group-hover:shadow-[0_0_30px_rgba(107,70,193,0.2)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="size-16 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mb-6 group-hover:bg-[#6B46C1]/20 transition-all duration-300">
                  <Sparkles className="size-8 text-[#6B46C1]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#6B46C1] transition-colors duration-300">
                  Real-time Feedback Loop
                </h3>
                <p className="text-foreground/70">
                  Receive instant, personalized feedback that accelerates your learning and skill development
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            }}
            className="group"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 h-full group-hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mb-6 group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                  <BarChart className="size-8 text-[#0BC5EA]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#0BC5EA] transition-colors duration-300">
                  Progress Analytics
                </h3>
                <p className="text-foreground/70">
                  Detailed insights into your learning journey with actionable recommendations for improvement
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
