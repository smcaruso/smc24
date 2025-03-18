interface ProjectFigureProps {
  src: string;
  alt: string;
  number?: number;
  left?: boolean;
  right?: boolean;
}

export default function Vid({ src, alt, number, left, right }: ProjectFigureProps) {
  return (
    <figure className={`project-image video ${left ? "left" : "right"}`}>
      <div className="justify">
        {right && <div className="col">{`Fig ${number || 1}`}</div>}
        <video src={src} width={1920} height={1080} style={{ width: "100%", height: "" }} controls playsInline loop />
        {!right && <div className="col">{`Fig ${number || 1}`}</div>}
      </div>
      <figcaption>{alt}</figcaption>
    </figure>
  )
}