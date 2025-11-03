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
    <Image src="/blog/charette-top.png" alt="Charette cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Charette: Figma Plugin for Prototyping</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>August 23, 2025</p>
    </header>
    <main className="project fullPageContentSection">
      <PH3>Simple code generation</PH3>

      <Para txt={`
        I almost always write design prototypes in the "native" language of whatever its end platform is: HTML/CSS/TypeScript on the web, Swift on iOS and visionOS, Unity or Unreal Engine for compatible AR/VR systems. The main reason that I do it is to keep myself grounded in reality, make sure that the design decisions I propose are going to be practical and functional for developers and end users.
      `} />

      <Para txt={`
        I'm mostly against what folks call "vibe coding" now—letting AI take the wheel and generate a UI from text prompts—because I know the actual <em>design</em> decisions I can make are always going to be better than the statistically most-likely solution AI will spit out. I don't want to fight with the computer when I know exactly what needs to happen. I'll save those tokens for hard questions that it's better at, like writing a complex event handler or generating test data. Nothing personal: we both have our strengths.
      `} />

      <Para txt={`
        So, I still compose all my UI by hand. Not because of any high-minded moral stance, but it's the best way to get exactly what I need. Still, that's a lot of tedious, repetetive work—I put in all the effort to build a design system in Figma, how do I get it out and into prototypes without going all-in on React components and Storybook? 
      `} />

      <PH3>It's just HTML</PH3>

      <Para txt={`
        Charette is a super-simple Figma plugin that generates HTML and CSS code from any selected frame or component. Just select what you want to export, run the plugin, and copy the generated code into CodePen or VSCode.
      `} paddingBottom />

      <Vid
        src="/blog/charette.mp4"
        alt="Showing basic plugin flow: select object, generate or load code, make adjustments, copy code out to use in prototypes. (VIDEO)"
        number={1}
        left
      />

      <Para txt={`
        It really couldn't be simpler: I just crawl the document hierarchy and make everything a div with unique class names. Figma already has a function in the plugin API to convert its auto-layout rules to CSS flexbox, so I match those conversions up to the new class names and fill in the code editor.
      `} paddingTop paddingBottom />

      <Fig
        src="/blog/charette-2.png"
        alt="Initial plugin interface is minimal to save viewport space for object selection. If a selected object has been generated and modified already, that code is automatically saved locally and can be recalled from here."
        number={2}
        right
      />

      <Para txt={`
        What really makes this useful—for me at least—is the inline preview area. The generated code is editable and live-updates in the plugin window, so if anything comes out wrong you can adjust it there without going back and forth from the prototype code editor.
      `} paddingTop />

      <Para txt={`
        Charette is pending publication to the Figma plugin store—I'm working on buidling out the "Animate" tab with a GSAP integration to handle basic motion prototyping as well. So stay tuned!
      `} paddingBottom />

      </main>
    <Footer />
    </>

    ) 

}