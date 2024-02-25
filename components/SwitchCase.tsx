import { ReactNode } from "react";

interface SwitchCaseProps {
  tests: { test: Boolean; component: ReactNode }[];
  defaultComponent: ReactNode;
}

const SwitchCase = ({ tests, defaultComponent }: SwitchCaseProps) => {
  const filteredTarget = tests.find(({ test }) => test);
  let targetNode = null;

  if (filteredTarget) {
    targetNode = filteredTarget.component;
  } else if (defaultComponent) {
    targetNode = defaultComponent;
  }
  return <>{targetNode}</>;
};

export default SwitchCase;
