import { HTMLAttributes, ReactNode } from "react";
import { type ClassNameValue, twMerge } from "tailwind-merge";

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export function List({ children, className = "" }: ListProps) {
  const defaultStyles = "list-disc list-inside";

  return (
    <ul className={twMerge(defaultStyles, className as ClassNameValue)}>
      {children}
    </ul>
  );
}

List.displayName = "List";
