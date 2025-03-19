interface CardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const NamedSlot = () => {
  return (
    <div className="p-20">
      <Card
        title={<h1 className="text-lg">Card title</h1>}
        content={<p className="text-base">Card content</p>}
        footer={<footer className="text-sm">Card footer</footer>}
      />
    </div>
  );
};

const Card = ({ title, content, footer }: CardProps) => {
  return (
    <div className="p-4 shadow rounded-lg max-w-xs">
      {title}
      {content}
      {footer}
    </div>
  );
};

export default NamedSlot;
