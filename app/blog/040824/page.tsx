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
    <Image src="/blog/batswarm.png" alt="Hawkins Heroes gameplay" width={1512} height={554} style={{ width: "100%", height: "" }} className="cover-image"></Image>
    <header className="fullPageContentHeader">
      <h1 className={`${cormorantUpright.className} fullPageContentTitle`}>Hawkins Heroes 3D Asset Optimization Pipeline</h1>
      <p className={`${cormorant.className} fullPageContentDescription`}>April 08, 2024</p>
    </header>
    <main className="project fullPageContentSection">

      <Para txt={`
        <em>The following is a partial reproduction of the documentation provided to our client summarizing the asset pipeline techniques we developed for translating their VFX assets from </em>Stranger Things<em> to game-ready assets in Unity.</em>
      `} paddingTop />

      <PH3>The Demobat</PH3>

      <Fig
        src="/blog/hh-01.png"
        alt="General overview of the optimization process for VFX assets."
        number={1}
        left
      />

      <Para txt={`
        The high-level VFX assets of the Demobat creature were an ideal candidate for demonstrating an optimization process including retopology and rigging for in-game animation.
      `} paddingTop paddingBottom />

      <Fig
        src="/blog/hh-02.png"
        alt="Optimized Demobat model with retopology and baked normal maps."
        number={2}
        right
      />

      <Para txt={`
        The assets provided were of a very high level of detail (LOD)—great for visual effects but too resource-heavy to use in-game when duplicated many times in the “Demobat Assault” phase of gameplay. Benchmark testing on the iPad Air (5th Generation / M1 SoC) proved that we could display the model at full detail, but only in isolation. Placing it in an environment of our target quality resulted in unacceptable performance with more than one instance on screen at a time.
      `} paddingTop />

      <Para txt={`
        We were provided with four models of the Demobat, one with a lower LOD (~150,000 triangles), and three high-LOD models with variations in the edges of their wings. All files were in native Autodesk Maya format, with conversions to Alembic for interchange with other software packages.
      `} />

      <Para txt={`
        This file was chosen as a starting point for optimization because it had the most complete geometry and useful information for later baking into optimized textures. The lower-LOD model was still too high-poly to use in the quantities we wanted, and was missing the detailed normals information that this one had.
      `} />

      <Para txt={`
        All models did include texture information, tiled into 78 UDIMs. These were discarded, as it would be impossible to match new topology to the existing UV maps and optimization would require a reduction to a single UV tile.
      `} />

      <Fig
        src="/blog/hh-03.png"
        alt="Unmodified import showing relative normals and wireframe and detail of original topology near wing joints. Self-intersection interferes with animation."
        number={3}
        left
      />

      <PH3>Decimation</PH3>

      <Para txt={`
        A first attempt at optimization was simply applying a decimation modifier on the imported geometry with 2 iterations of un-subdivision to preserve quad edge flow. This did reduce the polygon count to a useful 22,000 triangles, but more complex areas did not deform well during animation tests.
      `} paddingBottom />

      <Fig
        src="/blog/hh-04.png"
        alt="decimated mesh showing relative normals and wireframe."
        number={4}
        right
      />

      <Para txt={`
        This decimated mesh was used to project newly drawn topology onto for the next step.
      `} paddingTop />

      <PH3>Retopology</PH3>

      <Para txt={`
        To achieve a reasonable polygon count (~20,000 triangles) with topological flow that is easily deformable during animation, a new mesh was roughly drawn on top of the original mesh and smoothed with a Catmull-Clark subdivision modifier.
      `} paddingBottom />

      <Fig
        src="/blog/hh-05.png"
        alt="Low-poly base mesh and detail of quad edge flow at wing joints."
        number={5}
        left
      />

      <Fig
        src="/projects/hawkinsheroes/normal.gif"
        alt="Final subdivided retopology."
        number={6}
        right
      />

      <PH3>Baked Normals</PH3>

      <Para txt={`
        Finer details present in the original high-LOD model were preserved by projecting the normals of that mesh onto the simplified model. This process reduces smaller pieces of geometry into texture data that is used to influence lighting in the game engine, but does not contribute to the memory footprint or animation deformation of the mesh itself.
      `} />

      <Fig
        src="/blog/hh-06.png"
        alt="Single-tile UV map of the model overlaid on normal map texture and simplified mesh with baked normal map applied as an unlit preview texture."
        number={7}
        left
      />

      <PH3>Rigging and Animation</PH3>

      <Para txt={`
        The smoothly retopologized mesh was then attached to an animation rig with bones for the major wing and body segments, omitting some of the finer details like mouth and claws that were not included in the simplified mesh. This allowed us to create multiple animation tracks, including a wing-flapping flight loop, attack movements, and a pose for the bat to transition to when killed by the player.
      `} />

      <Fig
        src="/blog/hh-bat-anim.gif"
        alt="Section of the cyclical flight animation overlaid with the symmetrical animation rig."
        number={8}
        right
      />

      <PH3>Future Pipeline Recommendations</PH3>

      <Para txt={`
        <strong>Adopt USD Workflows</strong>
      `} />

      <Para txt={`
        The Virtual Production projects made with Unreal Engine contain a good number of assets, and could be useful in the specific case that a game is developed with the same engine; mesh, material and environment data is all transferable to a new project or level. These were of limited use to us, though, as our project was built in Unity.
      `} />

      <Para txt={`
        The Universal Scene Description file format is intended to increase compatibility across multiple software packages by storing information in a neutral format while still allowing for interactive use. Unreal Engine supports the use of USD directly as an alternative to its internal formats. This would instantly increase the flexibility of assets used in virtual production. Similarly, using the format in other VFX would increase interoperability between assets used for offline rendering and those used in real-time effects.
      `} />

      <Para txt={`
        <strong>Preserve Surfacing Art</strong>
      `} />
      
      <Para txt={`
        Surface design elements of VFX assets, including texture sets and shaders used by rendering engines, were not available for most of the assets we encountered. For those assets that did include texture sets, they were formatted in a way that was not useful in the game engine.
      `} />

      <Para txt={`
        Including the working art assets for surface design—for example, an Adobe Substance project—would streamline the process of adapting high-resolution, complex textures and shaders for use in-game. 
      `} paddingBottom />

      </main>
    <Footer />
    </>

    ) 

}