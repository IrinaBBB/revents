import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';

const initialState = {
    authenticated: true,
    currentUser: {
        email: 'hus@uit.no',
        photoURL: 'https://scontent.fsvg2-1.fna.fbcdn.net/v/t39.30808-6/278951740_100310099341623_8946360950147677787_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4_LW7ne4jUwAX8Yu0Gf&_nc_ht=scontent.fsvg2-1.fna&oh=00_AfCPcTJH7r7G1fPSmfQ_i3a_mzKAxz9MggI7TsGdj8lDbg&oe=6417849B'
    },
};

export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SIGN_IN_USER:
            return {
                ...state,
                authenticated: true,
                currentUser: {
                    email: payload.email,
                    photoURL: '/assets/user.png',
                },
            };
        case SIGN_OUT_USER:
            return {
                ...state,
                authenticated: false,
                currentUser: null,
            };
        default:
            return state;
    }
}
