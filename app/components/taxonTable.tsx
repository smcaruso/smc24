interface TableProps {
  number?: number;
  left?: boolean;
  right?: boolean;
}

export default function WBTaxonomyTable({ number, left, right }: TableProps) {
  return (
    <figure className={`project-image ${left ? "left" : "right"}`}>
      <div className="justify">
        {right && <div className="col">{`Fig ${number || 1}`}</div>}
        <table className="taxonomy-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>General Meaning</th>
              <th>Studio Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Buildout</td>
              <td>improvements or modifications made to a space</td>
              <td>customizations made to the <strong>Structure</strong> of a <strong>Set</strong></td>
            </tr>
            <tr>
              <td>Collection</td>
              <td>an ordered grouping of items</td>
              <td>a defined group of <strong>Content</strong> and/or <strong>Set Pieces</strong> derived from an existing <strong>Set</strong> or used to create and fill a new one</td>
            </tr>
            <tr>
              <td>Content</td>
              <td>information in a website or other medium</td>
              <td>all-inclusive term for objects and information that can appear as <strong>Set Pieces</strong> or be presented by an interaction with them</td>
            </tr>
            <tr>
              <td>Kit</td>
              <td>a set of parts or tools relating to a common task</td>
              <td><strong>Props</strong> and <strong>Structure</strong> conforming to a <strong>Template&#39;s Style</strong></td>
            </tr>
            <tr>
              <td>Project</td>
              <td>a planned body of work sharing a common goal</td>
              <td>a workspace containing <strong>Spaces</strong> and <strong>Content</strong> that are aware of one another and possibly connected together</td>
            </tr>
            <tr>
              <td>Prop</td>
              <td>a movable (nonstructural) object on the set of a play or movie that actors can interact with</td>
              <td>a kind of <strong>Set Piece</strong> that is non-structural</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>the function performed by a person or thing in a given situation</td>
              <td>a status of a <strong>Set Piece</strong> giving it certain behaviors and interactivity</td>
            </tr>
            <tr>
              <td>Scene</td>
              <td>a sequence of continuous action; events that occur on a set</td>
              <td>a specified view of a <strong>Set</strong> with specific <strong>Roles</strong> associated with <strong>Set Pieces</strong> on the <strong>Set</strong></td>
            </tr>
            <tr>
              <td>Set</td>
              <td>a group of things that belong together, used together in a scene</td>
              <td>a discrete collection of objects including <strong>Structure</strong> and <strong>Set Pieces</strong> assembled into a unit</td>
            </tr>
            <tr>
              <td>Kit Piece</td>
              <td>a part of a set, including structures and props</td>
              <td>an object that is placed in or is part of a <strong>Set</strong></td>
            </tr>
            <tr>
              <td>World</td>
              <td>an unoccupied area rented as a place of business</td>
              <td>the area inclusive of all <strong>Sets</strong> in a project that can be published</td>
            </tr>
            <tr>
              <td>Structure</td>
              <td>a building or other thing assembled from many parts</td>
              <td>the underlying geometry and <strong>Style</strong> of a <strong>Set</strong> that can be modified with a <strong>Buildout</strong> and provides a boundary that can be populated with <strong>Set Pieces</strong></td>
            </tr>
            <tr>
              <td>Style</td>
              <td>a distinctive appearance aligning to a greater theme</td>
              <td>specific materials and visual themes that a <strong>Template&#39;s Kit</strong> conform to</td>
            </tr>
            <tr>
              <td>Theme</td>
              <td>a preset format that can be copied to create new items in a similar style</td>
              <td>a container for <strong>Styles</strong> and <strong>Kits</strong> that determine default settings and suggested <strong>Buildouts</strong> and <strong>Set Pieces</strong></td>
            </tr>
          </tbody>
        </table>
        {!right && <div className="col">{`Fig ${number || 1}`}</div>}
      </div>
      <div className="mobileTableCaption">I&#39;ve spared you this massive table since you&#39;re on a tiny screen. Rotate to landscape to view it.</div>
      <figcaption>Information architecture for World Builder depended on a clear taxonomy inspired by theatrical metaphors. We found or synthesized common definitions of these terms to make sure our technical definitions aligned with non-technical users&#39; expectations.</figcaption>
    </figure>
  )
}