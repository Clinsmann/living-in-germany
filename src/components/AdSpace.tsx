import { SimpleLabel, SimpleTitle } from './SimpleLabel'

export const AdSpace = () => {
  return (
    <aside className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm mb-6 p-4 text-center border border-gray-200 dark:border-gray-800 transition-colors duration-200 flex flex-col items-center justify-center gap-1">
      <SimpleTitle title="Advertisement" />
      <SimpleLabel label="Your ad could be here" />
    </aside>
  )
}
