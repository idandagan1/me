import { motion } from 'framer-motion'
import styles from './TimelineItem.module.css'

const companyLogos = {
  "Wix.com": "/logos/wix.svg",
  "Lusha": "/logos/lusha.svg",
  "Israel Defense Forces (IDF)": "/logos/idf.svg",
  "Perion Network": "/logos/perion.svg"
}

const companyFallbackIcons = {
  "Wix.com": "🎨",
  "Lusha": "🔍",
  "Israel Defense Forces (IDF)": "🛡️",
  "Perion Network": "🌐"
}

const TimelineItem = ({ item, index, isLeft }) => {
  const logoSrc = companyLogos[item.company]
  const fallbackIcon = companyFallbackIcons[item.company] || "💼"
  
  return (
    <motion.div
      className={`${styles.item} ${isLeft ? styles.left : styles.right}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={styles.dot}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      />
      
      <motion.div
        className={styles.card}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.header}>
          {logoSrc ? (
            <div className={styles.logoContainer}>
              <img 
                src={logoSrc} 
                alt={`${item.company} logo`} 
                className={styles.logo}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <span className={styles.iconFallback} style={{ display: 'none' }}>{fallbackIcon}</span>
            </div>
          ) : (
            <span className={styles.icon}>{fallbackIcon}</span>
          )}
          <h3 className={styles.role}>{item.role}</h3>
        </div>
        
        <div className={styles.period}>{item.period}</div>
        
        <p className={styles.description}>{item.description}</p>
        
        <div className={styles.technologies}>
          {item.technologies.map(tech => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TimelineItem

