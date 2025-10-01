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

    <section className="projectGoalsSection">
      <div className="col">
        <h2>Project Goals</h2>
        <ul>
          <li>Prove viability of reusing 3D VFX assets in "transmedia" applications</li>
          <li>Leverage client partnerships to generate executive interest</li>
          <li>Create a unique and engaging game experience for demonstration</li>
        </ul>
      </div>
      <div className="col">
        <h2>Materials & Processes</h2>
        <ul>
          <li>Game design and concept development</li>
          <li>Art style development with AI-generated imagery</li>
          <li>VFX asset audit and conversion from Maya and Unreal Engine</li>
          <li>Asset animation, retopology and shading</li>
          <li>Level design and implementation in Unity</li>
          <li>Touch and controller interaction design and prototyping</li>
          <li>iPadOS app deployment through TestFlight and performance optimization with Unity and Xcode profilers</li>
        </ul>
      </div>
      <div className="col">
        <h2>Products of Design</h2>
        <ul>
          <li>Cycling simulator game for iPad</li>
          <li>Documented VFX asset conversion pipeline</li>
        </ul>
      </div>
    </section>

    <main className="project fullPageContentSection">

      <PH3>Context</PH3>

      <Para txt={`
        Netflix Originals—series, movies and other properties exclusive to or created specifically for distribution on the eponymous streaming service—number in the hundreds to thousands, depending on how you count. Some are made by production companies with deep ties to the streamer, and many more are licensed or contracted from other creators.
        `} />

      <Para txt={`
        While Netflix and its partners filled the service’s catalogs with hours of original material, the technology behind visual effects has developed tremendously. One of the biggest innovations in filmmaking in this era has been “virtual production”, where entire soundstages are enclosed with LED video walls projecting visual effects in realtime without green-screen compositing. Entire sets are often digital creations, modeled in 3D and stored on hard drives instead of in the backlot.
        `} paddingBottom />

      <Fig
        src="/projects/hawkinsheroes/glassoignon.png"
        alt="Unreal Engine set from a certain murder mystery film."
        number={1}
        left
      />

      <PH3>Unpacking</PH3>

      <Para txt={`
        Taking a step beyond streaming video content, Netflix has its eyes on gaming, metaversal experiences and other “transmedia” applications to attract and keep viewers engaged with their properties. Games based on films—and the inverse—are not a new concept, though recreating production designs in game art has never been easy. Having a vast reservoir of digital props, sets and characters at their fingertips would appear to be a huge time- and money-saver. Model and texture once, and use everywhere. Right?
      `} />
      
      <Para txt={`
        In practice, 3D assets created for virtual production and other VFX are no more organized or usable than a storage unit filled with polyurethane boulders and alien masks. Because so many independent production companies work on Originals, all with their own effects contractors, models are spread out on thousands of portable hard drives, servers, cloud storage and freelancers’ laptops.
      `} />

      <Para txt={`
        What would it take to convince production partners to see the potential future their digital creations could have?
      `} paddingBottom />

      <Fig
          src="/projects/hawkinsheroes/mayahawke.png"
          alt="Comparison of two original LOD models of a creature from Stranger Things."
          number={2}
          right
        />

      <PH3>Raiding the Vault</PH3>
      
      <Para txt={`
        An audit of digital assets from some very popular Netflix Original properties effectively narrowed down our focus to the precious few series and films that had their files organized well enough to even consider using. Together, they amounted to a handful of very detailed and realistic virtual production sets made in Unreal Engine, and a few key animated characters modeled in great detail with Maya.
      `} />

      <Para txt={`
        Our own vault, at ustwo, included a wealth of experience working with Peloton to create a fitness game for their Bike called <em>Lanebreak</em>. Even as a strictly speculative venture, illustrating transmedia applications of these VFX assets with a plausible partnership between two huge and beloved brands generated powerful interest among our clients.
      `} paddingBottom />

      <Fig
          src="/projects/hawkinsheroes/bikekids.png"
          alt="Concept art for a Stranger Things-inspired cycling game."
          number={3}
          left
        />

      <PH3>The Upside Down</PH3>

      <Para txt={`
        Inarguably the most widely loved Netflix Original series, Stranger Things features a group of suburban kids living out their wildest Dungeons and Dragons fantasy: fighting monsters, saving the world, and—most crucially—riding bicycles. A natural fit for a Peloton-based fitness game.
      `} />

      <Para txt={`
        Available assets from the show included a street scene from the show’s shadow realm, complete with burned-out cars and telephone poles wrapped with slimy tentacles. Creatures like the Mind Flayer, Demodogs, and even the main villain Vecna were rigged for animation.
      `} paddingBottom />

      <Fig
          src="/projects/hawkinsheroes/normal.gif"
          alt="Retopology of a Demobat character derived from the high-poly original."
          number={4}
          right
        />

      <PH3>Who Simulates the Simulator?</PH3>
      
      <Para txt={`
        Designing a game around an exercise bike has some particular challenges—as input devices go, there are certainly more portable options. As we’d like to be able to work on the app from our desks (and home offices), and produce something our clients could use without assistance, we opted to develop for the iPad Air with M1 processor. Its portability, relatively performant system-on-chip, native touch controls, and great support from both Unity and Unreal Engine made it the best option for us.
      `} />

      <Para txt={`
        A big part of the game loop revolves around moderating or intensifying exertion. To simulate that effect on the iPad, we paired the device with Sony’s DualSense controllers. By changing the resistance of the L2 and R2 analog triggers, we could show how increased resistance and cadence affected the total “output power” of the simulated bike. And while maybe not as vigorous a workout as the Peloton, you did feel it in the fingers the next day!
      `} paddingBottom />

      <Vid
        src="/projects/hawkinsheroes/HawkinsHeroes.mp4"
        alt="Full gameplay demo of Hawkins Heroes on iPad, showing DualSense input and game loop. (VIDEO)"
        number={5}
        left
      />

      <Para txt={`
        Of course, for ease of use during testing and maximum portability, we also built in some some simple touch controls to precisely set the output values.
      `} />

      <Vid
        src="/projects/hawkinsheroes/touchcontrols.mp4"
        alt="Hello, here's a touch controls prototype. (VIDEO)"
        number={6}
        right
      />

      <PH3>In the Pipeline</PH3>

      <Para txt={`
        Now, about those VFX assets. Game and interaction design	is a crucial element of making the project easy to understand and socialize, but ultimately is a side quest to investigating and optimizing asset pipelines to turn the studios’ archives into usable game assets for branded digital experiences.
      `} paddingBottom />

      <Fig
          src="/projects/hawkinsheroes/batchase.png"
          alt="Frame from the interval phase of Hawkins Heroes, showing Demobat models animated and running smoothly at 60fps."
          number={7}
          left
      />

      <Para txt={`
        Following typical game asset optimization techniques—decimating meshes, redrawing topology to animate with fewer polygons, baking normal maps from fine detail, turning huge tiled UDIMs into smaller texture atlases—and studying the performance impact at each stage gave us data to confidently recommend a reasonable asset conversion pipeline.
      `}  />

      <Para txt={`
        To gather that data, I designed a series of tests simulating the rendering demands of our game and wrote a Unity script that let us run the scenarios on the iPad and stream debug data to the Unity and Xcode profilers.
      `} paddingBottom />

      <Vid
        src="/projects/hawkinsheroes/benchmark.mp4"
        alt="Demo of the synthetic benchmarking test app in a Unity simulator window. (VIDEO)"
        number={8}
        right
      />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="/blog/040824">
            [1] BLOG: Hawkins Heroes 3D Asset Optimization Pipeline
          </Link>
          <Link href="https://ustwo.com/work/peloton/" target="_blank">
            [2] Lanebreak - Ustwo
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}