import { toast } from "react-toastify"

interface NotificationProps {
  type: 'success' | 'error'
  message: string
}

export function notify({ type, message }: NotificationProps){
  type === 'success' ?
    toast.success(message, {
      position: 'top-right'
    })
    :
    toast.error(message, {
      position: 'top-right'
    })
}