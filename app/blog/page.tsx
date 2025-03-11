import Footer from "../components/footer"
import Image from "next/image"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

    return (
    <>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Blog</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>Soon, a bunch of text. A whole lot of text! All I have to do is write it.</p>
    </header>
    <main className="blog fullPageContentSection">
              <section className="experienceItem" style={{height: 500}}>
                <div className="itemContent">
                  <div className="leftColumn">
                    <h3 className="dateRange">March 10, 2025</h3>
                  </div>
                  <div className="innerContent">
                    <h3 className="title">Sample Post</h3>
                    <h4 className="company">hehe</h4>
                    <p className={`${cormorant.className} headline`}>hoho</p>
                  </div>
                  <div className="rightColumn">
                  </div>
                </div>
              </section>
    </main>
    <Footer />
    </>

    ) 

}