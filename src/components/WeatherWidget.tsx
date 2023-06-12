import { IconType } from "react-icons"

interface WidgetProps {
  title: string
  value: string
  Icon: IconType
}

export function WeatherWidget({ title, value, Icon }: WidgetProps) {
  return (
    <div className='flex flex-row p-6 rounded-md items-center justify-center border-2 border-gray-200'>
      <Icon size={24} />

      <div className='flex flex-1 flex-col items-end'>
        <span className='text-sm text-gray-400'>
          {title}
        </span>

        <span className='text-md font-bold'>
          {value}
        </span>
      </div>
    </div>
  )
}