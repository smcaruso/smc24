/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Fig from "../components/pFig"
import Para from "../components/para"
import PH3 from "../components/pHead"

import { Cormorant, Cormorant_Upright, Space_Mono } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export default function Home() {

  return (
    <>
    <Image src="/projects/leadlandia/leadlandia-01.png" alt="leadlandia cover image" width={1512} height={554} style={{ width: "100%", height: "" }}></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>LeadLandia</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>An interactive digital experience for a trade show exhibit to engage with visitors and generate post-show contact leads. Guests create a character on tablets, see them interacting with each other in a 3D visualizer, and receive a deck of virtual business cards connecting them with their fellow visitors.
      </p>
    </header>

    <main className="project fullPageContentSection">

      <PH3>Context</PH3>

      <Para txt={`
        Augmented World Expo (AWE) is the world's largest XR industry conference and trade show, attended by over 5,000 visitors and 300 exhibitors each year, as of 2024. Some of those exhibitors are huge, well known companies—like Meta, Niantic, Leia and XREAL—and build huge, expensive exhibit structures to match.
      `} />

      <Para txt={`
        Ustwo visited the expo as a sponsor, accompanying the presentation Playful Tools for Serious Work about our process of working with MGM Resorts on their VR security training simulator. That sponsorship included a 10x10 patch of carpet and a drape wall at the back of the expo hall. It wasn't much, but it was ours!
      `} paddingBottom />

      <Fig
        src="/projects/leadlandia/leadlandia-01.png"
        alt="Leadlandia cover image"
        number={1}
        left
      />

      <PH3>Unpacking</PH3>

      <Para txt={`
        Exhibiting at the expo was purely incidental to presenting the work on stage. While the larger companies, and many smaller ones with tiny inline booths like ours, come to the show floor to launch new products and demo impressive new technologies, we had no obvious content to build an experience around.
      `} />
      
      <Para txt={`
        Ultimately, lead generation emerged as our primary objective. The agency certainly has impressive XR work in its book, but that work alone wasn't going to attract visitors at this show. Nor did we have a unique technology to offer—we're closer to the end users of technology than the creators, at least compared to other exhibitors. Our mastery of applying technologies in creative ways is clearly valuable to device and platform makers, so our focus turned to building relationships with them.
      `} />

      <PH3>Honesty is the Best Policy</PH3>

      <Para txt={`
        One of my earliest core memories of working as a professional designer is from my first job at a trade show exhibit builder. We were tasked with filling 2,000 square feet of floorspace devoted to medical industry software products. At our first meeting, the creative director crossed out the help desk I drew in the middle of the plan.
      `} />
      
      <Para txt={`
        “Let's put a Ferrari there instead.” Apparently, just putting a cool thing on the ground is a valid strategy to get people in the door. It never sat right with me, though. Don't we have anything better to say about ourselves?
      `} paddingBottom />

      <Fig
        src="/projects/leadlandia/leadlandia-03.png"
        alt="Prospect Pal designs."
        number={2}
        right
      />

      <Para txt={`
        Play Thinking—or, considering the value of fun and emotional connection along with the functional “jobs to be done”—is a foundational strategy behind product design at ustwo. What that looks like in practice is an infusion of game-like interactions and narrative journeys through app experiences. This is distinct from “gamification”, related more to visual aesthetic and mechanics than to driving user motivation.
      `} paddingTop />

      <Para txt={`
        How could we show our visitors who we are and what we stand for, while also being honest about why we want them to give us their contact information?
      `} paddingTop />

      <PH3>LeadLandia is a magical or exciting place where leads are generated</PH3>

      <Para txt={`
        Bumbling around a trade show, looking at cool products, and talking to exhibitors is a fun thing to do. Less fun: having a QR code on your chest scanned by a brand ambassador, filling out contact forms, and trying to make just enough small talk to suss out a prospective client without scaring them away with a hard sell. We all know why we're here, so let's just get to the point.
      `} paddingBottom />

      <Fig
        src="/projects/leadlandia/leadlandia-04.png"
        alt="LeadLandia World."
        number={3}
        left
      />

      <Para txt={`
        The first component of LeadLandia is shown on a large monitor at the back of the exhibit: a crowd of geometric creatures bumbling around on a pink expanse of rolling hills. Like the momentary crowds at bigger exhibits, they're an aggregate of everyone who's visited before. Look closely and you might recognize a friend from their nametag!
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/leadlandia/leadlandia-05.png"
        alt="LeadLandia Creator app."
        number={4}
        right
      />

      <Para txt={`
        LeadLandia Creator is a progressive web app—installed to the Home Screen to appear without browser chrome—that saves Pals to a cloud database. Visitors create a character, or “Pal”, by choosing a name, color, and shape. They can also take a selfie to use as their Pal's face. Once created, the Pal is added to the crowd on the monitor.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/leadlandia/leadlandia-06.png"
        alt="Prospect Deck page architecture."
        number={5}
        left
      />

      <Para txt={`
        The cards deck is a single-page microsite with an embedded 3D model that updates when each card is slid into view.
      `} paddingTop />

      <PH3>Ongoing Strategy</PH3>

      <Para txt={`
        Designed from the beginning for easy deployment—web apps and Mac/Windows builds needing no configuration—LeadLandia lives on anywhere ustwo pops up a conference exhibit.
      `} paddingBottom />


      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="https://ustwo.com/blog/avatars-not-business-cards-our-new-digital-experience-for-networking/" target="_blank">
            [1] Avatars, Not Business Cards — ustwo
          </Link>
          <Link href="https://leadlandia.app/creator/dist/" target="_blank">
            [2] LeadLandia Creator
          </Link>
          <Link href="https://github.com/smcaruso/LeadLandia" target="_blank">
            [3] Github Repository
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}