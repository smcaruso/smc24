import Image from "next/image";

interface ProjectFigureProps {
  src: string;
  alt: string;
  number?: number;
  left?: boolean;
  right?: boolean;
}

export default function Fig({ src, alt, number, left, right }: ProjectFigureProps) {
  return (
    <figure className={`project-image ${left ? "left" : "right"}`}>
      <div className="justify">
        {right && <div className="col">{`Fig ${number || 1}`}</div>}
        <Image src={src} alt={alt || "project image"} width={1512} height={554} style={{ width: "100%", height: "" }} />
        {!right && <div className="col">{`Fig ${number || 1}`}</div>}
      </div>
      <figcaption>{alt}</figcaption>
    </figure>
  )
}