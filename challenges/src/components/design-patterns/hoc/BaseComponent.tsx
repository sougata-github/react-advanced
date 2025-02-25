import { BaseComponentProps } from "../../../types";

const BaseComponent = ({
  message,
  userName,
  userPermissions,
}: BaseComponentProps) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>Welcome {userName}</p>
      <p>Your permissions: {userPermissions?.join(", ")}</p>
    </div>
  );
};

export default BaseComponent;
