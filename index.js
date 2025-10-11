// console.log(process.argv);

// const method = process.argv[2];
// const resource = process.argv[3];
// console.log(method, resource);

//if (method.toUpperCase() == "GET" && resource.toLowerCase() == "products") {
//    console.log("obtener productos");
//}

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == "GET" && resource.startsWith("products/")) {
    let id = resource.split("/")[1];
    id = parseInt(id);

    if (isNaN(id) || id <= 0) {
        console.log("No es un número");
    }

    fetch("https://fakestoreapi.com/products/" + id)
  .then((response) => response.json())
  .then((data) => console.log(data));
}

if (method == "GET" && resource == "products") {
const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json();
  console.log(data);
}