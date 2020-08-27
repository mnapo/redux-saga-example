Flexsearch usage example

Initialize index with Document descriptor:
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

Index.add()
(field "modelo" not searchable)
```
const productos = [
    {id: 0, nombre: "bicicleta", codigo: "A1", precio: 15000, modelo: "B"},
    {id: 1, nombre: "moto", codigo: "B1", precio: 150000, modelo: "C"},
    {id: 2, nombre: "tractor", codigo: "C2", precio: 1500000, modelo: "D"}
];
index.add(productos);
```