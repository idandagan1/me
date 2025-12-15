import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { community } from '../data/resume'
import styles from './Community.module.css'

const communityLogos = {
  "LangTalks": "https://langtalks.ai/_next/image?url=/_next/static/media/logo.1cb7f42c.png&w=128&q=75",
  "Node.js-IL": "/logos/meetup.svg",
  "Node TLV": "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/272301562_647144263292311_8496405684481572618_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEwgZ6L4D4nC25uGlToGxUQra1Yx9a2KV-trVjH1rYpXwK_UzqpEg9e2GWtsTRyVPQ&_nc_ohc=tdU5vPaEDskQ7kNvwHvNZ6k&_nc_oc=AdmzSFawYLU_Zyrz4-OmqRlhjsb-AvDkLxwUxRVYCVRvZuD7aVlLKCTAMMT-9lJTT7l3lfcjyEA0x1Sw4DjLFBPO&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=PBDm36XH5qZUrMNvUtt_8w&oh=00_AfkKflTOL9dpd-mfJzLoIWCI-QLp284Hta-EajxJ4aM5yA&oe=69462478"
}

const communityIcons = {
  "LangTalks": "🤖",
  "Node.js-IL": "💚",
  "Node TLV": "🎤"
}

const Community = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="community" className={styles.community} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Community Involvement
        </motion.h2>
        
        <div className={styles.grid}>
          {community.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              {communityLogos[item.title] ? (
                <div className={styles.logoContainer}>
                  <img 
                    src={communityLogos[item.title]} 
                    alt={`${item.title} logo`}
                    className={styles.logo}
                  />
                </div>
              ) : (
                <span className={styles.icon}>{communityIcons[item.title] || "🌟"}</span>
              )}
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Visit Website →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community

