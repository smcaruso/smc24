import Footer from "../components/footer"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

    return (
      <>
        <header className="fullPageContentHeader">
          <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Projects</h1>
          <p className={`${cormorant.className} fullPageContentDescription`}>Steve is a creative leader and pioneer in experience and interaction design for 3D and spatial interfaces, specializing in prototyping and experimentation with emerging technologies. Skilled at simplifying complex technical concepts, in internal and external presentations, as well as visual and written communication.</p>
        </header>
        <main>
        </main>
        <Footer />
      </>

    ) 

}