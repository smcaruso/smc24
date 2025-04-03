import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/footer"
import Fig from "../../components/pFig"
import Para from "../../components/para"
import PH3 from "../../components/pHead"
import Vid from "../../components/Vid"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

    return (
    <>
    <Image src="/blog/whats-a-computer.png" alt="What's a Computer?" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Hawkins Heroes 3D Asset Optimization Pipeline</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>April 08, 2024</p>
    </header>
    <main className="project fullPageContentSection">

      <Para txt={`
        <em>The following is a partial reproduction of the documentation provided to our client summarizing the asset pipeline techniques we developed for translating their VFX assets from </em>Stranger Things<em> to game-ready assets in Unity.</em>
      `} paddingTop />

      <PH3>The Demobat</PH3>
      
      <Para txt={`
        The high-level VFX assets of the Demobat creature were an ideal candidate for demonstrating an optimization process including retopology and rigging for in-game animation.
      `} paddingTop />


      </main>
    <Footer />
    </>

    ) 

}