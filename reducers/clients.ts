import FlexSearch from 'flexsearch/dist/module/flexsearch';

const clientsIndex = new FlexSearch({
    doc: {
        id: "id",
        field: ["name", "age", "active"]
    },
    tokenize: "full"
});

const clients = (
    state = {clients: [], pending: false, filteredClients: []}, action: any) => {
    switch(action.type) {
        case "GET_CLIENTS_SUCCESSFUL":
            clientsIndex.add(action.clients);
            return {...state, clients: action.clients, pending: false};
        case "GET_CLIENTS_FAILED":
            return {...state, error: action.error, pending: false};
        case "GET_CLIENTS_PENDING":
            return {...state, pending: true};
        case "SET_CLIENTS_SEARCH":
            return {
                ...state,
                filteredClients: clientsIndex.search(action.query)
            }
        case "SET_CLIENTS_FILTER":
            return {
                ...state,
                filteredClients: clientsIndex.where(action.filter)
            };
        case "SET_CLIENTS_SEARCH_AND_FILTER":
            return {
                ...state,
                filteredClients: clientsIndex.search(action.query, {
                    where: action.filter
                })
            }
        default:
            return state;
    }
};
export default clients;