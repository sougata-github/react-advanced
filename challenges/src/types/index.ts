export interface AccessControlProps {
  roles: string[];
  fallbackComponent: React.ComponentType;
}

export interface InjectedProps {
  userName?: string;
  userPermissions?: string[];
}

export interface BaseComponentProps extends InjectedProps {
  message: string;
}

export interface ModalProps {
  header: string;
  content: string;
  footer: string;
}

export interface CardProps {
  title: string;
  content: string;
  footer: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

export type ComponentConfig<T> = {
  type: "button" | "card" | "modal";
  data: T;
};

export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T]) => React.ReactNode;
}

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
};
