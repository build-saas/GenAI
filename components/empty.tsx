import Image from "next/image";
import React from "react";

interface EmptyProps {
  label: string;
}
export const Empty: React.FC<EmptyProps> = ({ label }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image fill src="/empty.png" alt="Empty" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
