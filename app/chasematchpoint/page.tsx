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
    <Image src="/projects/matchpoint/matchpoint-cover.jpg" alt="Match Point cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Chase Match Point</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>A virtual reality simulation where players decide the outcome of a tennis game as an umpire using Chase Review, demonstrated to US Open visitors and the general public as part of the bank’s sponsorship of the tournament.
      </p>
    </header>

    <main className="project fullPageContentSection">

      <PH3>Context</PH3>

      {/* <Vid
        src="/projects/arfusionlab/fusion-01.mp4"
        alt="First-Time User Experience (VIDEO)"
        number={1}
        left
      /> */}


      <Para txt={`
        In one of the longest-running corporate sponsorships in history, JPMorgan Chase has supported the US Open for over forty years. With each tournament, the bank has shown up with sponsored lounges, pavilions, courtside advertisements, and all kinds of experiential marketing.
        `} />

      <Para txt={`
        Starting in 2007, the partnership included naming rights to the Open’s computer vision instant replay system—henceforth, Chase Review. Umpires use the system to make difficult calls with certainty, a major convenience for a sport with a swift little ball bouncing from one end of the court to the other.
        `} paddingBottom />
      
      <Fig
        src="/projects/matchpoint/matchpoint-01.jpg"
        alt="Concept design for the Chase Lounge welcome pavillion at Arthur Ashe Stadium."
        number={1}
        left
      />

      <PH3>Review it Yourself</PH3>

      <Para txt={`
        Oculus started making headlines in 2012 when their initial Kickstarter for the Rift Development Kit launched. In many ways, it represented the start of the modern era of XR, solidifying the headset form factor and proving that a plausible virtual reality system could be made at consumer-accessible prices and run with consumer-accessible computer hardware. The developer kit was by no means a finished product, but in controlled settings, it could give people a good idea of what the future had in store.
        `} />

      <Para txt={`
        The pairing felt like a natural and obvious conclusion—we can put visitors to the Open in the umpire’s chair and show them how the Review system changes the game while giving many people their first-ever VR experience.
        `} paddingBottom />

      <Fig
        src="/projects/matchpoint/matchpoint-02.png"
        alt="The Oculus Rift DK2 headset."
        number={2}
        right
      />

      <PH3>Court Surfaces</PH3>

      <Para txt={`
        Excitement around the US Open isn’t confined to the Tennis Center in Flushing—it brings people from all over the world to New York and shows up all over the city. In order to put our VR experience in front of as many eyes as possible, our team designed a series of activations in parallel with content development.
      `} />

      <Para txt={`
        The first locations installed were on the Open’s grounds: a sponsor pavilion for the general public, and the exclusive Chase Lounge. After the Championship officially began, we constructed a one-day pop-up “stadium” in Flatiron Plaza to advertise the sponsorship publicly and reward lucky passers-by with their first look at immersive media.
      `} />

      <Para txt={`
        After the Flatiron stadium was dismantled, the technology was moved to the company’s corporate headquarters in Midtown for employees and press to enjoy.
      `} paddingBottom />

      <Fig
        src="/projects/matchpoint/flatiron-sketch.jpg"
        alt="Concept sketch for the Flatiron Plaza pop-up stadium."
        number={3}
        left
      />

      <Fig
        src="/projects/matchpoint/flatiron-truck.jpg"
        alt="Load-in at Flatiron Plaza."
        number={4}
        right
      />

      <PH3>Please Be Seated</PH3>

      <Para txt={`
        While each activation surface was designed with its own specific personality—abstract and enveloping for the public installations, utilitarian and content-focused for the private events—they were all built around a common set of technological needs afforded by a futuristic “umpire chair” and adjustable armature.
        `} />

      <Para txt={`
        Both pieces incorporated custom-built equipment that provided haptic feedback during the experience, and held positioning sensors for the Rift.
        `} paddingBottom />
        
      <Fig
        src="/projects/matchpoint/IMG_0050.jpg"
        alt="Lounge installation showing the haptic feedback chair and armature."
        number={5}
        left
      />

      <PH3>Interactions</PH3>

      <Para txt={`
        To deliver an easily-understandable, dramatic and impressive experience under five minutes, the experience was built mostly as a cinematic. A short introductory video explained the concept, followed by a brief volley by virtual players.
      `} />

      <Para txt={`
        The singular moment of viewer participation was, in the role of Umpire, making the call of whether the volley was “in” or “out”. With barely any time to introduce or train people on a novel interaction model—besides the fact that, in 2014, none really existed—we employed a very simple gaze-dwell interaction where looking to the left or right for a few seconds made the input selection.
      `} paddingBottom />

      <Vid
        src="/projects/matchpoint/chaseux.mp4"
        alt="Concept saimatic of the experience introduction and gameplay."
        number={6}
        right
      />

      <PH3>Development</PH3>

      <Para txt={`
        Our team at MKG produced the activation series, designed and fabricated the set pieces, and provided art direction and storyboards for the virtual experience. We worked with a development team at Helios Interactive—now part of Freeman—to create the experience in Unity. Here’s a video they produced explaining the project:
      `} paddingBottom />

      <Vid
        src="/projects/matchpoint/helios-chase.mp4"
        alt="Promotional video produced by Helios Interactive."
        number={7}
        left
      />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="https://www.chase.com/personal/events/us-open" target="_blank">
            [1] US Open - Chase
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}