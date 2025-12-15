import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data/resume'
import styles from './Education.module.css'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className={styles.education} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.iconWrapper}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.degree}>{education.degree}</h3>
            <p className={styles.field}>{education.field}</p>
            <p className={styles.school}>{education.school}</p>
            <span className={styles.period}>{education.period}</span>
          </div>
          
          <div className={styles.decorLine} />
        </motion.div>
      </div>
    </section>
  )
}

export default Education

