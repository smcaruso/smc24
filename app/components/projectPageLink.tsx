import Image from "next/image"
import Link from 'next/link'

import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function ProjectPageLink(props: {linkTitle: string}) {

    const slug: string = props.linkTitle.toLocaleLowerCase().replace(/\s/g, "")
  
    return (
        <Link href={slug} className="projectPageNavItem">
            <div className="col">
            </div>
            <div className="col">
                  <h2 className={cormorant.className}>{props.linkTitle}</h2>
            </div>
            <div className="col" style={{ backgroundImage: `url('/${slug}.png')`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
            </div>
        </Link>            
    )
    
}