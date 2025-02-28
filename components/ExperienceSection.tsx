import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experience: Experience[]
}

function ExperienceSection({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

      <div className='w-full flex relative top-6 space-x-5 overflow-x-scroll p-10 snap-x snap-start snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* Experience Cards map */}
        {
          experience && experience?.map((item) => {
            return <ExperienceCard key={item._id} experience={item} />
          })
        }

      </div>

    </motion.div>
  )
}

export default ExperienceSection