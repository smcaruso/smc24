import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/footer"
import Fig from "../../components/pFig"
import Para from "../../components/para"
import PH3 from "../../components/pHead"
import Vid from "../../components/Vid"
import { Cormorant, Cormorant_Upright } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export default function Home() {

    return (
    <>
    <Image src="/blog/basictape.jpg" alt="ChatGPT made this image." width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Vibe BASIC</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>August 19, 2025</p>
    </header>
    <main className="project fullPageContentSection">

      <Para txt={`
        It's become enough of a truism now that I don't even have to dig up a source to link to: AI is changing software design and development in every way. You might have heard that nobody needs engineers because product managers can vibe code their way into a prototype; nobody needs designers because the image generator can come up with lickable components in an instant. Just to set the record straight, I think both statements are almost entirely false—solutions-first approaches are just flat wrong, full stop. Past these deranged ideas, though, we can also see a kernel of something real in the form of “software on demand”.
      `} paddingTop />

      <Para txt={`
        The reasoning behind on-demand software is that the whole idea of software design and development is about to be obsolete because everyone can just make any little single-serve, bite-sized app they need in the moment. APIs are documented well enough, and development environments can run in the cloud, so just about anyone can feed their specific needs into the chat box, wait a minute, and run the program. No ads, no Stories, no bloat… or, better yet, let it deal with the program behind a progress bar and get straight to results. So forget about designers and engineers—we've just put the PM out of work, too. Maybe even the guy gluing iPads together in Zhengzhou, if all we ever do is bark out orders and never bother to see or touch another interface. 
      `} />

      <Para txt={`
        And, to some extent, I get it. I love making up complicated Shortcuts to save me from having to type anything on my phone. I also love asking the computer to make pictures of my cats hunting giant chicken wings and write a college-level essay comparing two brands of sardines, even though I went to college for design and writing. So the appeal and rationale of “software on demand” isn't lost on me.
      `} />

      <Para txt={`
        But just like the extreme contrivance we went through earlier, this is also an impossible future. To understand why, let's revisit some early computer history.
      `} paddingBottom />

      <Fig
        src="/blog/altair.jpg"
        alt="MITS Altair 8800, image from the Computer History Museum"
        number={1}
        left
      />

      <Para txt={`
        Sixteen toggle switches on the front of Altair: that was how you fed instructions into the first commercially-available microcomputer (a machine that compressed most of its core functions onto a microprocessor, rather than the cabinet of transistors that passed for a “mini” computer at the time). These days, when you boot up one of its descendants, the CPU starts reading from a certain point in its memory that has been pre-filled with the instructions needed to get it started up and, thousands of steps later, showing the desktop you know how to use. The chip in this box worked much the same way, but it didn't have the luxury of firmware. If you didn't have your program punched into a paper tape (and whatever hardware needed to read it), you were putting those instructions in with the toggles. One bit per switch. Obviously, this is a useless toy for hobbyists and nerds.
      `} paddingTop />

      <Para txt={`
        At some point, a couple of those hobbyists and nerds mass produced a paper tape with a BASIC interpreter on it—a program that let anyone write their own small apps and games in something approximating natural language that they could just type in. BASIC was, inarguably, the bedrock of the microcomputer revolution: the Altair ran it, Commodore's computers ran it, so did the Apple II. You could even buy books and magazines full of BASIC programs—all you had to do to make the computer do amazing things was type them in. The folks that wrote that first BASIC interpreter went on to bring us more amazing things like Clippy, an electric guitar museum, and vaccinations for over a billion children (they've done well). 
      `} />

      <Para txt={`
        You may be seeing the historical parallel at this point: the promise of common, accessible hardware doing interesting and useful things by performing unfathomably complex math at mind-boggling speeds, and all it needs is the person sitting in front of it to type in what they want. You'd be shocked to learn that this isn't where the story ends.
      `} />

      <Para txt={`
        Five years later, you could buy a floppy disk that would teach an Apple II to run VisiCalc—a spreadsheet app. In a very (very) broad sense, VisiCalc is also a kind of interpreter, like BASIC: it operates on numbers and formulas that you type in. But it is not a truly blank slate. It's a structure, a set of rules and affordances, a visual and functional metaphor, an arrangement of controls—an interface. It knows what it is and what it does, so you don't have to.
      `} />

      <Para txt={`
        And so microcomputers flew off the shelves for 45 years. What has made them a powerful tool isn't necessarily their capacity to do anything they're asked, but their flexibility as a medium for innovative interfaces that make sense of everything going on inside. The whole reason that products—digital or otherwise—exist at all is that no one person can be fully self-sufficient and independent from society—just as we all don't farm, or throw clay pots, or sew our own loincloths, we don't all know what a computer (or a vast interconnected web of computer-powered data storage and transmission machinery) can do or even how to ask it. The interface is what makes the machine a product—not the chip, tape or disk. 
      `} />

      <Para txt={`
        A text input (or voice input for that matter) can never be the end state of a widely useful piece of software. BASIC and DOS (the PC's original command-line operating system) were absolutely successful products that showed technology's raw potential, but VisiCalc, the Macintosh, Word, Netscape, Google, Instagram… those were worth using. They offered choice, opinions, opportunities, and immediately justified their own existence. Will AI change how we make products like them in the future? Absolutely—but it won't, and can't, replace it.
      `} paddingBottom />

      </main>
    <Footer />
    </>

    ) 

}