import { FETCH_CURRENT_ADMIN } from '../actions'
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CURRENT_ADMIN: return action.payload.data
        default: return state
    }
}