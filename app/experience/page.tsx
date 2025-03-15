import { ExperienceData } from "../types"
import EducationItems from "../components/educationItem"
import ExperienceItem from "../components/experienceItem"
import Footer from "../components/footer"
import SkillsSection from "../components/skillsSection"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

  const irJob: ExperienceData = {
    dateRange: "2024—\nPresent",
    title: "Senior Product Designer",
    company: "Infinite Reality",
    headline: "UX design + design engineering lead for iR Studio, a web-based 3D scene editor and publishing platform.",
    projects: [
      {
        title: "iR Studio Editor",
        description: "Led the redesign of the editor software's file and asset management interface to improve the search experience for a growing library of ready-made content.",
      },
      {
        title: "Design System",
        description: "Audited and reorganized the product and web platform design system to reduce redundancies and improve workflow performance.",
      },
    ],
    companyLogo: "/ir-logo.svg",
  }

  const ustwoJob: ExperienceData = {
    dateRange: "2022—\n2024",
    title: "Senior 3D Generalist",
    company: "ustwo studios",
    headline: "Work with the design and engineering teams to apply emerging technologies to studio projects.",
    projects: [
      {
        title: "Generative AI Visual Prompt Builder",
        description: "Led technical implementation of a utility for adjusting LLM prompts with a visual interface. Designed information architecture, wrote front-end interface, and managed deployment.",
      },
      {
        title: "Immersive Cycling Game",
        description: "UX design and prototyping for a Peloton Bike-based game. Led interaction design for tablet and gamepad controls, developed pipeline for making VFX and virtual production assets game-ready, implemented level design. Improved performance using Metal debugger and Unity profiler.",
      },
      {
        title: "AR Wearable Developer Tools",
        description: "Led interaction design and 3D art production for an interactive HMI toolkit packaged with Qualcomm’s platform SDK. Designed animatics and storyboards; wrote WebXR and Unity prototypes; produced real-time 3D assets for AR. Optimized performance using Unity rendering debugger.",
      },
      {
        title: "Conference Lead Engagement",
        description: "Led UX design and technical implementation of a multi-device interactive feature for a conference exhibit. Designed, modeled, and animated 3D characters. Wrote front-end web apps for guest use using three.js, and an ambient visualization app with Unreal Engine.",
      },
      {
        title: "VR Security Training Simulator",
        description: "Developed technical art pipeline for scanning an MGM Resorts property using photogrammetry and adapting it into a 1:1 VR space in Unity. Optimized geometry and surfaces, developed interactions for navigation, and animated MetaHumans with Omniverse AI tools for cinematics.",
      }
    ],
    companyLogo: "/ustwo.svg",
  }

  const smcJob: ExperienceData = {
    dateRange: "2016—\n2023",
    title: "Designer + Creative Technologist",
    company: "Steven M. Caruso Design Studio",
    headline: "Work with clients both independently and integrated into design teams to create digital products, exhibits, and immersive experiences.",
    projects: [
      {
        title: "Virtual Awards Gallery",
        description: "Designed and developed an awards presentation and archive for the Project Management Institute. Planned gallery layout and 3D environment navigation. Wrote web front-end using three.js. Created content editor for client use and trained their team on deployment actions using GitHub.",
      },
      {
        title: "Interactive ARcade",
        description: "Concept art, animations, and optimized game assets for an award-winning promotional series of Pizza Hut boxes printed with Pac-Man image targets for an 8thWall mobile AR game.",
      },
      {
        title: "3D Keynote Stage",
        description: "Visual design and 3D art production of a virtual production set for Google’s Developer Day keynote. Designed set in partnership with the show producer to accommodate presentation content. Created 3D assets and surfaces using Unreal Engine, and rendered frames to match studio camera tracks.",
      },
      {
        title: "Developer Conference Exhibits",
        description: "Led exhibit design for “sandbox” product experiences at Google I/O. Planned exhibits around content and produced concept renderings for internal discussion and iteration. Drafted technical documentation for custom-fabricated exhibit structures.",
      },
      {
        title: "VR Security Training Simulator",
        description: "Developed technical art pipeline for scanning an MGM Resorts property using photogrammetry and adapting it into a 1:1 VR space in Unity. Optimized geometry and surfaces, developed interactions for navigation, and animated MetaHumans with Omniverse AI tools for cinematics.",
      }
    ],
    companyLogo: "/smc.svg",
  }

  const mkgJob: ExperienceData = {
    dateRange: "2013—\n2016",
    title: "Associate Senior Designer",
    company: "MKG",
    headline: "Scenic and graphic design lead for events and brand experiences.",
    projects: [
      {
        title: "VR Tennis Simulator",
        description: "Led UX design and art direction for an immersive referee simulation using the Oculus Rift DK2, part of a sponsorship activation for JPMorganChase at the US Open. Created interface animatics, concept art, and character designs implemented by developers. Designed on-site environmental graphics and custom set pieces to contain VR computer equipment and operator terminals. ",
      },
      {
        title: "Interactive Music Venue Game",
        description: "Creative lead for a digital interactive sponsorship activation at the Chase Forum. Designed and drafted documentation for structural modifications to a Sprinter van, graphic wraps, and supporting environmental graphics. Partnered with contracted developers to fit the digital interaction.",
      }
    ],
    companyLogo: "/mkg.png",
  }

  return (
    <>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Experience</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>Steve is a creative leader and pioneer in experience and interaction design for 3D and spatial interfaces, specializing in prototyping and experimentation with emerging technologies. Skilled at simplifying complex technical concepts, in internal and external presentations, as well as visual and written communication.</p>
    </header>
    <SkillsSection />
    <main className="experience fullPageContentSection">
      <ExperienceItem data={irJob} />
      <ExperienceItem data={ustwoJob} />
      <ExperienceItem data={smcJob} />
      <ExperienceItem data={mkgJob} />
      <EducationItems />
    </main>
    <Footer />
    </>
  )

}