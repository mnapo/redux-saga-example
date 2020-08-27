import FlexSearch from 'flexsearch/dist/module/flexsearch';

/*
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
*/

const clientsIndex = new FlexSearch({
    doc: {
        id: "id",
        field: ["active"]
    }
});

const clients = (
    state = {clients: [], pending: false, filteredClients: []}, action: any) => {
    switch(action.type){
        case "GET_CLIENTS_SUCCESSFUL":
            clientsIndex.add(action.clients);
            return {...state, clients: action.clients, pending: false};

        case "GET_CLIENTS_FAILED":
            return {...state, error: action.error, pending: false};

        case "GET_CLIENTS_PENDING":
            return {...state, pending: true};
        
        case "SET_CLIENTS_FILTER":
            return {
                ...state,
                filteredClients: clientsIndex.where(action.filter)
            };

        default:
            return state;
    }
};
export default clients;