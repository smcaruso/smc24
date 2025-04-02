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

      <Fig
        src="/projects/matchpoint/matchpoint-02.png"
        alt="The Oculus Rift DK2 headset."
        number={2}
        right
      />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          {/* <Link href="https://ustwo.com/work/peloton/" target="_blank">
            [1] Lanebreak - Ustwo
          </Link> */}
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}