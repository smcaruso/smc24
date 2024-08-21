import Link from 'next/link'
import { usePathname } from "next/navigation"
import path from 'path'

export default function NavBarNavItem(props: {linkTitle: string}) {
  
    const pathName = usePathname().substring(1)
    let activeClass: string = ""
    
    if (pathName === props.linkTitle.toLocaleLowerCase()) { activeClass = " active"}

    return (
        <div className={"navBarNavItem" + activeClass}>
            <Link href={props.linkTitle.toLocaleLowerCase()}>
                {props.linkTitle}
            </Link>            
        </div>
    )
    
}