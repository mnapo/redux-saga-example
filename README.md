REACT Native example of a client list requested from server through API methods, and ways of applying filters to it.

This project combines the use of multiple JS libraries, such as react-redux, react-native-paper, expo, sagas, ky and flexSearch.

Example server repository from which data is requested can be found here:
https://github.com/mnapo/feather-express-example

----

** Flexsearch usage example **

> Initialize index with Document descriptor:
```
var index = new FlexSearch({
    tokenize: "strict",
    depth: 3,
    doc: {
        id: "id",
        field: [
            "nombre",
            "precio",
            "codigo"
        ]
    }
});
```

> index.add() snippet (field "modelo" not searchable):
```
const productos = [
    {id: 0, nombre: "bicicleta", codigo: "A1", precio: 15000, modelo: "B"},
    {id: 1, nombre: "moto", codigo: "B1", precio: 150000, modelo: "C"},
    {id: 2, nombre: "tractor", codigo: "C2", precio: 1500000, modelo: "D"}
];
index.add(productos);
```