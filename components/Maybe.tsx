import { ReactNode } from "react";

interface MaybeProps {
  test: boolean;
  children: ReactNode;
}

export default function Maybe({ test, children }: MaybeProps) {
  return <>{test ? children : null}</>;
}
