import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"
import { Cormorant, Cormorant_Upright, Space_Mono } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export default function Home() {

    return (
    <>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Blog</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>Soon, a bunch of text. A whole lot of text! All I have to do is write it.</p>
    </header>
    <main className="blog fullPageContentSection">
      <section className="blog-list">

        <div className="blog-list-item">
          <div className="date">08 23 2025</div> 
          <div className="title">
            <Link href="/blog/082325">
              Immersion through Integration
            </Link>
          </div> 
        </div>

        <div className="blog-list-item">
          <div className="date">08 19 2025</div> 
          <div className="title">
            <Link href="/blog/081925">
              Vibe BASIC
            </Link>
          </div> 
        </div>

        <div className="blog-list-item">
          <div className="date">08 23 2024</div> 
          <div className="title">
            <Link href="/blog/082324">
              Reflections on AR Fusion Lab
            </Link>
          </div> 
        </div>

        <div className="blog-list-item">
          <div className="date">05 20 2024</div> 
          <div className="title">
            <Link href="/blog/052024">
              Conditional Mac
            </Link>
          </div> 
        </div>

        <div className="blog-list-item">
          <div className="date">04 08 2024</div> 
          <div className="title">
            <Link href="/blog/040824">
              Hawkins Heroes 3D Asset Optimization Pipeline
            </Link>
          </div> 
        </div>
        
      </section>
    </main>
    <Footer />
    </>

    ) 

}