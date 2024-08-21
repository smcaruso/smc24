import Image from "next/image"
import FullPageNavItem from "@/app/components/fullPageNavItem"

export default function Home() {
  return (
    <main className="mainPage">
      <div className="fullPageNavSection main">
        <FullPageNavItem linkTitle="Projects" />
        <FullPageNavItem linkTitle="Experience" />
        <FullPageNavItem linkTitle="Bio" />
        <FullPageNavItem linkTitle="Weblog" />
      </div>
      <div className="fullPageNavSection subnav">
        <FullPageNavItem linkTitle="Tools" />
        <FullPageNavItem linkTitle="Contact" />
      </div>
    </main>
  )
}
