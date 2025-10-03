import Footer from "../components/footer"
import ProjectPageLink from "../components/projectPageLink"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

    return (
      <>
        <header className="fullPageContentHeader">
          <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Projects</h1>
          <p className={`${cormorant.className} fullPageContentDescription`}>
            A selection of immersive projects and digital experiences—from virtual galleries to spatial storytelling—highlighting my work across mixed reality, interactive media, and emerging platforms.
          </p>
        </header>
        <main className="fullPageContentSection projects">
          <ProjectPageLink linkTitle="AR Fusion Lab" />
          <ProjectPageLink linkTitle="World Builder" />
          <ProjectPageLink linkTitle="VR Training Simulator" />
          <ProjectPageLink linkTitle="LeadLandia" />
          <ProjectPageLink linkTitle="iR Studio" />
          <ProjectPageLink linkTitle="Hawkins Heroes" />
          <ProjectPageLink linkTitle="PMI Awards" />
          {/* <ProjectPageLink linkTitle="Google IO" /> */}
          <ProjectPageLink linkTitle="Chase Match Point" />
        </main>
        <Footer />
      </>

    ) 

}