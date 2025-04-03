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
    <Image src="/arfusionlab.png" alt="AR Fusion Lab cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Reflections on AR Fusion Lab</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>August 23, 2024</p>
    </header>
    <main className="project fullPageContentSection">

      <Para txt={`
        In its project case study, I described the design process and reasoning behind the interaction model developed for Qualcomm's Snapdragon Spaces SDK. These interactions were packaged into an interactive and modular set of human interface guidelines, illustrating concrete examples and best practices to developers.
      `} paddingBottom paddingTop />

      <Vid
        src="/blog/ar-fpv.mp4"
        alt="First-person view of AR Fusion Lab."
        number={1}
        left
      />

      <Para txt={`
        The company's aspirations are for Snapdragon-powered XR devices to become an open platform that OEM manufacturing and design partners will make their own and proliferate into a healthy ecosystem of general purpose and specialized glasses and headsets. That's worked out well for them in the Android world—with few, mostly low-end exceptions, those devices are overwhelmingly powered by Qualcomm chips. The Windows PC market is heading in this direction, too; Intel has been in the same position there for a long time, and Qualcomm is getting a taste of it now with Copilot+ PCs. 
      `} paddingTop />

      <Para txt={`
        There's a clear and very present danger to this strategy, though: UX fragmentation.
      `} />

      <PH3>Open to Interpretation</PH3>

      <Para txt={`
        “Fragmentation” is often cited as an argument for open platforms: interoperability is good for users and good for business. Multiple competing platforms reduces each player's individual market and is confusing for consumers. Giving competitors access to the same standards, operating systems, and app ecosystems should mean that experiences will be consistent across the board, right?
      `} />

      <Para txt={`
        As anyone who's used Android or Windows can tell you: not necessarily. The companies that set standards—your Googles and Microsofts—may do their best to establish the user experience they think is right, but when it's up to manufacturers to implement the standards there can be a wide range in adherence. Some are budget-related: corners cut to reduce costs, lousy trackpads, slow processors. Less forgivable, in my opinion, are OEM “customizations” just for the sake of it. TouchWiz and NothingOS come to mind as examples of how customizations can vary so wildly in quality. They can ruin a product that sounds competitive on paper. 
      `} />

      <PH3>Competing Standards</PH3>

      <Para txt={`
        In the months since we completed the AR Fusion Lab playground, several competitors have identified an opportunity area in XR and moved forward with their own platforms. XREAL in particular has aimed very close to where Qualcomm is headed with AR glasses. While their Beam attachment's first iteration was built around improing the glasses' display functionality with 3dof awareness and wireless connectivity, Beam Pro reimagines its purpose as a processing center for spatial apps.
      `} />

      <Para txt={`
        The most notable industry shift has come from Apple's Vision Pro and visionOS platform. The hardware in this case is vastly different, focused on mixed reality with an all-in-one headset and unique interactions afforded by eye tracking, but in many ways validates the choices we made for Dual Render Fusion. By focusing on windowed apps and familiar patterns, visionOS also acknowledges that our screen-based devices are still the best medium for a lot of content and that judicious use of volumetric content is more important than turning every mundane task into a spatial experience.
      `} paddingBottom />

      <Fig
        src="/blog/visionos-spatial-window.png"
        alt="visionOS application window, as shown in Apple Developer documentation."
        number={2}
        right
      />

      <Para txt={`
        However, the biggest impact for the future of Qualcomm's platform has to be Horizon OS. Meta's VR platform and interaction model has the largest install base of anyone else in this space, and the product is maturing rapidly. By turning the Meta Quest Platform into an industry standard available to other manufacturers, they're in a position to become the de facto standard for anyone but Apple. Their SDK is fully-featured, and just as accessible through the same game engines as Snapdragon Spaces. In all honestly, I can't see much of a future for Spaces outside of narrow enterprise applications because of this development.
      `} paddingTop />

      <PH3>On the Horizon</PH3>

      <Para txt={`
        While it may be an evolutionary dead end, I'm still very proud of the work we did with Qualcomm on AR Fusion Lab. It's been gratifying to see our conclusions borne out independently by other platform creators. After a decade or so of bumbling around in VR since the Oculus Rift DK1, design patterns and app models are starting to solidify and technology is maturing in a positive way.
      `} paddingBottom />

      </main>
    <Footer />
    </>

    ) 

}