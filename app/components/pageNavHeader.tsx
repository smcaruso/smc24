"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Cormorant_Unicase } from "next/font/google"

import NavBarNavItem from "./navBarNavItem"

const cormorantUnicase = Cormorant_Unicase({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });

export default function NavHeader() {

    const pathName = usePathname()
    let conditionalClass: string = ""
    if (pathName !== "/") { conditionalClass = " showNavLinks"}

    return (

        <header className={"navHeader" + conditionalClass}>
            <div className="title navBlock">
                <div className={cormorantUnicase.className + " myName navHeaderItem"}>
                    <Link href="/">Steven M. Caruso</Link>
                    </div>
                <div className="divider navHeaderItem ">&#47;&#47;</div>
                <div className="subtitle navHeaderItem">Design for Spatial and Immersive Media</div>
            </div>
            <div className="navLinks navBlock">
                <div className="navBarSection main">
                    <NavBarNavItem linkTitle="Projects"/>
                    <NavBarNavItem linkTitle="Experience" />
                    <NavBarNavItem linkTitle="Bio" />
                    <NavBarNavItem linkTitle="Weblog" />
                </div>
                <div className="navBarSection subnav">
                    <NavBarNavItem linkTitle="Tools" />
                    <NavBarNavItem linkTitle="Contact" />
                </div>
            </div>
        </header>

    )

}