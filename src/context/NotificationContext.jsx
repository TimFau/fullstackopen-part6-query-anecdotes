import { createContext, useReducer } from "react";

const notificationReducer = (state, action) => {
    console.log('notificationReducer', state, action)
    switch (action.type) {
        case 'vote':
            return {
                message: `You voted for "${action.content}"`
            }
        case 'new':
            return {
                message: `You created "${action.content}"`
            }
        case 'anecdotError':
            return {
                message: 'Anecdote too short, must be 5 characters or longer.'
            }
        case 'clear':
            return {
                message: ''
            }
        default:
            return state
    }
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