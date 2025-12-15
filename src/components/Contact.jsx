import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data/resume'
import styles from './Contact.module.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer id="contact" className={styles.contact} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            I'm always interested in hearing about new opportunities, 
            collaborations, or just having a chat about technology.
          </p>
          
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className={styles.emailBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
          
          <div className={styles.socialLinks}>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              whileHover={{ y: -3 }}
              title="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </motion.a>
            
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ y: -3 }}
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </motion.a>
            
            <motion.a
              href={`tel:${personalInfo.phone}`}
              className={styles.socialLink}
              whileHover={{ y: -3 }}
              title="Phone"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Contact

