import { motion } from 'framer-motion'
import { personalInfo } from '../data/resume'
import styles from './Hero.module.css'

const FloatingShape = ({ delay, duration, size, top, left, color }) => (
  <motion.div
    className={styles.shape}
    style={{
      width: size,
      height: size,
      top,
      left,
      background: color,
    }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

const Hero = () => {
  const roles = ["Engineering Manager", "Tech Lead", "AI Enthusiast", "Community Builder"]
  
  return (
    <section className={styles.hero}>
      <div className={styles.shapes}>
        <FloatingShape delay={0} duration={6} size="80px" top="10%" left="10%" color="rgba(13, 148, 136, 0.1)" />
        <FloatingShape delay={1} duration={8} size="120px" top="60%" left="5%" color="rgba(249, 115, 22, 0.08)" />
        <FloatingShape delay={0.5} duration={7} size="60px" top="20%" left="80%" color="rgba(13, 148, 136, 0.12)" />
        <FloatingShape delay={2} duration={9} size="100px" top="70%" left="85%" color="rgba(249, 115, 22, 0.1)" />
        <FloatingShape delay={1.5} duration={10} size="40px" top="40%" left="90%" color="rgba(13, 148, 136, 0.15)" />
        <FloatingShape delay={0.8} duration={7} size="70px" top="80%" left="50%" color="rgba(249, 115, 22, 0.06)" />
      </div>
      
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.greeting}
        >
          Hello, I'm
        </motion.div>
        
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.div
          className={styles.roleContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className={styles.rolePrefix}>I'm an </span>
          <motion.span
            className={styles.role}
            key={roles[0]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {personalInfo.title}
          </motion.span>
        </motion.div>
        
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#about" className={styles.primaryBtn}>
            Learn More
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get in Touch
          </a>
        </motion.div>
        
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.6 },
            y: { delay: 1.2, duration: 1.5, repeat: Infinity }
          }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

