import { useContext, useEffect } from "react"
import NotificationContext from "../context/NotificationContext"

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        dispatch({ type: 'clear' })
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [notification.message])
  if (!notification.message) return null

  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification
