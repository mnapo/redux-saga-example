import getClients from './getClients';

getClients()
.then((clients) => {
    console.log(clients);
})
.catch(({error}) => {
    console.log(error);
});