import Image from "next/image"
import FullPageNavItem from "@/app/components/fullPageNavItem"
export default function Home() {
  return (
    <main className="mainPage">
      <header className="mainPageHeader">
        <div className="headerItem">Steven M. Caruso</div>
        <div className="headerItem">Design for Spatial and Immersive Media</div>
      </header>
      <div className="fullPageNavSection main">
        <FullPageNavItem linkTitle="Projects" />
        <FullPageNavItem linkTitle="Experience" />
        <FullPageNavItem linkTitle="Bio" />
        <FullPageNavItem linkTitle="Weblog" />
      </div>
      <div className="fullPageNavSection subnav">
        <FullPageNavItem linkTitle="Using" />
        <FullPageNavItem linkTitle="Contact" />
      </div>
    </main>
  )
}
