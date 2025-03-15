interface ProjectHeadingProps {
  children: React.ReactNode;
}

export default function PH3({ children }: ProjectHeadingProps) {
  return (
    <div className="h3">
      <h3>{children}</h3>
    </div>
  );
}