import { clientsConstants } from '../_constants';

const initialState = { loading: false, clients : [] };

export function clients(state = initialState, action) {
    switch (action.type) {
        case clientsConstants.LOAD_CLIENTS:
            return {
                loading     : true,
                clients     : []
            };
        case clientsConstants.CLIENTS_UPDATED:
            return {
                loading     : false,
                clients     : action.clients
            };
        default:
            return state
    }
}