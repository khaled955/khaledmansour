import { useState } from "react"
import Contacts from "./components/Contacts/Contacts"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import Section from "./components/Section/Section"
import Skills from "./components/Skills/Skills"
import { DATA } from "./data/Data"
import { useScrollSpy } from "./hooks/useScrollPay"
import TypingSplash from "./components/TypingSplash/TypingSplash"
import WhatsAppBadge from "./components/WhatsAppBadge/WhatsAppBadge"
import SocialLinks from "./components/Socials/SocialLinks/SocialLinks"
import Testimonials from "./components/Testimonials/Testimonials"



const showcaseImages: string[] = DATA.projects
  .map(p => p.image)                         // (string | undefined)[]
  .filter((src): src is string => !!src)     // → string[]
  .slice(0, 10);

function App(){
  const [splashDone, setSplashDone] = useState(false);

  const activeId = useScrollSpy(['home','about','skills','projects','contact'])





  return (
    <>
<a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-1.5 focus:rounded-lg focus:bg-amber-500 focus:text-white"
      >
        Skip to content
      </a>

   {!splashDone && (
      <TypingSplash
  text="Welcome to Khaled Mansour Portifolio"
  onDone={() => setSplashDone(true)}
  oncePerSession
  soundSrc="/public/sounds/keyboard-typing-fast-371229.mp3"   // <-- your file in /public/sounds
  soundVolume={0.35}
/>
      )}


{/* whats app badge */}
 <WhatsAppBadge
        phone="00966509784124"
        message="Hi Khaled! I came from your portfolio."
        variant="fab"
      />




      <main aria-hidden={!splashDone} id="main" className={`min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-amber-300/60 overflow-x-hidden`}>

        <Navbar activeId={activeId} />

        <Hero summary={DATA.summary} socials={DATA.socials}
          showcaseImages={showcaseImages}

        
        />




<Section id="socials" title="Connect">
  <SocialLinks socials={DATA.socials} />
</Section>
      
        <Section id="skills">
                    <Skills skills={DATA.skills} />
                    

        </Section>



        <Section id="projects" title="Projects">
          <Projects  />
        </Section>

    <Section id="testimonials" title="">
  <Testimonials />
</Section>



        <Section id="contact" title="">
          <Contacts  />
        </Section>
        <ScrollToTop/>

        <footer className="py-8 text-center text-sm text-neutral-500 border-t border-neutral-200 dark:border-neutral-800">
          © {new Date().getFullYear()} {DATA.name}. Built with React, Tailwind & Framer Motion.
        </footer>
      </main>





    </>
  )
}

export default App
