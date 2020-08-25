const clients = [
    { 
        id: 1, name: "Pepito", age: 28, key: "Pepito"
    },
    { 
        id: 2, name: "Emi", age: 35, key: "Emi"
    },
    { 
        id: 3, name: "Jorge", age: 46, key: "Jorge"
    }   
];

const clientsPromise = new Promise((resolve, reject) => 
{
    setTimeout(function () 
    {
        let checkId = clients.findIndex((client) => 
        {
            return client.id === 99;
        });
        if (checkId !== -1) 
        {
            reject(
                { 
                    error: "Invalid value" 
                });
        }
        resolve(clients);
    }, 3000);
});

const getClients = () => 
{
    return clientsPromise;
}
export default getClients;