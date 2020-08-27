import ky from 'ky';

const clients = [
    { 
        id: 1, name: "Pepito", age: 28
    },
    { 
        id: 2, name: "Emi", age: 35
    },
    { 
        id: 3, name: "Jorge", age: 46
    }   
];

const clientsPromiseMock = new Promise((resolve, reject) => 
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
    }, 10000);
});

const getClients = () => 
{
    return ky.get("http://localhost:8000/clients").json();
}
export default getClients;