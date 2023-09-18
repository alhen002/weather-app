interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return <p className={`paragraph ${className}`}>{children}</p>;
}
