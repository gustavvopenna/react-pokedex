import { statsMap } from "../helpers/statsMap";

interface StatProps {
  stat: string,
  base_stat: string
}

function Stat({ stat, base_stat }: StatProps) {
  return (
    <div className="bg-gray-100 p-1 rounded-full">
      <div
        style={{ backgroundColor: statsMap[stat].color }}
        className="rounded-full text-xs font-bold w-8 h-8 flex justify-center items-center"
      >
        {statsMap[stat].label}
      </div>
      <div className="text-slate-800 font-semibold text-sm py-1">{base_stat}</div>
    </div>
  )
}

export default Stat;