interface ProjectParagraphProps {
  txt: string;
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

export default function Para({ txt, paddingTop, paddingBottom }: ProjectParagraphProps) {
  return (
    <div className="p">
      <p
        style={{
          paddingTop: paddingTop ? "2rem" : "1rem",
          paddingBottom: paddingBottom ? "2rem" : "1rem",
        }}
        dangerouslySetInnerHTML={{ __html: txt }}
      />
    </div>
  )
}