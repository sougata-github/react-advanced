const CompoundSlot = () => {
  return (
    <div className="p-20">
      <Card>
        <Card.Title>Card title</Card.Title>
        <CardContent>Card content</CardContent>
        <Card.Footer>Card footer</Card.Footer>
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-xs rounded-lg p-4 shadow">{children}</div>;
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-lg">{children}</h2>;
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-base">{children}</div>;
};

const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <footer className="text-sm">{children}</footer>;
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default CompoundSlot;
