import { forwardRef } from 'react'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  className?: string
  disabled?: boolean
  name?: string
  id?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      value,
      placeholder = 'Select an option',
      onChange,
      className = '',
      disabled = false,
      name,
      id,
    },
    ref
  ) => {
    return (
      <div className={`relative ${className}`}>
        <select
          ref={ref}
          value={value || ''}
          onChange={e => onChange?.(e.target.value)}
          disabled={disabled}
          name={name}
          id={id}
          className={`
          w-full px-4 py-2 pr-10 appearance-none border rounded-lg transition-colors
          bg-white dark:bg-gray-800 
          border-gray-300 dark:border-gray-700
          text-gray-900 dark:text-gray-100
          hover:border-gray-400 dark:hover:border-gray-600
          focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 
          focus:ring-2 focus:ring-blue-500/20
          disabled:opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-100 dark:disabled:bg-gray-700
        `}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    )
  }
)

Select.displayName = 'Select'
