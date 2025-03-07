import Link from 'next/link'
import { Cormorant } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function ExperienceItem() {
    
    return (
        <section className="experienceItem">
          <div className="itemContent">
            <div className="leftColumn">
              <h3 className="dateRange">2024—<br />Present</h3>
            </div>
            <div className="innerContent">
              <h3 className="title">Senior Product Designer,</h3>
              <h4 className="company">Infinite Reality</h4>
              <p className={`${cormorant.className} headline`}>UX design + design engineering lead for iR Studio, a web-based 3D scene editor and publishing platform.</p>
              <div className="project">
                <h5 className="projectTitle">iR Studio Editor</h5>
                <p className="projectDescription">Led the redesign of the editor software&apos;s file and asset management interface to improve the search experience for a growing library of ready-made content. Developed prototypes for 3D viewport navigation, selection modes and object manipulation, with research participation from technical art and content teams. Created a one-step interaction for publishing scenes to a public URL, improving successful publish rates for users in beta testing.</p>
              </div>
              <div className="project">
                <h5 className="projectTitle">Design System</h5>
                <p className="projectDescription">Audited and reorganized the product and web platform design system to reduce redundancies, plan for future expansion and improve editing workflow performance. Created components and style guides for quickly assembling complex tool and property sheets. Edited UX copy throughout the product to simplify technical terminology and add clarity to editor behaviors.</p>
              </div>
            </div>
            <div className="rightColumn">
              <div className="companyLogo"></div>
            </div>
          </div>
        </section>
    )
    
}