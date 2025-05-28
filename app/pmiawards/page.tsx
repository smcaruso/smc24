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
    <Image src="/projects/pmi-awards/oct03.jpg" alt="PMI Awards" width={1512} height={554} style={{ width: "100%", height: "" }}></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>PMI Awards</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>An immersive 3D virtual gallery experience celebrating industry professionals and notable projects at a yearly global conference.
      </p>
    </header>

    <main className="project fullPageContentSection">

      <PH3>Context</PH3>

      <Para txt={`
        The Project Management Institute has recognized outstanding accomplishments in the field since the early days of the organization, honoring both individuals and project teams with professional awards, academic and research awards, and awards for education and social good.
      `} />

      <Para txt={`
        Awards have traditionally been presented in a ceremony at the group’s annual Global Summit. Along with the rest of their event and conference program, Global Summit was reimagined as a virtual event in 2020, and remained virtual for the following 2 years.
      `} paddingBottom />

      <Fig
        src="/projects/pmi-awards/dec.jpg"
        alt="Menu screen for the Global Summit virtual event."
        number={1}
        left
      />

      <PH3>From <em>Myst</em> to <em>Wolfenstein 3D</em></PH3>

      <Para txt={`
        I had worked with experiential production company Liberty & Co. on PMI’s Virtual Experience Series (VES), creating 3D rendered background images and other assets for an off-the-shelf video event web platform that PMI had quickly migrated to when the COVID-19 pandemic disrupted their usual events programming. Giving a little extra thought to design made a difference, but we were acutely feeling the limitations of the event site.
        `} paddingBottom />

      <Vid
        src="/projects/pmi-awards/intro.mp4"
        alt="Scripted movement through the introductory 'lobby'. (VIDEO)"
        number={2}
        right
      />

      <Para txt={`
        Moving from a pre-rendered point-and-click interface to something more immersive was the next logical step. Since the vast majority of event content was still pre-recorded videos, it made sense to keep them posted to the event platform optimized for video delivery. The Awards ceremony was an opportunity to do something a little special in a self-contained experience.
      `} paddingTop />

      <PH3>Navigation</PH3>

      <Para txt={`
        PMI’s membership is overwhelming middle-aged and increasingly international. Our own analytics, from 18 months of virtual events, revealed an even split between desktop and mobile users as well. Clearly, a standard first-person control template would be challenging for many visitors, defeating the purpose of leveraging interesting new technologies and compromising the trust of our clients.
      `} paddingBottom />

      <Vid
        src="/projects/pmi-awards/nav.mp4"
        alt="Navigation through the gallery performed by pointing and clicking. (VIDEO)"
        number={3}
        left
      />

      <Para txt={`
        Thanks to an extremely compressed development timeline, we took a conservative approach on delivering a universally accessible experience. Navigation through the gallery was designed to minimize unintentional or incidental motion, and use familiar patterns from common web and mobile apps like Google Maps (street view).
      `} paddingTop />

      <PH3>Respect the Medium</PH3>

      <Para txt={`
        A common misstep I’ve observed in immersive experiences—whether XR or simulated, like this—is forcing unnecessary spatial interfaces. Consider a real-life interpretive museum or art gallery: textual information is usually presented on printed cards or posters. Physical, large-format or unique spatial presentations of information are reserved for a limited number key items and artifacts. 
      `} paddingBottom />

      <Vid
        src="/projects/pmi-awards/exhibitwvideo.mp4"
        alt="Rolling up an exhibit page from the gallery view. (VIDEO)"
        number={4}
        right
      />
      
      <Para txt={`
        Similarly, in the virtual Awards gallery, exhibit content is presented in the medium best served over the web: a webpage. The immersive space serves as a navigation layer, with exhibits organized spatially. Clicking or tapping into a wall hanging sends the gallery to the background and presents a modal sheet with videos, photos, audio tours and links to external resources.
      `} paddingTop />

      <PH3>Years Two and Three</PH3>

      <Para txt={`
        The following year, the PMI Awards Gallery expanded with a new visual style matching the rest of that year’s Global Summit branding. Armed with a year of visitor and client feedback, analytics, and a framework in place to free up design and development resources, we revised navigation and layout to be more natural and modular.
      `} paddingBottom />

      <Fig
        src="/projects/pmi-awards/gallery-aerial.png"
        alt="Redesigned gallery environment with new visual style and layout."
        number={5}
        left
      />

      <Para txt={`
        Having mostly solved usability and performance concerns, improvements in our third year focused on streamlining development and content management. Updating exhibit content in prior years had proved to be a point of contention—managing hundreds of assets and unpredictable revisions up to event day made forced crunch time and duplicated work.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/pmi-awards/gallery23.png"
        alt="Interior of the redesigned gallery."
        number={6}
        right
      />

      <Para txt={`
        Instead of building pages directly in markup, I implemented a simple editor for anyone to generate standardized exhibit pages. Github automations allowed me or a few key client partners to review and approve changes, freeing development time to work on bugs and design improvements instead of wrangling page content.
      `} paddingBottom paddingTop />

      <Vid
        src="/projects/pmi-awards/editor.mp4"
        alt="Editor interface, showing gallery position selection, loading existing content, and exporting to JSON. (VIDEO)"
        number={7}
        left
      />

      <PH3>Virtual, Physically</PH3>

      <Para txt={`
        In its latest incarnation, PMI’s Global Summit returned to its original in-person conference production—with a parallel virtual experience, of course. Awards were presented on-site in an elegant ceremony, as they have been, but this time the updated virtual gallery updated in real-time. Conference attendees visited virtually, together, through XREAL AR glasses.
      `} paddingBottom />

      <Fig
        src="/projects/pmi-awards/stage.jpg"
        alt="The main stage at the PMI Global Summit, back as a live event."
        number={8}
        right
      />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="https://pmiag3.vercel.app/" target="_blank">
            [1] PMI Awards Gallery (self-hosted mirror)
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}