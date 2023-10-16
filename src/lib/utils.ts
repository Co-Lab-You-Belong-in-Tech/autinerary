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

export function formatRelativeDate(inputDate: Date): string {
  const currentDate = new Date();
  const timeDifferenceInSeconds = Math.floor((currentDate.getTime() - inputDate.getTime()) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} second${timeDifferenceInSeconds === 1 ? '' : 's'} ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (timeDifferenceInSeconds < 604800) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else {
    return inputDate.toLocaleDateString();
  }
}
