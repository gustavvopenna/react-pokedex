interface InfoItemProps {
  label: string,
  variant?: 'default' | 'active' | 'inactive'
}

function InfoItem({ variant = 'default', label }: InfoItemProps) {
  return (
    <div className='px-2 py-1 text-sm font-semibold text-slate-800 bg-gray-100 rounded-3xl uppercase'>{label}</div>
  )
}

export default InfoItem;