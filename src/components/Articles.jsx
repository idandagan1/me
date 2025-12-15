import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '../data/resume'
import styles from './Articles.module.css'

const Articles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="articles" className={styles.articles} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Writing & Talks
        </motion.h2>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Articles and talks sharing insights on engineering, databases, and AI
        </motion.p>
        
        <div className={styles.grid}>
          {content.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${item.type === 'talk' ? styles.talkCard : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
            >
              {item.thumbnail && (
                <div className={styles.thumbnailContainer}>
                  <img src={item.thumbnail} alt={item.title} className={styles.thumbnail} />
                  <div className={styles.playOverlay}>
                    <svg viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              )}
              
              <div className={styles.cardHeader}>
                <span className={styles.publication}>
                  {item.type === 'talk' ? '🎤 ' : '📝 '}{item.publication}
                </span>
                <span className={styles.date}>{item.date}</span>
              </div>
              
              <h3 className={styles.title}>{item.title}</h3>
              
              <p className={styles.description}>{item.description}</p>
              
              <div className={styles.tags}>
                {item.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <div className={styles.readMore}>
                {item.type === 'talk' ? 'Watch Talk' : 'Read Article'}
                <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {item.type === 'talk' ? (
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  ) : (
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  )}
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles

