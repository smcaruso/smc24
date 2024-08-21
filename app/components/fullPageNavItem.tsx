import Link from 'next/link'
import { Cormorant_Upright } from "next/font/google"
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
export default function FullPageNavItem(props: {linkTitle: string}) {
    
    return (
        <div className="fullPageNavItem">
            <Link href={props.linkTitle.toLocaleLowerCase()} className={cormorantUpright.className}>
                {props.linkTitle}
            </Link>            
        </div>
    )
    
}