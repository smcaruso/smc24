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
    <Image src="/blog/embeds.jpg" alt="AR Fusion Lab cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Immersion through Integration</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>August 23, 2025</p>
    </header>
    <main className="project fullPageContentSection">
      <PH3>Content-focused page embeds from World Builder</PH3>

      <Para txt={`
        Working...
      `} paddingBottom />

      </main>
    <Footer />
    </>

    ) 

}