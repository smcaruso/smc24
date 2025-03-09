import Footer from "../components/footer"
import Image from "next/image"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

    return (
      <>
        <header className="fullPageContentHeader">
          <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Steven M. Caruso</h1>
          <div className="bioColumns">
            <div className="bioText">
              <p>Steven Caruso is a Designer and Creative Technologist in Brooklyn, NY. His practice is rooted in prototyping and problem-solving from new perspectives afforded by emerging technologies, tools and materials. He currently serves as a Technical Artist with a focus on XR and immersive media projects at ustwo, a global digital product studio. He’s led design and art production for clients including Google, IBM, Intel, Netflix, Qualcomm and Vox Media.</p>
              <p>Steven earned a BFA in Industrial Design from the Rochester Institute of Technology, with a specialization in exhibit design. His prior work with museums, brand experiences and manufactured objects has sharpened his expertise in pioneering interaction design for spatial interfaces, 3D environments and objects.</p>
              <p>Beyond the studio, Steven spends time building electronics projects and restoring vintage computers, motivated by a curiosity about how things work and a commitment to learning through hands-on making.</p>
            </div>
            <div className="bioImage">
              <Image src="/smc.jpeg" alt="Steve Caruso" width={200} height={200} style={{ width: "100%", height: "" }} />
              <Image src="/steveavp.jpeg" alt="Steve Caruso" width={200} height={200} style={{ width: "100%", height: "" }} />
            </div>
          </div>
        </header>
        <main>
        </main>
        <Footer />
      </>

    ) 

}