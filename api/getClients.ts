import ky from 'ky';

const getClients = () => 
{
    return ky.get("http://localhost:8000/clients").json();
}
export default getClients;