const DefaultSlot = () => {
  return (
    <div className="p-20">
      <Card>
        <h1 className="text-lg">Card title</h1>
        <p className="text-base">Card content</p>
        <footer className="text-sm">Card footer</footer>
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 shadow rounded-lg max-w-xs">{children}</div>;
};

export default DefaultSlot;
