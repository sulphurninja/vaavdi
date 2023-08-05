"use client"; // This is a client component 👈🏽

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9  }}
                
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='text-center text-4xl md:text-5xl font-cool mt-4'> Vaavdi -&nbsp;
                <span className='font-bold text-[#4F200D]'>वावडी</span> </h1>
            </motion.div>
        </div>
    )
}
