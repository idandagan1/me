import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Articles from './components/Articles'
import Education from './components/Education'
import Community from './components/Community'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Articles />
        <Education />
        <Community />
        <Contact />
      </main>
    </>
  )
}

export default App

