import { createContext, useReducer } from "react";

const notificationReducer = (state, action) => {
    console.log('notificationReducer', state, action)
    if (action.type === 'vote') {
        return {
            message: `You voted for "${action.content}"`
        }
    }
    if (action.type === 'new') {
        return {
            message: `You created "${action.content}"`
        }
    }
    if (action.type === 'clear') {
        return {
            message: ''
        }
    }
    return state
}

const NotificationContext = createContext(null);

const initialNotificationState = {
    message: ''
};

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, initialNotificationState)

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext