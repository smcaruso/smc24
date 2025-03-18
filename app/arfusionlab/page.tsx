/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Fig from "../components/pFig"
import Para from "../components/para"
import PH3 from "../components/pHead"
import Vid from "../components/Vid"

import { Cormorant, Cormorant_Upright, Space_Mono } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export default function Home() {

  return (
    <>
    <Image src="/projects/arfusionlab/fusion-cover.png" alt="AR Fusion Lab cover image" width={1512} height={554} style={{ width: "100%", height: "" }}></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>AR Fusion Lab</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>A modular, narrative-driven exploration of XR platform SDK features, interaction patterns and best practices for third-party app designers and developers to learn through concrete examples and implement in their own projects.
      </p>
    </header>

    <main className="project fullPageContentSection">

      <PH3>Context</PH3>

      <Para txt={`
        Developers working with Qualcomm’s Snapdragon Spaces SDK for Android are faced with a flexible OS and device environment, but few established interaction patterns or guidelines. The SDK, available as both a Unity package and Unreal Engine plugin, includes a handful of examples that are purely technical demonstrations of basic hardware and software features—plane detection, meshing, spatial anchoring, image target and hand tracking—but few concrete applications or guidance for their use.
      `} paddingBottom />

      <Vid
        src="/projects/arfusionlab/fusion-01.mp4"
        alt="First-Time User Experience (VIDEO)"
        number={1}
        left
      />

      <Para txt={`
        Snapdragon Spaces devices broadly come in two varieties: mixed reality headsets exemplified by the ThinkReality VRX, and augmented reality glasses like the ThinkReality A3, both offered by Lenovo as hardware developer kits and for industrial applications. VRX benefits from having clear expectations set by Meta—ostensibly a platform competitor, but with a product powered by the exact same Qualcomm chipsets and with equivalent technical capabilities—in the Quest 2. By comparison, AR glasses are relatively unknown and unavailable as consumer products. Plus, the AR platform has another twist: the glasses are powered by an Android device with its own established interactions and capabilities.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/arfusionlab/fusion-02.png"
        alt="Wearing the ThinkReality A3 and interacting with (simulated) AR objects through the Moto Edge30 Developer Kit."
        number={2}
        right
      />

      <PH3>Unpacking</PH3>

      <Para txt={`
        Qualcomm calls their headlining differentiating feature “Dual Render Fusion” because it renders different parts of an app in two locations at the same time—in AR glasses and on the handheld device screen—and combines the two modalities into a unfied app experience. This leaves us with a huge, important question: how can these two very different interfaces work together?
      `} paddingBottom />

      <Fig
        src="/projects/arfusionlab/fusion-03.jpg"
        alt="Working through new input patterns."
        number={3}
        left
      />
      
      <Para txt={`
        Our design and development team learned to use the Unity SDK and explored the edges of its capabilities through a series of small-scale interaction prototypes (“proofs”). Working through design documentation in parallel with active, hands-on prototyping exposed the strengths and limitations of the device and software platform, allowed us to provide real-time feedback to the SDK team, and—most crucially—enabled the platform to shape our design, instead of working toward an uninformed ideal design and meeting resistance and disappointment when the hardware didn’t support it.
      `} paddingTop paddingBottom />

      <Vid
        src="/projects/arfusionlab/fusion-04.mp4"
        alt="A selection of interaction prototypes, or proofs, as seen through the glasses along with the touch interface."
        number={4}
        right
      />

      <Para txt={`
        What emerged through the proof exploration process was a sort of interactive and modular set of human interface guidelines. We had uncovered a novel interaction model incorporating the best from mobile and augmented reality and used a narrative structure to onboard designers, developers and end users to it with concrete examples.
      `} paddingTop paddingBottom />

      <Vid
        src="/projects/arfusionlab/fusion-05.mp4"
        alt="Animatic showing combined 3dof gaze, SLAM and touch interactions to manipulate AR objects."
        number={5}
        left
      />

      <PH3>Moving Information and Attention</PH3>
      
      <Para txt={`
        One particularity of the ThinkReality A3, and many optical passthrough AR glasses, is a limited field of view that appears like a small window into a holographic world. This causes a spatial and logical disconnect between AR and the mobile device. To overcome this, during transitions we insist on creating objects and interfaces on the device and show it physically moving to an off-screen position.
      `} paddingBottom />

      <Fig
        src="/projects/arfusionlab/fusion-06.png"
        alt="Concept art for an object manipulation exercise demonstrating the touch-to-AR connection."
        number={6}
        right
      />

      <Para txt={`
        With attention upward to the AR content, the mobile device is free to become a context-specific input: a trackpad for interacting with 3D objects, a keyboard, a remote control for videos. Taking advantage o this extra input reduces our reliance on gaze-and-dwell selection or unreliable hand tracking.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/arfusionlab/fusion-07.png"
        alt="Touch interface screens designed by Chris Marotta."
        number={7}
        left
      />

      <PH3>Narrative Arc</PH3>

      <Para txt={`
        The SDK’s original built-in feature demos failed to communicate and inspire platform developers, in part, because they provided no context for when and why those features might be used. Introducing a character and a story provided a framework for our onboarding experience to connect features to purpose.
      `} />

      <Para txt={`
        QC-85, a friendly virtual companion, acts as an anchor for instructional dialogue as our story progresses from 2D to 3D and gradually introduces interaction patterns by asking for help. Its design is inspired by characters like Stray’s B-12, Portal’s Wheatley and WALL-E.
      `} paddingBottom />

      <Vid
        src="/projects/arfusionlab/fusion-08.mp4"
        alt="A QC-85 animation loop."
        number={8}
        left
      />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="/blog">
            [BLOG] Reflections on AR Fusion Lab
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}