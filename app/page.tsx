"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import FullPageNavItem from "@/app/components/fullPageNavItem"
import { HomePageBackgroundScene } from "./homePageBackgroundScene"

export default function Home() {

  const canvasRef = useRef(null)
  useEffect( () => { new HomePageBackgroundScene(canvasRef.current!) } )

  return (
    <>
      <canvas id="bgCanvas" ref={canvasRef} />
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
    </>
  )
}
