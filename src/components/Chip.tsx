import { typeColors } from "../helpers/typeColors";

function Chip({ label }: { label: string}) {
  return (
    <div
      className="px-2 py-1 text-sm font-bold text-slate-800 rounded-md uppercase"
      style={{ backgroundColor: `${typeColors[label]}` }}
    >
      {label}
    </div>
  )
}

export default Chip;