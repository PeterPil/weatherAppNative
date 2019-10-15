
export const initialStateRegistration: {
    isRegistrationOpened: boolean
} = {
    isRegistrationOpened: false,
}


export default function(state, action) {
    switch (action.type) {
        case 'TOGGLE_REGISTRATION':
            const isRegistrationOpened = action.isRegistrationOpened
            return {
                ...state,
                isRegistrationOpened,
            };
        default:
            return state;
    }
  }
  