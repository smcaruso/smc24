import Image from "next/image"

export default function Footer() {
  
  return (
    <footer className="footer">
      <p>2024 Steven M. Caruso</p>
      <Image src="/smc.svg" alt="Steven M. Caruso logo" width={32} height={32}  />
    </footer>

  )

}