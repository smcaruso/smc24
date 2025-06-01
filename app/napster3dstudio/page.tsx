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
    <Image src="/projects/ir-studio/studio-header.png" alt="Hawkins Heroes cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Napster 3D Studio</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>
        An immersive web creation platform and editor tools for publishing interactive 3D experiences.
      </p>
    </header>

    <main className="project fullPageContentSection">
      <PH3>First, a Note</PH3>

      <Para txt={`
        As we’re still very actively reimagining the product, I can’t yet tell the full story of Napster 3D Studio. Instead, I’ll use this space to explain a bit about the company and our objectives—check back soon to see how we do it!
      `} />
      <PH3>Context</PH3>

      <Para txt={`
        Napster Corporation—yes, <em>that</em> Napster, can best be understood as a massive skunkworks tasked with applying emerging technologies to help businesses and creators join the web in new and exciting ways. It’s spent its most active years as <em>Infinite Reality</em>, and snowballed through various mergers and acquisitions from its roots as a social media innovation company into a collection of design, product, engineering and creative teams specialized in 3D graphics and artificial intelligence.
      `} />

      <Para txt={`
        Well before I joined, one of the companies merged into iR was <em>Ethereal Engine</em>, developers of a browser-based 3D game engine. It was adapted to become the core of our first original product, iR Studio. We launched in February with a focus on an easy-to-use, template-based guided process aimed at small- and medium-sized e-commerce businesses. We’re taking learnings from the launch into a complete reimagining of the Studio… and while I’d love to tell you all about it, that’ll have to wait for another day.
      `} paddingBottom />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="https://www.theinfinitereality.com/" target="_blank">
            [1] Infinite Reality
          </Link>
          <Link href="https://www.theinfinitereality.com/studio/product-demos" target="_blank">
            [2] iR Studio Demos: Surf Shop
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}