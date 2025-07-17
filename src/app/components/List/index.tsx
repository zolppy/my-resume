import { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

export function List({ children }: ListProps) {
  return <ul className="list-disc pl-5">{children}</ul>;
}

List.displayName = "List";
