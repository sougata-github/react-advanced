const ButtonFactory = (
  type: "primary" | "secondary" | "danger",
  label: string
) => {
  switch (type) {
    case "primary":
      return <PrimaryButton label={label} />;
    case "secondary":
      return <SecondaryButton label={label} />;
    case "danger":
      return <DangerButton label={label} />;
    default:
      return <button className="p-4 border">{label}</button>;
  }
};

const PrimaryButton = ({ label }: { label: string }) => {
  return <button className="rounded-lg px-5 py-2 bg-teal-500">{label}</button>;
};

const SecondaryButton = ({ label }: { label: string }) => {
  return <button className="rounded-lg px-5 py-2 bg-black/5">{label}</button>;
};

const DangerButton = ({ label }: { label: string }) => {
  return <button className="rounded-lg px-5 py-2 bg-red-500">{label}</button>;
};

export default ButtonFactory;
