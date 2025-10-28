/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Fig from "../components/pFig"
import Para from "../components/para"
import PH3 from "../components/pHead"
import Vid from "../components/Vid"
import WBTaxonomyTable from "../components/taxonTable"

import { Cormorant, Cormorant_Upright, Space_Mono } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export default function Home() {

  return (
    <>
    <Image src="/projects/world-builder/wb-header.jpg" alt="World Builder cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>World Builder</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>
        An AI-led 3D world creation and publishing platform that intelligently automates the 3D editor experience by understanding customer goals and content.
      </p>
    </header>

    <section className="projectGoalsSection">
      <div className="col">
        <h2>Project Goals</h2>
        <ul>
          <li>Reimagine the editor experience as an agentic AI-led process</li>
          <li>Improve product messaging and market fit</li>
          <li>Integrate published worlds with existing web experiences</li>
          <li>Address beta user feedback</li>
        </ul>
      </div>
      <div className="col">
        <h2>Materials & Processes</h2>
        <ul>
          <li>Product requirement documentation, strategic concept development</li>
          <li>High-level customer personas and workflow mapping</li>
          <li>Information architecture and taxonomy for world composition, builder concepts, and editor UI</li>
          <li>Conversational design and reasoning guidance for AI agents</li>
          <li>Wireframes and wireflows</li>
          <li>Interaction design and prototyping with TypeScript and three.js</li>
          <li>Interaction animatics with Blender</li>
        </ul>
      </div>
      <div className="col">
        <h2>Products of Design</h2>
        <ul>
          <li>End-to-end designed flows for onboarding, Agent-guided world generation, and user-led world creation</li>
          <li>Product-specific design system aligned to new company branding</li>
          <li>Sample 3D worlds and embeddable interactive widgets</li>
        </ul>
      </div>
    </section>

    <main className="project fullPageContentSection">

      <PH3>Context &amp; Origins</PH3>

      <Para txt={`
        The “World Builder” project was a broad reimagining of iR Studio, which initially consisted of a 3D engine and editor developed by Ethereal Engine, acquired by Infinite Reality. EE's vision for the product was general purpose or social; iR's target market for the product was more tightly focused on small e-commerce businesses. This led to an incremental program of UX improvements nudging the Editor away from a web-based Unity competitor to something more accessible, which I explain in detail in that case study <strong>[1]</strong>.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/overview.jpg"
        alt="Base World Builder editor view showing variable states for Scenes and Operator interfaces."
        number={1}
        left
      />

      <Para txt={`
        Near the 1.0 general availability launch of iR Studio, leadership recognized the disconnect between the expectations of their customer base and the complexity of the Editor tool. The team quickly bolted on a “wizard” onboarding, but splitting resources at that late stage resulted in two disparate product surfaces that both fell short. Presenting customers with two extremes—an intimidating Editor and overly-simplistic Setup Assistant—did allow us to collect a lot of very helpful feedback from beta users. Another pivot after launch let my team focus fully on taking these insights into the successor.
      `} paddingTop />

      <PH3>Starting at the End</PH3>

      <Para txt={`
        That early feedback made it clear that templated designs were a dead end. The most validating (and damning) evidence of this was in the data: customers overwhelmingly abandoned the product at the first step where we showed templates. It may seem counterintuitive to suggest that offering simpler solutions would decrease acceptance, so consider why templates work so well on standard webpage builders, desktop publishing and blogs: colors, images, font choices, branding—content, generally—completely change how the site looks and what it does.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/screenpct.png"
        alt="Comparison of apparent content size in an unfocused view vs. a content-focused view."
        number={2}
        right
      />

      <Para txt={`
        In a spatial environment, customer content is comparatively minuscule; an overwhelming percentage of the screen is taken up by immutable virtual architecture <strong>[2]</strong>. On top of that, the space is finite, demanding a precise amount of content; too little and it feels incomplete, too much and it won't all fit. Effectively, every site published with our Setup Assistant was identical and required customers to need exactly what we had provided.
      `} paddingTop />

      <Para txt={`
        This realization led directly to the <strong>first major inversion</strong> of World Builder: customer content drives everything else. By orienting the onboarding flow around multi-modal interaction with an AI agent, we would collect or infer as much intention and source material from the customer as possible, and then work with them to build something to best support it.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/visionboard-1.png"
        alt="Workshop materials discussing the role of AI in the world building process, and how to handle unpredictable inputs gracefully. Early concepts entertained using AI image generation to verify user intent."
        number={3}
        left
      />

      <Fig
        src="/projects/world-builder/visionboard-3.png"
        alt="From the beginning, the AI agent was thought of as a creative partner that could help simplify complex editor tasks without compromising user agency over the creative output."
        number={4}
        right
      />

      <PH3>Reimagining World Structure</PH3>

      <Para txt={`
        To make the creation process intuitive, we needed a new vocabulary that was both precise and easy to grasp. We borrowed terminology from theater and film productions to organize Worlds—technical in its way, but also a big enough part of culture for understanding to be universal, if cursory.
      `} />

      <WBTaxonomyTable
        number={5}
        right
      />

      <Para txt={`
        The basic unit of structure would be <strong>Sets</strong>: generalized assemblies of 3D objects, including structural elements, backgrounds, decorative props, and content that formed the basis of what's shown on screen once published.
      `} paddingTop />

      <Para txt={`
        Those objects, <strong>Set Pieces</strong>, are assigned a <strong>Role</strong> that justifies their presence. Products and Media, for example, are interactive and come with specific behaviors. Props and set structure are purely visual. Roles map to predefined compositions in the Engine's entity-component system (ECS), now abstracted away completely.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/theme-select.jpg"
        alt="Props and structural objects are organized into Themes, which can quickly be applied to Sets to change their mood or style."
        number={6}
        left
      />

      <Para txt={`
        Everything in our asset library would be crafted to align to cohesive <strong>Themes</strong>, interchangeable visual styles (materials, colors, lighting) that are decoupled from function. While they could be mixed-and-matched, the structure of our human-selected kits would give the AI agent confidence to make good choices when assembling Sets around customer content. 
      `} paddingTop />

      <Para txt={`
        Finally, <strong>Scenes</strong> were defined as the action that happens on Sets, where the Set Pieces all play their Roles to tell the story of customer content. Scenes are also the navigational unit of Worlds, acting as keyframes for camera movements and giving customers and the Engine tighter control over what's shown on screen.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/scene-sketch2.png"
        alt="Scenes not only define the purpose and interactivity of a Set, but also acts as a keyframe for camera positioning. The interface for setting Scenes included framelines for mobile and desktop viewports, allowing compositions to be set with intention."
        number={7}
        right
      />

      <Para txt={`
        This was the <strong>next major inversion</strong> from iR Studio—we'd no longer use first- or third-person avatars and WASD keyboard control to navigate, but treat Scenes as individual pages on a site or slides in a deck to be moved between with menus, scrolling, and hyperlinking. Reorienting around a more familiar interaction model was crucial for user acceptance; a huge number of users in testing didn't even know they could change the view, and would be terminally confused by any accidental movement.
      `} paddingTop/>

      <PH3>Immersive Navigation &amp; Embeddable Worlds</PH3>

      <Para txt={`
        We've sorted out how to build interactive 3D worlds and publish them to the web, but there's still an outstanding question of <strong>why</strong>. User data and ethnographic research showed clear challenges here: it wasn't obvious to customers how these experiences were better than their preexisting e-commerce solutions, and it demanded a kind of creative asset that most of them couldn't provide.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/immersive-nav-sketch.png"
        alt="Concept sketch for Immersive Navigation interactions specific to record stores, allowing small business customers to upload simple 2D cover images and receive a rich spatial integration for their e-commerce website."
        number={8}
        left
      />

      <Para txt={`
        Our target customers were “Main Street” retailers and service sellers; immersive experiences require high-quality, optimized and performant 3D models of products. Only big enterprises and manufacturers typically have these—and they're unlikely to be using a tool like ours to make an immersive web experience; they'd hire an agency to do it. So our customers either have what their suppliers give them, or have to make it with limited resources and almost no specific technical knowledge. Filling a Shopify or Squarespace site with product details and appealing photos is already a major undertaking, but there's a clear return on investment in the form of e-commerce sales. Replacing a simple site that works well with a complicated one that end users find challenging to navigate is a nonstarter.
      `} paddingTop />

      <Para txt={`
        A thorough examination of the kinds of business our target customers operate revealed some really good news: we can easily help present their products, and we wouldn't even have to rely on expensive, unpredictable AI model generation. The products that these businesses sell are frequently ones that aren't embodied in unique objects, but primitives. Reductively, small retailers deal in rectangles: books and magazines, music on CD and vinyl, wallpaper and paint, art prints, stationery. Even with a third dimension—bottles of wine, candles, t-shirts, bedding—geometry is a distant second to the texture applied to it.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/rectangle-stores.jpg"
        alt="A small selection of store types examined during research, which showed a majority of small retail merchants selling products that could be represented by simple geometry customized with assets they're able to easily and reliably provide."
        number={9}
        right
      />

      <Para txt={`
        That conclusion was a breakthrough <strong>[3]</strong> leading to the idea of “<strong>Immersive Navigation</strong>,” or embeddable enhancements to traditional websites that use spatial interactions with primitive objects to tell a deeper product story. We introduced new forms of Scene, each built with a specific kind of product in mind, with an emphasis on rich, playful interactions populated with content we could count on customers already having on hand. Armed with contextual understanding and integrations with content sources, our AI agent could choose and connect Immersive Navigation Scenes automatically.
      `} paddingTop paddingBottom />

      <Vid
        src="/projects/world-builder/immersive-nav-hb.mp4"
        alt="Animatics showing immersive navigation models for books, records and art prints. (VIDEO)"
        number={10}
        left
      />

      <Fig
        src="/projects/world-builder/immersive-nav-steps.jpg"
        alt="Progressive immersion with interaction: embeds start as self-contained animations and expand when tapped into."
        number={11}
        right
      />

      <PH3>Context is for Kings (and Agents)</PH3>

      <Para txt={`
        We knew that AI integration would be a product requirement from the beginning, and the core engineering team was hard at work building an AI agent that worked with our 3D engine. At a time when every product from startups to big tech were throwing an AI chat into the interface, we needed a defter hand here that didn't eclipse our defining feature as an immersive creation tool or waste UI space on something that provided no value. <strong>It was important to me that we use AI in a smart way that doesn't have to work hard to justify itself</strong>. At the same time, giving AI too much power takes agency away from users and keeps them from learning or building a relationship with the product.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/share-your-vision.jpg"
        alt="The initial onboarding page asking 'Share your vision' with a multimodal chat input. A high-fidelity prototype with sample conversation and motion design is linked in footnote [4]."
        number={12}
        left
      />

      <Para txt={`
        The <strong>final major inversion</strong> behind World Builder was to build an <strong>engine for understanding</strong> at the core of the creator experience. Instead of asking customers to learn our tool—streamlined though we made it—we opted to spend computational effort into learning the customer. Our new onboarding experience begins with a familiar open-ended multimodal chat willing to accept any input as a starting point <strong>[4]</strong>. We asked a simple, direct question: Share your vision. Examples on the page connected sample Worlds with the vision behind them, guiding people toward possible starting points for their own project.
      `} paddingTop />

      <Para txt={`
        With each input, the agent would ask itself: what can I do with the information we have? It would transparently communicate its reasoning, and provide opportunities for clarification, course correction and reframing. In quick order, we could learn what kind of business the customer had, what they aimed to do, narrow down ideas for Theming and start to figure out what size World to build and what kind of Immersive Navigation patterns made sense to suggest.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/chain-of-though.png"
        alt="Section of conversational design diagram charting how the agent interprets input and reasons through them to perform Operations."
        number={13}
        right
      />

      <Para txt={`
        Once we had set the basic parameters of the World, we transitioned from a chat-style interface to a full-page 3D view. With content always as our guiding force, the agent would use it to create a navigational structure for the customer to approve or make changes to. It would then start assembling Sets in sequence, allowing 3D exploration and explaining our process along the way. In this way, we'd show new users how to build with the tool by example—a truly customized tutorial, without relying on contrived placeholders. We'd give people the confidence to go back in and make changes or build new Sets on their own. At all times, though, <strong>Operator</strong> would be standing by to help.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/world-builder/operator-button.jpg"
        alt="Persistant control to expand the Operator interface. The Operator icon appears anywhere the agent is performing actions without direct confirmation."
        number={14}
        left
      />

      <PH3>Smooth Operator</PH3>

      <Para txt={`
        Operator was the embodiment of the AI agent system, with all its functions consolidated into an interface that expands when needed or collapses to put focus on other toolsets. During onboarding, Operator is a full-page experience that then becomes an integrated interface within the 3D editor view. When building and editing Worlds, its functions are threefold:
      `} />

      <Para txt={`
        Its chat history acts as a <strong>Status Console</strong> that explains what the system is doing at any moment and why.
      `} paddingBottom />
      
      <Fig
        src="/projects/world-builder/operator-status.png"
        alt="Operator summarizes its reasoning and enumerates Operations it's performed."
        number={15}
        right
      />

      <Para txt={`
        Responses to text inquiries, 3D view selections and other contextual clues can take the form of focused UI widgets, an <strong>Operations Center</strong>.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/world-builder/ui-widget.jpg"
        alt="Operator's scrolling chat history is replaced with a keyboard-navigable list of objects to add to the scene when asked to add objects."
        number={16}
        left
      />

      <Para txt={`
        Freeform questions are handled as a <strong>Help Desk</strong>, surfacing documentation or interactively working through problems.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/world-builder/operator-help.jpg"
        alt="Documentation snippets and guides are reprinted in the Operator chat, summarized or editorialized by the language model to be most helpful in context."
        number={17}
        right
      />

      <Para txt={`
        By keeping Operator visible but unobtrusive, World Builder lets users dip in and out of guidance as needed. The clear hierarchy of Worlds, Sets, Set Pieces and Scenes makes it possible for the agent to assemble complex environments while still giving customers control.
      `} paddingTop />

      <PH3>Outcomes &amp; Reflection</PH3>

      <Para txt={`
        World Builder represented a bold rethinking of immersive content creation. By shifting from template-driven environments to a content-first, AI-assisted workflow, the project aimed to make spatial commerce accessible to “Main Street” merchants. The work produced a clear information architecture, a flexible design system, prototypes of conversational onboarding and interactive build processes, and a vision for embedding scenes into existing websites.
      `} paddingBottom />

      <Fig
        src="/projects/world-builder/colors.jpg"
        alt="The design system for World Builder was built with translucency and depth, allowing projects' content and themeing to saturate the interface without needing to dynamically change UI components. Contrast and background blur was carefully chosen to work with a wide range of possible backgrounds."
        number={18}
        left
      />

      <Para txt={`
        Ultimately, strategic priorities shifted and the product was not released in the form described here. However, the exploration yielded valuable insights: 3D experiences for small businesses must start from their content, not ours; automation should empower users rather than remove them from the loop; and AI is most helpful when it explains its reasoning and invites collaboration. These lessons continue to inform my approach to designing tools for the spatial web.
      `} paddingTop paddingBottom />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="/irstudio">
            [1] iR Studio
          </Link>
          <span style={{ display: "block", color: "#ffffff", fontStyle: "italic" }}>
            [2] I first learned this concept when I was designing trade show and museum exhibits; it applies just as much for physical experiences as virtual ones. Just like a printed page, every inch of an environment is an opportunity to communicate, yours to squander or optimize.
          </span>
          <Link href="/blog/082325">
            [3] Immersion through Integration strategy
          </Link>
          <Link href="https://builder-proto.vercel.app" target="_blank">
            [4] Onboarding prototype
          </Link>
        </div>
      </section>
    </main>

    <Footer />
    </>
  )

}