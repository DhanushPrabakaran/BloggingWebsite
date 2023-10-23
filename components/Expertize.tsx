'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Expertize = () => {
  return (
    <div
    id='Expertize'
    className="hero min-h-screen bg-primary">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <div className="text-4xl font-bold from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Expertize</div>
      <motion.div
    
    
    initial={{scale: 0,}}
    whileInView={{scale: 1,}}
    transition={{duration: 1.2,}} className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</motion.div>
      
    </div>
  </div>
</div>
  )
}

export default Expertize