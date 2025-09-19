'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  Calculator, 
  Share2, 
  Eye, 
  Gamepad2, 
  Trophy, 
  Smartphone, 
  Star,
  Download,
  PlayCircle,
  Users,
  Zap,
  Lock,
  Gift,
  Sparkles,
  Rocket,
  Crown,
  Flame,
  Diamond,
  Target
} from 'lucide-react'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  // Floating hearts animation data
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 8
  }))

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <Heart 
              className="text-pink-500/20 floating-hearts" 
              size={element.size}
            />
          </motion.div>
        ))}
      </div>

      {/* Mouse Cursor Effect */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect rainbow-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-8 h-8 text-pink-500 neon-text" />
              </motion.div>
              <span className="text-2xl font-bold text-gradient neon-text">True Hearts</span>
              <Sparkles className="w-6 h-6 text-yellow-400 bounce-crazy" />
            </motion.div>
            <motion.a 
              href="/true-hearts-app.apk"
              download="True-Hearts-App.apk"
              className="btn-primary bounce-crazy inline-flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
              <Rocket className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-red-900/30 animate-gradient" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl rainbow-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl rainbow-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-500/20 rounded-full blur-2xl rainbow-pulse delay-500" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px #ff0080", 
                  "0 0 40px #00ff80", 
                  "0 0 60px #8000ff",
                  "0 0 20px #ff0080"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span 
                className="text-gradient neon-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                True Hearts
              </motion.span>
              <motion.div className="flex justify-center items-center gap-4 mt-4">
                <Crown className="w-12 h-12 text-yellow-400 bounce-crazy" />
                <Diamond className="w-10 h-10 text-cyan-400 bounce-crazy" />
                <Flame className="w-12 h-12 text-red-400 bounce-crazy" />
              </motion.div>
              <span className="text-3xl md:text-5xl text-gradient block mt-4">Made for Real Kings</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
              animate={{ 
                color: ["#ffffff", "#ff69b4", "#00ffff", "#ffff00", "#ffffff"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              The ultimate app that combines <motion.span className="text-pink-400 font-bold" whileHover={{ scale: 1.2 }}>love calculations</motion.span>, 
              <motion.span className="text-cyan-400 font-bold" whileHover={{ scale: 1.2 }}> secure file sharing</motion.span>, 
              <motion.span className="text-purple-400 font-bold" whileHover={{ scale: 1.2 }}> epic games</motion.span>, and 
              <motion.span className="text-yellow-400 font-bold" whileHover={{ scale: 1.2 }}> lottery jackpots</motion.span> - all in one explosive experience!
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.a 
                href="/true-hearts-app.apk"
                download="True-Hearts-App.apk"
                className="btn-primary text-lg px-12 py-4 rainbow-pulse inline-flex items-center"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, 5, -5, 0],
                  boxShadow: "0 25px 50px rgba(255, 0, 128, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Download className="w-6 h-6 mr-3" />
                Download True Hearts
                <Target className="w-6 h-6 ml-3" />
              </motion.a>
              
              <motion.button 
                className="btn-secondary text-lg px-12 py-4 rainbow-pulse"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <PlayCircle className="w-6 h-6 mr-3" />
                Watch Demo
                <Sparkles className="w-6 h-6 ml-3" />
              </motion.button>
            </div>

            <motion.div 
              className="flex justify-center items-center space-x-8 text-white"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div 
                className="flex items-center glass-effect px-4 py-2 rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Users className="w-5 h-5 mr-2 text-pink-400" />
                <span className="font-bold">50K+ Kings</span>
              </motion.div>
              <motion.div 
                className="flex items-center glass-effect px-4 py-2 rounded-full"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="font-bold">4.9 Rating</span>
              </motion.div>
              <motion.div 
                className="flex items-center glass-effect px-4 py-2 rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="font-bold">Lightning Fast</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Phone Mockup */}
        <motion.div 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-black rounded-3xl p-2 shadow-2xl rainbow-pulse">
            <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-20 h-20 text-white" />
              </motion.div>
              <div className="absolute top-4 right-4">
                <Sparkles className="w-6 h-6 text-yellow-300 bounce-crazy" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Diamond className="w-8 h-8 text-cyan-300 bounce-crazy" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Everything You Need</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              True Hearts isn't just another app. It's your digital companion with powerful tools designed for modern men.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Love Calculator */}
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-red-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Love Perfection Calculator</h3>
              <p className="text-gray-300 mb-4">
                Calculate compatibility with anyone. Advanced algorithms analyze names, dates, and compatibility factors to give you the perfect match score.
              </p>
              <div className="flex items-center text-primary-400">
                <Calculator className="w-4 h-4 mr-2" />
                <span className="text-sm">Advanced Algorithms</span>
              </div>
            </motion.div>

            {/* File Sharing */}
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Secure File Sharing</h3>
              <p className="text-gray-300 mb-4">
                Share files instantly with military-grade encryption. Perfect for sharing memories, documents, and private content safely.
              </p>
              <div className="flex items-center text-primary-400">
                <Lock className="w-4 h-4 mr-2" />
                <span className="text-sm">End-to-End Encrypted</span>
              </div>
            </motion.div>

            {/* Hiding Modules */}
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Privacy Vault</h3>
              <p className="text-gray-300 mb-4">
                Hide your private photos, videos, and files behind unbreakable security. Your secrets are safe with biometric locks.
              </p>
              <div className="flex items-center text-primary-400">
                <Lock className="w-4 h-4 mr-2" />
                <span className="text-sm">Biometric Security</span>
              </div>
            </motion.div>

            {/* Games */}
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Epic Games</h3>
              <p className="text-gray-300 mb-4">
                Challenge yourself with addictive games. From puzzle games to action-packed adventures, entertainment is always at your fingertips.
              </p>
              <div className="flex items-center text-primary-400">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm">Instant Play</span>
              </div>
            </motion.div>

            {/* Lottery */}
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Lucky Lottery</h3>
              <p className="text-gray-300 mb-4">
                Test your luck with daily lottery draws. Win exciting prizes, rewards, and unlock premium features by trying your fortune.
              </p>
              <div className="flex items-center text-primary-400">
                <Gift className="w-4 h-4 mr-2" />
                <span className="text-sm">Daily Rewards</span>
              </div>
            </motion.div>

            {/* Calculator */}
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Smart Calculator</h3>
              <p className="text-gray-300 mb-4">
                More than just numbers. Scientific calculator with advanced functions, unit conversions, and smart calculations for daily use.
              </p>
              <div className="flex items-center text-primary-400">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm">Advanced Functions</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-pink-900/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Ready to Experience</span>
              <br />
              <span className="text-white">True Hearts?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of men who've already discovered the perfect app. Download now and unlock all premium features.
            </p>
            
            <motion.a 
              href="/true-hearts-app.apk"
              download="True-Hearts-App.apk"
              className="btn-primary text-xl px-16 py-5 mb-8 inline-flex items-center"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(236, 72, 153, 0.4)",
                background: "linear-gradient(135deg, #ec4899, #db2777, #be185d)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6 mr-3" />
              Download True Hearts Now
            </motion.a>

            <p className="text-gray-400">
              Free download • No registration required • Instant access
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="w-6 h-6 text-primary-500" />
              <span className="text-xl font-bold text-gradient">True Hearts</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 True Hearts. Made with ❤️ for modern men.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
