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

    // function italic(t: String) {

    //   const span = document.createElement("span")
    //   span.style.fontStyle = "italic"
    //   span.innerText = t

    //   return span
    // }

    return (
    <>
    <Image src="/blog/ipad-commercial.png" alt="What's a Computer?" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Conditional Mac</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>May 20, 2024</p>
    </header>
    <main className="project fullPageContentSection">

      <Para txt={`
        Discourse around the iPad frequently comes around to how limiting the software experience is compared to a similarly equipped and priced Mac laptop, or even a Surface. It's true—iPadOS is designed for touch and for extended battery life. But MacOS has reached parity in regards to energy efficiency thanks to Apple Silicon optimizations. 
      `} paddingTop />

      <Para txt={`
        An unstated but very reasonable additional reason not to allow a MacOS experience on the iPad is, paradoxically, that the Mac has a hugely robust third party application ecosystem. If the iPad could run those applications, would developers bother making proper iPad versions of their apps? Surface, and Windows at large, has run into this issue. Their attempt to move toward a touch-first interface with Windows 8 was an utter failure and Windows 11 is as pointer-centric as ever. Resultantly, the Surface is a lousy tablet (but a good and versatile laptop).
      `} paddingTop />

      <Para txt={`
        But at the same time, an M4 in an iPad that is stuck running App Store apps is frustrating.
      `} />

      <Para txt={`
        What makes a Mac (or a Windows PC for that matter) is its input and output modality. A Mac is a <em>place</em> as much as it is a <em>thing</em>—it's a workspace and environment that manifests as physical objects: a keyboard, mouse or trackpad, and a monitor on your desk. The laptop experience abstracts it into a single item but it remains true that when you pull the MacBook out of a bag and set it up, you've built an office. Hands, with years of muscle memory, navigate the space shown on screen. The iPad is just a screen; a monitor on its own isn't a Mac.
      `} />

      <Para txt={`
        Something the Mac <em>isn't</em>: a box of computer parts. Designers at frog and at Apple have been trying to make that part disappear from the very beginning. And especially now—why put a massive Mac Pro tower on your desk when the tiny Mac Studio is <em>literally the same thing</em>? Or if you don't need that much power, why not an even more minuscule Mac mini? Or make it go away altogether with an iMac… or a laptop? Which is the choice most people make now.
      `} />

      <Para txt={`
        On the other hand, an iPad is an iPad—its physical form defines its identity. It's a thing that you hold in your hands and touch directly, manipulating items on the screen as if they were objects in themselves. But within that thing is a box of computer parts, perfectly and completely hidden.
      `} />

      <Para txt={`
        It's better to think of the Mac in this instance as something that can come from anywhere, has no material form in itself, but is expressed through I/O. It can come out of the iPad, but it isn't the iPad itself. When the Mac mini was first launched, they marketed it with the phrase “BYODKM” — bring your own display, keyboard and mouse. iPad brings a display. Pair it with a keyboard and mouse, and what do you get? A weird experience of interacting with apps designed for touch with a mouse cursor… or a Mac? Take away the keyboard, and what happens? Might as well slam your laptop shut—Mac time is over.
      `} paddingBottom />

      </main>
    <Footer />
    </>

    ) 

}