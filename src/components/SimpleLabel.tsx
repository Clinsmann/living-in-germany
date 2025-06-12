export const SimpleLabel = ({ label }: { label: string }) => {
  return <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
}

export const SimpleTitle = ({ title }: { title: string }) => {
  return <span className="text-gray-600 dark:text-gray-400">{title}</span>
}
