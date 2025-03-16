const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-md rounded-lg p-4 shadow hover:-translate-y-1.5 transition duration-200 cursor-pointer">
      {children}
    </div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-2 text-sm font-medium">{children}</div>;
};

const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <footer className="text-xs">{children}</footer>;
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
