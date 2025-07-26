import { X, Check, AlertTriangle, AlertCircle } from "lucide-react"
import { useEffect } from "react"

interface NotificationToastProps {
  type: 'success' | 'warning' | 'error'
  title: string
  message: string
  onClose: () => void
  isVisible: boolean
}

export function NotificationToast({ type, title, message, onClose, isVisible }: NotificationToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <Check className="w-5 h-5 text-green-500" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-white" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-white" />
      default:
        return <Check className="w-5 h-5 text-green-500" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-[#F2F2F2]'
      case 'warning':
        return 'bg-yellow-500'
      case 'error':
        return 'bg-red-500'
      default:
        return 'bg-[#F2F2F2]'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div 
        className="bg-white rounded-lg shadow-lg border border-gray-200 flex overflow-hidden"
        style={{
          width: '445px',
          height: '76px'
        }}
      >
        {/* Icon section */}
        <div className={`${getBgColor()} w-12 flex items-center justify-center`}>
          {getIcon()}
        </div>
        
        {/* Content section */}
        <div className="flex-1 p-3 relative flex flex-col justify-center">
          <button
            onClick={onClose}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#777777] hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h4 className="text-[14px] font-semibold text-black mb-1">
            {title}
          </h4>
          <p className="text-[14px] font-normal text-[#777777]">
            {message}
          </p>
        </div>
      </div>
    </div>
  )
} 