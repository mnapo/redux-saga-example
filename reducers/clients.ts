const clients = (
    state = {clients: []}, action: any) => {
    switch(action.type){
        case "GET_CLIENTS_SUCCESSFUL":
            return {...state, clients: action.clients, pending: false};

        case "GET_CLIENTS_FAILED":
            return {...state, error: action.error, pending: false};

        case "GET_CLIENTS_PENDING":
            return {...state, pending: true};
        
        default:
            return state;
    }
};
export default clients;