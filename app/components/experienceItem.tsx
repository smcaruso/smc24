import Link from 'next/link'
import Image from 'next/image'

import { ExperienceData } from '../types'

import { Cormorant } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function ExperienceItem({ data }: { data: ExperienceData }) {
    
    return (
        <section className="experienceItem">
          <div className="itemContent">
            <div className="leftColumn">
              <h3 className="dateRange">{data.dateRange}</h3>
            </div>
            <div className="innerContent">
              <h3 className="title">{data.title},</h3>
              <h4 className="company">{data.company}</h4>
              <p className={`${cormorant.className} headline`}>{data.headline}</p>

              {data.projects.map((project, index) => (
                <div className="project" key={index}>
                  <h5 className="projectTitle">{project.title}</h5>
                  <p className="projectDescription">{project.description}</p>
                </div>
              ))}

            </div>
            <div className="rightColumn">
              <div className="companyLogo">
                <Image src={data.companyLogo!} alt={`${data.company} logo`} width={200} height={200} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>
    )
    
}