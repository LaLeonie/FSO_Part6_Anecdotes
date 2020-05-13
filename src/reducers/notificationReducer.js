const initialNofitications = {
  displayStyle: "none",
  text: "This is the notification",
};

export const setNotification = (text) => {
  return {
    type: "SET_NOTIFICATION",
    notificiation: {
      text,
      displayStyle: "block",
    },
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION",
    notification: {
      displayStyle: "none",
    },
  };
};

const notificationReducer = (state = initialNofitications, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.notificiation;
    case "REMOVE_NOTIFICATION":
      return action.notification;
    default:
      return state;
  }
};

export default notificationReducer;
