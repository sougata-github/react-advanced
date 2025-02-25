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
