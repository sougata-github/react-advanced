export interface ImageCardProps {
  src: string;
  alt: string;
}

export interface TextCardProps {
  text: string;
}

export interface ProfileCardProps {
  name: string;
  bio: string;
  avatar: string;
}

export type ComponentConfig<T> = {
  type: "profile" | "text" | "image";
  data: T;
};
