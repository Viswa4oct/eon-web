export const actionTypes = {
    GET_CLUSTERS: "GET_CLUSTERS",
    CLUSTERS_RECIEVED: "CLUSTERS_RECIEVED"
};

export const actionNotificationsTypes = {
    GET_NOTIFICATIONS: "GET_NOTIFICATIONS",
    NOTIFICATIONS_RECIEVED: "NOTIFICATIONS_RECIEVED",
    NOTIFICATIONS_ERROR: "NOTIFICATIONS_ERROR",
    READ_NOTIFICATIONS: "READ_NOTIFICATIONS",
    NOTIFICATIONS_READ: "NOTIFICATIONS_READ",
    NOTIFICATIONS_READ_ERROR: "NOTIFICATIONS_READ_ERROR",
};


export const actionLoginTypes = {
    LOGGING_OUT:"LOGGING_OUT",
    LOG_OUT: "LOG_OUT",
    GET_USER: "GET_USER",
    USER_RECIEVED: "USER_RECIEVED",
    USER_ERROR: "USER_ERROR",
    POST_USER: "POST_USER",
    SET_USER_FETCHING: "SET_USER_FETCHING",
    GET_CODE: "GET_CODE",
    FORGOT_PASSWORD: "FORGOT_PASSWORD",
    CHANGE_PASSWORD: "CHANGE_PASSWORD",
    GET_EVENT_TYPE: "GET_EVENT_TYPE",
    USER_PROFILE: "USER_PROFILE",
    FETCHED_USER_PROFILE: "FETCHED_USER_PROFILE",
    UPDATE_USER_PROFILE: "UPDATE_USER_PROFILE",
    QUESTIONS: "QUESTIONS",
    FETCHED_QUESTIONS: "FETCHED_QUESTIONS",
    SET_QUESTIONS_FETCHING: "SET_QUESTIONS_FETCHING",
    QUESTIONS_ERROR: "QUESTIONS_ERROR",
};

export const actionFeedbackTypes = {
    QUESTIONS: "QUESTIONS",
    FETCHED_QUESTIONS: "FETCHED_QUESTIONS",
    QUESTIONS_ERROR: "QUESTIONS_ERROR",
    POST_QUESTIONS: "POST_QUESTIONS",
    SUBMITTED_QUESTIONS: "SUBMITTED_QUESTIONS",
};


export const actionEventTypes = {
    EVENT_ERROR:"EVENT_ERROR",
    SET_EVENT_UPDATE: "SET_EVENT_UPDATE",
    GET_EVENT_LIST: "GET_EVENT_LIST",
    RECEIVED_EVENT_LIST:"RECEIVED_EVENT_LIST",
    GET_EVENT_DATA: "GET_EVENT_DATA",
    RECEIVED_EVENT_DATA:"RECEIVED_EVENT_DATA",
    SET_EVENT_FETCHING: "SET_EVENT_FETCHING",
    CANCEL_EVENT: "CANCEL_EVENT",
    CREATE_EVENT: "CREATE_EVENT",
    SAVE_INVITEE: "SAVE_INVITEE",
    DELETE_INVITEE: "DELETE_INVITEE",
    NOTIFY_SUBSCRIBER: "NOTIFY_SUBSCRIBER", 
    SHARE_WITH_FRIEND: "SHARE_WITH_FRIEND",
    WISHLIST_UPDATE: "WISHLIST_UPDATE",
}
export const actionSubscription = {
    SUBSCRIBE_PAID: "SUBSCRIBE_PAID",
    SUBSCRIBE_FREE: "SUBSCRIBE_FREE",
    CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION",
}

export const actionAnalytics = {
    GET_ANALYTICS: "GET_ANALYTICS",
    ANALYTICS_RECIEVED: "ANALYTICS_RECIEVED",
    FETCHING_ANALYTICS: "FETCHING_ANALYTICS"
}
