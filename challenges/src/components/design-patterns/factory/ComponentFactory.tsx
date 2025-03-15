import {
  ButtonProps,
  CardProps,
  ComponentConfig,
  ModalProps,
} from "../../../types";

const ComponentFactory = <T,>({ type, data }: ComponentConfig<T>) => {
  switch (type) {
    case "button":
      return (
        <Button
          label={(data as ButtonProps).label}
          onClick={(data as ButtonProps).onClick}
          disabled={(data as ButtonProps).disabled}
        />
      );
    case "card":
      return <Card {...(data as CardProps)} />;
    case "modal":
      return <Modal {...(data as ModalProps)} />;
    default:
      return <p>Please provide valid component type</p>;
  }
};

const Modal = ({ header, content, footer }: ModalProps) => {
  return (
    <div className="bg-black/5 rounded-lg px-4 py-6 cursor-pointer">
      <h2>{header}</h2>
      <p>{content}</p>
      <footer>{footer}</footer>
    </div>
  );
};

const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-fit px-4 py-2 bg-black/10 rounded-lg hover:bg-black/5 transition-all"
    >
      {label}
    </button>
  );
};

const Card = ({ title, content, footer }: CardProps) => {
  return (
    <div className="px-4 py-6 rounded-lg shadow cursor-pointer">
      <h3>{title}</h3>
      <p>{content}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default ComponentFactory;
