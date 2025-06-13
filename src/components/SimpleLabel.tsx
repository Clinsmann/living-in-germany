import { twMerge } from 'tailwind-merge'

export const SimpleLabel = ({ label, className }: { label: string; className?: string }) => {
  return (
    <div className={twMerge('text-xs text-gray-500 dark:text-gray-400', className)}>{label}</div>
  )
}

export const SimpleTitle = ({ title }: { title: string }) => {
  return <span className="text-gray-600 dark:text-gray-400">{title}</span>
}
