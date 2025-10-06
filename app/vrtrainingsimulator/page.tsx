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
    <Image src="/projects/mgm/mgm-hero.jpg" alt="MGM Security Training Simulator cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>VR Training Simulator</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>
        A virtual reality simulator for training security staff at MGM Resorts properties with an emphasis on navigating a 1:1 recreation of a Resort and Casino environment and interactive scripted scenarios.
      </p>
    </header>
    
    <section className="projectGoalsSection">
      <div className="col">
        <h2>Project Goals</h2>
        <ul>
          <li>Connect immersive technologies to real-world business goals at MGM Resorts International</li>
          <li>Pilot a "metaverse" experience program directly with front-line employees</li>
        </ul>
      </div>
      <div className="col">
        <h2>Materials & Processes</h2>
        <ul>
          <li>Ethnographic user research to understand internal team challenges and opportunity areas</li>
          <li>Game loop design</li>
          <li>Spatial UI and interaction design</li>
          <li>Spatial information architecture</li>
          <li>3D environment creation through photogrammetry, CAD conversion and optimization</li>
          <li>Pipeline development for generative AI character animation</li>
        </ul>
      </div>
      <div className="col">
        <h2>Products of Design</h2>
        <ul>
          <li>Security training simulator app for Meta Quest 2</li>
          <li>User-expandable scenario framework and editor</li>
          <li>Preliminary design documentation for alternative immersive opportunities</li>
        </ul>
      </div>
    </section>

    <main className="project fullPageContentSection">

      <PH3>Context</PH3>

      <Para txt={`
        MGM Resorts International is a hospitality and entertainment juggernaut, managing over forty properties—in Vegas and all over the world. That includes shopping centers, hotels of all kinds, restaurants, nightclubs, arenas, conference centers and, yes, casinos.
      `} />

      <Para txt={`
        Backed by the resources of such a massive concern, MGM's innovation team worked with our immersive media team at ustwo to introduce “metaverse” technologies into the company and demonstrate their value to practical business use cases.
      `} paddingBottom />

      <Vid
        src="/projects/mgm/mgm-reel.mp4"
        alt="Demo reel showing highlights from the design process and final product of the MGM VR Security Training Simulator (VIDEO / NO AUDIO)."
        number={1}
        left
      />

      <PH3>Finding Opportunities</PH3>

      <Para txt={`
        An open-ended project goal like the one presented to us creates a dependency on a sort of meta-project: finding purpose. Before we could get to work, we had to answer some important questions like: who should our users be—customers and guests, or folks inside the company? Should we focus on generating revenue, or creating efficiencies? Will internal stakeholders respond better to glitzy presentation or hard data? Our strategy for finding these answers included methods like the “concept equation” workshop, where participants from our internal and client teams match cards in different categories to generate ideas. Chris Marotta, our lead designer, explains the process in the video session from AWE, "Playful Tools for Serious Work" (see <strong>footnote [2]</strong>).
        `} paddingBottom />

      <Fig
        src="/projects/mgm/awe-slide.jpg"
        alt="Chris presenting our design process at AWE 2023"
        number={2}
        right
      />

      <Para txt={`
        Once settled on our opportunity area of creating efficiency within the company's Security & Surveillance apparatus, our next step was to spend time with them on-site and understand their day-to-day work, pain points that seem unavoidable, and areas where we could add value.
      `} paddingTop />

      <PH3>In the Tower</PH3>

      <Para txt={`
        Our team was given access to the inner workings of the Aria Resort & Casino, one of the most luxurious properties on the Las Vegas Strip, and embedded with their security team for a 24-hour tour of duty. Think of what a security guard stationed on a busy gaming floor deals with all day—drunk and disorderly guests, people angry about losing all their money on slot machines, people belligerent from winning too much money on slot machines, the potential for chaos from fights, fires or active shooters… all real possibilities, and we did see some of that. Something else, though, emerged as the biggest use of time by far: giving directions.
      `} paddingBottom />

      <Fig
        src="/projects/mgm/mgm-team-01.jpg"
        alt="Showing demo builds in the Aria security office with Chris and Paige."
        number={3}
        left
      />

      <Para txt={`
        The truth is, Aria is huge—and it's not even the biggest resort in Vegas. People don't know where anything is, and they ask security guards for help: how to find their way to hotel elevators, their dinner reservations, where to catch a cab, how to cash in their winnings. All that depends on guards knowing where everything is.
      `} paddingTop />

      <Para txt={`
        MGM sends their security staff through a rigorous training academy, where they learn every inch of the place on top of conflict resolution, de-escalation, customer service, and probably jujutsu for all I know. Training takes weeks, and two of them are devoted primarily to physical orientation. On top of all that, turnover among security staff is high, so the academy is constantly busy with new recruits.
      `} />

      <Para txt={`
        So we've finally found our niche: <strong>let's use VR to recreate the Aria and put guards-in-training in it from day one to increase the speed and effectiveness of classroom training</strong>.
      `} />

      <PH3>The Digital Twin</PH3>

      <Para txt={`
        From this point, two processes continued in parallel: refining the game loop, and building a faithful recreation of the resort that could be run on the Quest 2 headset. I took the lead on the digital twin, starting with processing CAD and blocking out the environment to scale.
      `} paddingBottom />

      <Fig
        src="/projects/mgm/mgm-3d-map.jpg"
        alt="Partitioning and blocking out the Aria Resort and Casino in 3D."
        number={4}
        right
      />

      <Para txt={`
        A majority of the volume of the Aria's ground floor is devoted to gaming—rows and rows of slot machines and green felted tables. Their sheer number represented both a challenge and a relief: they needed to look convincing, but didn’t need to be precise. Despite their importance and quantity, they were ultimately the least of my concerns. Entrances to major points of interest, general material and lighting characteristics, and accurately replicating wayfinding signage were my main focus.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/mgm/gaming-floor.jpg"
        alt="Procedurally generated gaming floor with instanced slot machines and tables."
        number={5}
        left
      />

      <Para txt={`
        The environment was constructed by combining CAD data with 3D scans of key items, 360° video, and tons of photos captured on-site.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/mgm/digital-twin.jpg"
        alt="The full ground floor of the Aria Resort and Casino, recreated in 3D."
        number={6}
        right
      />

      <Vid
        src="/projects/mgm/ueflythrough.mp4"
        alt="Flythrough of the full digital twin showing final lighting look and major points of interest (VIDEO / NO AUDIO)."
        number={7}
        left
      />

      <Para txt={`
        Working within a strict performance envelope on the Quest 2, and needing to update the Unity project regularly for playtesting, optimization was critical to consider from the beginning. The entire Resort model was created from 157 unique 3D assets—instanced, where possible—with a total polygon count under 60,000. Casino gaming features were considered separately, instanced with a script that randomized textures, and aggressively culled by distance and camera at runtime. This left us with more than enough overhead to also run a crowd simulation, giving life to the virtual space.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/mgm/mgm-render-03.jpg"
        alt="Digital twin with baked lighting, crowd simulation, and wayfinding signage running on the Quest 2 headset."
        number={8}
        right
      />

      <PH3>Navigation</PH3>

      <Para txt={`
        Our sprawling labyrinth of psychedelic carpeting and strobing slot machines created the same challenge in-game as it does in real life: it takes a long time to get around and is easy to get disoriented in. To manage the tedious traversal between training scenarios, we introduced a “Surveillance View” inspired by the interface that Aria staff use to select cameras in their headquarters. The new view provided quick access to key locations and gave players an overview of active scenarios that they could choose to train on.
      `} paddingBottom />

      <Fig
        src="/projects/mgm/sketchpage.png"
        alt="Sketch page exploring steps for navigation using the Surveillance view."
        number={9}
        left
      />

      <Para txt={`
        We also provided a virtual radio over the Quest's left motion controller, which showed quick access to key information like the number of active scenarios, time remaining in the day simulation, and a mini-map with waypoints. The full bird's-eye view was always accessible through the radio—switching perspective from the guard working the floor, to the operator dispatching orders.
      `} paddingTop paddingBottom />

      <Vid
        src="/projects/mgm/survey.mp4"
        alt="Showing navigation to Surveillance view and back to a first-person scenario (VIDEO / NO AUDIO)."
        number={10}
        right
      />

      <PH3>Method Acting</PH3>

      <Para txt={`
        Not every scenario that a guard-in-training is presented with is a lost guest in search of soup dumplings. For more high-stakes interactions, we developed an enhanced conversation experience based on full-motion video with spoken dialog.
      `} paddingBottom />

      <Fig
        src="/projects/mgm/dialog.jpg"
        alt="Dialog interface with rendered character video and response options."
        number={11}
        left
      />

      <Para txt={`
        To produce these scenarios, the Resort model was brought into Unreal Engine—the simulator was written in Unity and optimized for the device there—and given a more cinematic treatment. The script for each scenario was voiced by ElevenLabs's AI text-to-speech service, which was then used to generate detailed, synchronized facial animations with Nvidia's Audio2Face tool. These animations were targeted to Epic's MetaHuman facial rig, and rendered out as high-quality clips that could be overlaid into our Quest app, thus letting us keep the simulation running well and affording realistic video content that trainees could feel the emotion behind.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/mgm/metahuman-pipeline.png"
        alt="Diagram showing pipeline for generating MetaHuman facial animation from dialog scripts."
        number={12}
        right
      />

      <Vid
        src="/projects/mgm/v2_dammit-fuck.mp4"
        alt="Sample rendered dialog clip (VIDEO — WARNING: LOUD PROFANITY)."
        number={13}
        left
      />

      <PH3>Expansion</PH3>

      <Para txt={`
        Using the training academy's teaching materials, we created a handful of scripted scenarios delivered along with the pilot app. Instructors could also use a custom scripting and content management tool to add to the library. The system was tied into MGM’s employee portal to let trainees log in with their credentials to track and save progress or receive a tailored curriculum.
      `} paddingBottom />

      <Vid
        src="/projects/mgm/loginn.mp4"
        alt="Entrance environment and login interface. (VIDEO)"
        number={14}
        right
      />

      <Para txt={`
        Using the VR training simulator, new security guards became comfortable operating in the real Resort within two weeks!
      `} paddingTop />

      <Para txt={`
        We proposed alternative uses of the digital twin, and a documented process for producing twins for more properties, in the form of a surveillance camera positioning simulator (allowing planners to preview their camera views before installing them):
      `} paddingBottom />

      <Vid
        src="/projects/mgm/cam-views.mp4"
        alt="Animatic of surveillance camera simulator interface. (VIDEO / NO AUDIO)"
        number={15}
        right
      />

      <Para txt={`
        Our next target was MGM's conference and events business—set to exceed casino gaming by revenue within years—which was especially interesting to me having designed many corporate events in exhibit halls and conference centers. Lots of venues provide great CAD plans of their exhibition spaces, but very few provide details on what “connective tissue” lies between them: hallways, escalators, doors that don't stay open, places to get food and rest. Those important features can often only be seen on site visits—and scheduling those can be tough. 
      `} paddingTop paddingBottom />

      <Vid
        src="/projects/mgm/ar-stage.mp4"
        alt="Animatic of a virtual site visit experience for iPad using AR to preview event structures in conference center spaces. (VIDEO / NO AUDIO)"
        number={16}
        left
      />

      <Para txt={`
        Leveraging our digital twin, the whole team can be looped in on a virtual site visit to preview event locations and build a shared vision. Information availability can be a powerful selling point and help MGM close sales before their competitors.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/mgm/conference-sim.jpg"
        alt="Mockup of a conference center event planning tool with a digital twin simulating room capacities and traffic flow."
        number={17}
        right
      />

      <Para txt={`
        Once the sale is made, a detailed web-based conference simulator can help planners avoid bottlenecks and maximize their schedules. 
      `} paddingTop paddingBottom />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="https://ustwo.com/work/mgm-resorts/">
            [1] MGM Resorts at ustwo
          </Link>
          <Link href="https://youtu.be/K1xAExQqcGo?si=1xeGTi9G2HVweQaN&t=314">
            [2] AWE 2023: Playful Tools for Serious Work
          </Link>
          <Link href="https://www.youtube.com/watch?v=hhuY_KUtSjU">
            [3] Full onboarding demo (8 minutes)
          </Link>
          
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}