import { Star } from "lucide-react";

interface IRatingProps {
  value: number;
  max?: number;
  readOnly?: boolean;
}

export function Rating({ value, max = 4, readOnly = true }: IRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <Star key={i} size={18} className="fill-cyan-400 text-cyan-400" />
      ))}
    </div>
  );
}
