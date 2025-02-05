import React from "react";

type TechChipProps = {
  label: string;
};

export default function TechChip({ label }: TechChipProps) {
  return (
    <span className="inline-block px-3 py-1 bg-zinc-700 text-zinc-100 text-sm font-medium rounded-full">
      {label}
    </span>
  );
}