import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { summary, personalInfo } from '../data/resume'
import styles from './About.module.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "5", label: "Companies" },
    { number: "3", label: "Leadership Roles" },
    { number: "∞", label: "Lines of Code" }
  ]

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className={styles.content}>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/logos/profile.jpeg" 
                alt="Idan Dagan" 
                className={styles.profileImage}
              />
            </div>
            <div className={styles.decorCircle} />
          </motion.div>
          
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className={styles.summary}>{summary}</p>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className={styles.detailItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
              <div className={styles.detailItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className={styles.aiWorkflow}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={styles.aiHeader}>
            <span className={styles.aiIcon}>⚡</span>
            <h3 className={styles.aiTitle}>AI-Powered Workflow</h3>
          </div>
          <p className={styles.aiDescription}>
            I leverage AI tools daily to supercharge my development velocity and ship faster:
          </p>
          <div className={styles.aiTools}>
            <div className={styles.aiTool}>
              <span className={styles.toolIcon}>🖥️</span>
              <div className={styles.toolInfo}>
                <span className={styles.toolName}>Cursor</span>
                <span className={styles.toolDesc}>AI-assisted IDE for faster coding</span>
              </div>
            </div>
            <div className={styles.aiTool}>
              <span className={styles.toolIcon}>🔀</span>
              <div className={styles.toolInfo}>
                <span className={styles.toolName}>MCP Git Workflow</span>
                <span className={styles.toolDesc}>AI-enhanced PR reviews & commits</span>
              </div>
            </div>
            <div className={styles.aiTool}>
              <span className={styles.toolIcon}>🌐</span>
              <div className={styles.toolInfo}>
                <span className={styles.toolName}>Atlas</span>
                <span className={styles.toolDesc}>AI web browsing & research</span>
              </div>
            </div>
            <div className={styles.aiTool}>
              <span className={styles.toolIcon}>🤖</span>
              <div className={styles.toolInfo}>
                <span className={styles.toolName}>LLM APIs</span>
                <span className={styles.toolDesc}>Prototyping & automation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

