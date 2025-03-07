import ExperienceItem from "../components/experienceItem"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

  const infiniteRealityJob = {
    title: "Senior Product Designer",
    dateRange: "Infinite Reality / 2024—",
    description: ["UX design + design engineering lead for iR Studio, a web-based 3D scene editor and publishing platform.",
                  "iR Studio Editor: Led the redesign of the editor software's file and asset management interface to improve the search experience for a growing library of ready-made content. Developed prototypes for 3D viewport navigation, selection modes and object manipulation, with research participation from technical art and content teams. Created a one-step interaction for publishing scenes to a public URL, improving successful publish rates for users in beta testing.",
                  "Design System: Audited and reorganized the product and web platform design system to reduce redundancies, plan for future expansion and improve editing workflow performance. Created components and style guides for quickly assembling complex tool and property sheets. Edited UX copy throughout the product to simplify technical terminology and add clarity to editor behaviors."]
  }

  return (
    <>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Experience</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>Steve is a creative leader and pioneer in experience and interaction design for 3D and spatial interfaces, specializing in prototyping and experimentation with emerging technologies. Skilled at simplifying complex technical concepts, in internal and external presentations, as well as visual and written communication.</p>
    </header>
    <main className="experience fullPageContentSection">
      <ExperienceItem />
    </main>
    </>
  )

}