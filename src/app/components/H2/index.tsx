import { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

export function H2({ children }: H2Props) {
  return (
    <h2 className="text-xl font-bold border-b border-black pb-1 mb-2">
      {children}
    </h2>
  );
}

H2.displayName = "H2";
