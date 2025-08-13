// TODO: THIS IS THE LANDING PAGE THAT THE USER WILL ALWAYS FIRST SEE. make sure to update this page
// Make sure that the marketing text always reflects the app marketing. create an aesthetic properly-designed landing page that fits the theme of the app
// start completely from scratch to make this landing page using aesthetic design principles and tailwind styling to create a unique and thematic landing page.

import { motion } from "framer-motion";
import { CloudRain, Heart, Moon, Droplets } from "lucide-react";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-gray-300"
    >
      {/* Rain effect background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-20 bg-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
            animate={{
              y: [0, 1000],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-8"
        >
          <CloudRain className="h-24 w-24 mx-auto mb-6 text-blue-400/60 animate-pulse" />
          <h1 className="text-6xl font-bold text-gray-200 mb-4 tracking-tight">
            Task List
            <span className="text-blue-400/80">osaurus</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Where tasks go to die... slowly, one by one, in the endless void of productivity
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mb-12"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <Moon className="h-12 w-12 mx-auto mb-4 text-blue-400/60" />
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Endless Nights</h3>
            <p className="text-gray-400 text-sm">Tasks that never sleep, haunting your dreams with their incomplete status</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <Heart className="h-12 w-12 mx-auto mb-4 text-red-400/60" />
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Broken Promises</h3>
            <p className="text-gray-400 text-sm">Every unchecked box is a promise to yourself that you couldn't keep</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <Droplets className="h-12 w-12 mx-auto mb-4 text-blue-400/60" />
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Tears of Guilt</h3>
            <p className="text-gray-400 text-sm">The weight of unfinished business crushing your soul, one task at a time</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-center"
        >
          <p className="text-lg text-gray-500 italic mb-6">
            "In the depths of procrastination, we find our true selves..."
          </p>
          <button className="bg-slate-700 hover:bg-slate-600 text-gray-300 px-8 py-3 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            Begin Your Descent
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
