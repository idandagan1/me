import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/resume'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.css'

const Timeline = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="experience" className={styles.timeline} ref={containerRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Career Journey
        </motion.h2>
        
        <div className={styles.timelineContainer}>
          <motion.div 
            className={styles.line}
            style={{ scaleY, transformOrigin: "top" }}
          />
          
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

