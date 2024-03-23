interface Route {
  path: string;
  name?: string;
  element: ReactNode;
  children?: Route[];
  auth?: boolean;
}
