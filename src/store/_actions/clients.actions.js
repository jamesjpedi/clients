import { clientsConstants } from '../_constants';
import { apiService } from '../../_services';

export const clientActions = {
    loadClients
}

//Redux actions
function loadClients() {
    return dispatch => {
        dispatch(load());

        apiService.loadClients()
            .then(data => {
                    dispatch(update(data));
                },
                error => {
                    console.log(error);
                    dispatch(update([]));
                });
    }

    function load() {
        return {
            type    : clientsConstants.LOAD_CLIENTS, 
        }
    }

    function update(clients) {
        return {
            type    : clientsConstants.CLIENTS_UPDATED, 
            clients : clients
        }
    }
}