import { AccessControlProps } from "../../../types";
import BaseComponent from "./BaseComponent";

const currentUserRole = "admin";

const withAccessControl = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P & AccessControlProps) => {
    const { roles, fallbackComponent: Fallback, ...restProps } = props;

    const hasAccess = roles.includes(currentUserRole);

    if (!hasAccess) {
      return <Fallback />;
    }

    return <Component {...(restProps as P)} />;
  };
};

export const Auth = withAccessControl(BaseComponent);
