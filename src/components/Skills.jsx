import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/resume'
import styles from './Skills.module.css'

const SkillBar = ({ skill, index, isInView }) => {
  return (
    <motion.div
      className={styles.skillItem}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.barContainer}>
        <motion.div
          className={styles.bar}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Split skills into two columns
  const halfLength = Math.ceil(skills.length / 2)
  const leftSkills = skills.slice(0, halfLength)
  const rightSkills = skills.slice(halfLength)

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className={styles.skillsGrid}>
          <div className={styles.skillsColumn}>
            {leftSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
          <div className={styles.skillsColumn}>
            {rightSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index + halfLength}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          className={styles.techCloud}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className={styles.cloudTitle}>Technologies I Work With</h3>
          <div className={styles.cloudTags}>
            {[
              "JavaScript", "TypeScript", "Node.js", "React", "Scala", 
              "Java", "MySQL", "PostgreSQL", "Kafka", "RabbitMQ",
              "Cassandra", "Couchbase", "AWS", "Docker", "Kubernetes",
              "LLMs", "OpenAI", "CI/CD", "Git"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className={styles.cloudTag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

