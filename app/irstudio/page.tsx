/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Fig from "../components/pFig"
import Para from "../components/para"
import PH3 from "../components/pHead"
import Vid from "../components/Vid"

import { Cormorant, Cormorant_Upright, Space_Mono } from "next/font/google"
const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export default function Home() {

  return (
    <>
    <Image src="/projects/ir-studio/studio-header.png" alt="iR Studio cover image" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>iR Studio</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>
        An immersive web creation platform and editor tools for publishing interactive 3D experiences.
      </p>
    </header>

    <section className="projectGoalsSection">
      <div className="col">
        <h2>Project Goals</h2>
        <ul>
          <li>Revise the Editor UX for general release to non-technical users</li>
          <li>Improve 3D asset discoverability and clarify information architecture in the file browser</li>
          <li>Align the design system with other iR products and prepare it for expansion</li>
          <li>Build design team processes for collaboration with developers and QA</li>
        </ul>
      </div>
      <div className="col">
        <h2>Materials & Processes</h2>
        <ul>
          <li>Design system architecture and component library in Figma and Storybook</li>
          <li>Information architecture for editor controls and asset/file hierarchy</li>
          <li>Research, competitive analysis and user acceptance testing</li>
          <li>Interaction design and prototyping with TypeScript and three.js</li>
          <li>UX content writing for labels, inline help and onboarding</li>
        </ul>
      </div>
      <div className="col">
        <h2>Products of Design</h2>
        <ul>
          <li>Unified file and asset browser with search, tagging and progressive loading</li>
          <li>Standardized properties panels with consistent controls and inline help</li>
          <li>Redesigned viewport navigation supporting direct manipulation and familiar gestures</li>
          <li>Setup assistant for onboarding and world publishing</li>
          <li>Expanded design system shared across iR products</li>
        </ul>
      </div>
    </section>

    <main className="project fullPageContentSection">

      <PH3>Context</PH3>

      <Para txt={`
      Ethereal Engine was created independently as a web-based 3D engine aimed at bringing multiplayer experiences with near-native performance and graphical quality to any platform compatible with open web standards like WebGL and WebXR. Like Unity or Unreal Engine, it provided a scene editor environment and the ability to build and distribute scenes to run anywhere.
      `} paddingBottom />

      <Fig
        src="/projects/ir-studio/lineage.jpg"
        alt="The company and product names of iR Studio changed over time. Here's my best attempt at diagramming how the terms evolved with acquisition and rebranding."
        number={1}
        left
      />

      <Para txt={`
      After acquisition by Infinite Reality, Ethereal Engine expanded to become the core product offering of the company, which focused on using immersive technologies to empower small businesses with an on-ramp to the spatial web, much like Squarespace had simplified creating modern websites.
      `} paddingTop />

      <PH3>New Perspective</PH3>

      <Para txt={`
      I joined the company after that acquisition, before public launch, to lead the design of the engine's editor and publishing experience. My many years of experience with 3D creation tools and game engines gave me useful technical context and behavioral expectations, but for our target customers, aligning with more common interactions and bringing clarity to complex multidimensional operations was more important than aligning with other 3D tools.
      `} paddingBottom />

      <Fig
        src="/projects/ir-studio/editor-window.jpg"
        alt="Editor window with quadrants identified, clockwise from top-left: Viewport, Scene Hierarchy, Properties, Assets Panel."
        number={2}
        right
      />

      <Para txt={`
      The editor interface is roughly organized into quadrants, from top-left: the Viewport, Scene Hierarchy, Properties, and Assets Panel. Its growth to this point had been largely developer-driven and design hadn't been considered from a top-down perspective or undergone critique from someone outside the core engineering. My assessment was that it was packed with features, but UI inconsistency and unclear information architecture buried useful things under vestiges of debugging.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/ir-studio/behaviors.jpg"
        alt="I produced a full audit of current editor behaviors and wrote documentation of expected or desired behaviors to guide design decisions."
        number={3}
        left
      />

      <Para txt={`
      As we quickly approached general release, I considered design improvements per quadrant to expedite implementation. Being able to complete a smaller portion and distribute new features to beta testers early allowed us to gather feedback and test new ideas before committing to a full redesign. 
      `} paddingTop />

      <PH3>Untangling Assets</PH3>

      <Para txt={`
      Our first major undertaking was to address the tangled file system. Early testing revealed that creators could not tell the difference between core engine files, project files and user-imported assets. Much of what appeared in the file browser was irrelevant or dangerous to modify. To clarify ownership and reduce clutter, I merged the Files and Assets tabs into a single hierarchy. In this unified browser, “Assets” became a special class of file that could live either in the engine's library or in the project, while irrelevant files were hidden from view.
      `} paddingBottom />

      <Fig
        src="/projects/ir-studio/assets-panel.jpg"
        alt="Diagram of new Assets panel architecture, with new and updated features called out."
        number={4}
        right
      />

      <Fig
        src="/projects/ir-studio/asset-search.jpg"
        alt="Diagram of new Search panel features, including advanced filtering and saved searches."
        number={5}
        left
      />

      <Para txt={`
        To improve perceived performance, long folders were loaded progressively on scroll, paginated dynamically. The order of animation and presentation of UI elements were crucial for making this process clear and responsive, and I fully prototyped the system with usable code for implementation. See footnote <strong>[2]</strong> below for an interactive prototype.
      `} paddingTop paddingBottom />

      <Vid
        src="/projects/ir-studio/loaderproto.mp4"
        alt="Screen recording of prototype for progressive loading of large asset files in the file browser, and navigation through the list. Interactive prototype on CodePen is linked below in footnote [2]. (VIDEO)"
        number={6}
        right
      />

      <Para txt={`
      Part of iR Studio's strategy to appeal to non-technical customers included a massive catalog of pre-built 3D assets—architectural elements, props, displays, visual effects—that could be assembled together into a complete scene without importing any custom models. The new combined browser architecture clarified those asset's relationship to the Engine and individual projects. A new Search tab allowed for a greatly expanded filtering and advanced search interface, including saved searches and custom tagging that solved some of the tedium of finding and keeping track of assets.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/ir-studio/saving-searches.jpg"
        alt="Excerpt from design documentation package showing some of how Saved Searches work. Assets can also be saved directly to favorites from the toolbar or context menu."
        number={7}
        left
      />

      <PH3>Direct Manipulation</PH3>

      <Para txt={`
      The initial Viewport interaction model centered on gizmos for translate / rotate / scale operations and arbitrary, non-standard keyboard shortcuts. Every non-geometric entity (lights, spawn points, portals, collisions) had a different visual representation, making selections unclear and unpredictable. Studying our target audience, we concluded that they were much more likely to be familiar with lightly-creative productivity tools like PowerPoint, Keynote and Canva than with professional 3D modeling software. I rebuilt the Viewport's entity representations around simplified, standardized icons and a direct manipulation model that prioritized natural gestures: point and click to select objects, drag to move them freely, and optionally use modifier keys to access alternative modes. These changes made navigating and editing a 3D scene feel more like editing a slide deck than programming a game.
      `} paddingBottom />

      <Fig
        src="/projects/ir-studio/viewport-icons.jpg"
        alt="New iconography for entity types in the Viewport. Wireframe object representations rendered in the view were replaced with clear vector icons drawn to the canvas."
        number={8}
        right
      />

      <Para txt={`
      Direct manipulation and larger, simpler elements at the origin point of nodes were also chosen for suitability on touch devices and, eventually, in a WebXR editor. While these design choices were well informed by research, they represented a major change to how the editor worked—and possibly controversial to the Engine core team that had only known the old way. My design process heavily emphasizes native prototyping; I use it to make design decisions, but it's also incredibly helpful for aligning the team on big changes. See footnote [3] for a fully interactive prototype of the new Viewport navigation experience.
      `} paddingTop paddingBottom />

      <Vid
        src="/projects/ir-studio/viewport.mp4"
        alt="Screen recording of prototype for object selection and manipulation in the viewport. Clicking and dragging moves all objects on the XZ plane, holding shift while dragging moves them along the Y axis. Option/Alt rotates around the Y axis. Choosing to use gizmos for manipulation switches to a simpler icon style to make room for the gizmo. Full interactive prototype can be seen at the link in footnote [3]. (VIDEO)"
        number={9}
        left
      />

      <PH3>Pruning Components</PH3>

      <Para txt={`
      iR Engine is built on an entity-component system (ECS) where functionality is added via components. In the Editor interface, each component on an entity adds a section to its Properties panel; some components also automatically added supporting components, which came with their own properties, too. Up to this point, Properties were assembled in an ad-hoc manner, exposing every possible option in the quickest way possible for development—the kitchen sink, filled with unvalidated text inputs and every possible form and alignment of button, checkbox, and pulldown menu.
      `} />

      <Para txt={`
      Imposing order on the Properties panel required two steps in parallel: editing down content, and systematizing their implementation.
      `} paddingBottom />

      <Fig
        src="/projects/ir-studio/properties-edit.jpg"
        alt="Stylized example from design documentation describing how media component properties were combined and simplified. This process was done for every other properties panel."
        number={10}
        right
      />

      <Para txt={`
      To reduce the complexity of the Properties presented, we first combined components with their dependencies. A “video” component, for example, would also require a “media” component to specify its file source—removing it would break the functionality, so who would ever do that intentionally? We put them together everywhere possible, reducing the opportunity for unintentional breakage and strengthening the relationship between dependent components. Next, I audited the options within each component and simplified or removed any options with unclear purposes, or that were only useful for debugging. If default values performed better than any adjustments, the option was removed. 
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/ir-studio/properties.jpg"
        alt="Example of documentation for properties panel behaviors and design patterns, with inline help text toggled on."
        number={11}
        left
      />

      <Para txt={`
      Disparate (or arbitrary) styles within and between Properties panels were reconciled into a single pattern library. Our design system was built to be shared among several product surfaces: the SaaS dashboard, web scene viewer, mobile apps—and the Editor, which had some special needs not served by the existing system. We needed a set of components that responded well to adjustable panel sizes and maximized information density while remaining clear and orderly. I led the design team to reconfigure the system around simpler components, variables and other tokens that could be branched to create more appropriate subsystems when needed. We also introduced Storybook to better include designers in the development process and build visual QA into code reviews.
      `} paddingTop paddingBottom />

      <Fig
        src="/projects/ir-studio/components.png"
        alt="A (very small) sampling of the unique design sytem developed for component Properties. New components were introduced to increase information density and clarity with consistent alignments and typographical hierarchy."
        number={12}
        right
      />

      <Para txt={`
      The Properties panel automatically populates to reflect the active selection in the Viewport, but because the Assets panel can also have a simultaneous active selection there was an unclear hierarchy of “active-ness” in the interface as a whole. To help clear this up, I introduced a new tab to the Properties panel for an Inspector, giving both selection types an equivalent reflection of state and removing modal behaviors. 
      `} paddingTop />

      <PH3>Setup Assistant</PH3>

      <Para txt={`
      Even with a refined editor, product leadership felt that the Editor concept was too intimidating to target customers. To lower the barrier to entry, the design team built a wizard-style onboarding flow that emphasized pre-built templates and connections with Shopify to populate e-commerce content. The Setup Assistant flow was presented as an equivalent option when creating new scenes and projects.
      `} paddingBottom />

      <Fig
        src="/projects/ir-studio/setup-assistant.jpg"
        alt="While working on iR Studio's successor, I redesigned the Setup Assistant using the new design system developed for World Builder and a stronger emphasis on customization and customer content. This design was intended to expedite deployment of new ideas for testing and give the product one final push until its replacement was ready. This reimagined Assistant was not implemented before iR Studio was sunsetted."
        number={13}
        left
      />

      <Para txt={`
      Qualitative user testing revealed some clear limitations of the “wizard” flow that were in conflict with the desire to simplify onboarding: it went too far. Creators felt railroaded into prescriptive environments that didn't fit their branding; the low visual quality of template assets, poor rendering performance and unpredictable controls were off-putting. The majority of new users dropped off after the first step that showed template models in a 3D view. 
      `} paddingTop />

      <Para txt={`
      iR Studio launched to general availability with some adjustments to the Assistant. Another team in the company had been working toward building an LLM-powered interface, and some of the conceptual work I had partnered with them on was integrated as a contextual understanding step to drive template suggestions and default values meant to increase success rates. At the point of launch, however, it was clear that an Agentic approach to constructing scenes was far more accessible and appealing to potential customers, and I shifted focus to lead the development of that product. Part two of this story continues in the World Builder case study—see footnote [4] or find it in the Projects list!
      `} paddingBottom />

      <section className="footnotes">
        <div className="col">🔗</div>
        <div className={`links ${spaceMono.className}`}>
          <Link href="https://www.napster.ai/news/infinite-reality-the-global-leader-in-immersive-experiences-acquires-spatial-web-pioneer-ethereal-engine" target="_blank">
            [1] Press Release: Acquisiton of Ethereal Engine
          </Link>
          <Link href="https://codepen.io/smcaruso/full/eYqdzJM" target="_blank">
            [2] Assets Panel progressive loading prototype
          </Link>
          <Link href="https://viewport-proto.vercel.app" target="_blank">
            [3] Viewport interaction model prototype
          </Link>
          <Link href="/worldbuilder">
            [4] World Builder
          </Link>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )

}