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
    <Image src="/projects/hawkinsheroes/hawkinsheroes-cover.png" alt="Hawkins Heroes cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Hawkins Heroes</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>A fitness cycling game set in the world of Stranger Things, designed and built to demonstrate a VFX asset pipeline for games built with the Unity engine.
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

      {/* <Fig
        src="/projects/arfusionlab/fusion-02.png"
        alt="Wearing the ThinkReality A3 and interacting with (simulated) AR objects through the Moto Edge30 Developer Kit."
        number={2}
        right
      /> */}

      <Para txt={`
        Netflix Originals—series, movies and other properties exclusive to or created specifically for distribution on the eponymous streaming service—number in the hundreds to thousands, depending on how you count. Some are made by production companies with deep ties to the streamer, and many more are licensed or contracted from other creators.
      `} />

      <Para txt={`
        While Netflix and its partners filled the service’s catalogs with hours of original material, the technology behind visual effects has developed tremendously. One of the biggest innovations in filmmaking in this era has been “virtual production”, where entire soundstages are enclosed with LED video walls projecting visual effects in realtime without green-screen compositing. Entire sets are often digital creations, modeled in 3D and stored on hard drives instead of in the backlot.
      `} />

      <PH3>Unpacking</PH3>

      <Para txt={`
        Taking a step beyond streaming video content, Netflix has its eyes on gaming, metaversal experiences and other “transmedia” applications to attract and keep viewers engaged with their properties. Games based on films—and the inverse—are not a new concept, though recreating production designs in game art has never been easy. Having a vast reservoir of digital props, sets and characters at their fingertips would appear to be a huge time- and money-saver. Model and texture once, and use everywhere. Right?
      `} />
      
      <Para txt={`
        In practice, 3D assets created for virtual production and other VFX are no more organized or usable than a storage unit filled with polyurethane boulders and alien masks. Because so many independent production companies work on Originals, all with their own effects contractors, models are spread out on thousands of portable hard drives, servers, cloud storage and freelancers’ laptops.
      `} />

      <Para txt={`
        What would it take to convince production partners to see the potential future their digital creations could have?
      `} />

      <PH3>Raiding the Vault</PH3>
      
      <Para txt={`
        An audit of digital assets from some very popular Netflix Original properties effectively narrowed down our focus to the precious few series and films that had their files organized well enough to even consider using. Together, they amounted to a handful of very detailed and realistic virtual production sets made in Unreal Engine, and a few key animated characters modeled in great detail with Maya.
      `} />

      <Para txt={`
        Our own vault, at ustwo, included a wealth of experience working with Peloton to create a fitness game for their Bike called Lanebreak. Even as a strictly speculative venture, illustrating transmedia applications of these VFX assets with a plausible partnership between two huge and beloved brands generated powerful interest among our clients.
      `} />

      <PH3>The Upside Down</PH3>

      <Para txt={`
        Inarguably the most widely loved Netflix Original series, Stranger Things features a group of suburban kids living out their wildest Dungeons and Dragons fantasy: fighting monsters, saving the world, and—most crucially—riding bicycles. A natural fit for a Peloton-based fitness game.
      `} />

      <Para txt={`
        Available assets from the show included a street scene from the show’s shadow realm, complete with burned-out cars and telephone poles wrapped with slimy tentacles. Creatures like the Mind Flayer, Demodogs, and even the main villain Vecna were rigged for animation.
      `} />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="https://ustwo.com/work/peloton/" target="_blank">
            [1] Lanebreak - Ustwo
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}