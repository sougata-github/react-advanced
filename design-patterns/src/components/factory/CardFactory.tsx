import {
  ComponentConfig,
  ImageCardProps,
  ProfileCardProps,
  TextCardProps,
} from "../../types";

const CardFactory = <T,>({ type, data }: ComponentConfig<T>) => {
  switch (type) {
    case "image":
      return <ImageCard {...(data as ImageCardProps)} />;
    case "profile":
      return <ProfileCard {...(data as ProfileCardProps)} />;
    case "text":
      return <TextCard {...(data as TextCardProps)} />;
    default:
      return <p>Invalid card type</p>;
  }
};

const ImageCard = ({ src, alt }: ImageCardProps) => {
  return (
    <div className="rounded-lg shadow p-4 m-[10px]">
      <img src={src} alt={alt} className="size-20 rounded-lg" />
    </div>
  );
};

const ProfileCard = ({ name, bio, avatar }: ProfileCardProps) => {
  return (
    <div className="rounded-lg shadow p-4 m-[10px]">
      <img
        src={avatar}
        alt={`${name} profile`}
        className="h-36 w-60 rounded-lg my-1"
      />
      <h3 className="text-lg">{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

const TextCard = ({ text }: TextCardProps) => {
  return (
    <div className="rounded-lg shadow p-4 m-[10px]">
      <p>{text}</p>
    </div>
  );
};

export default CardFactory;
