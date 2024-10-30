class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProducts(title, description, price, thumbnail, code, stock) {
    for (let i = 0; this.products.length; i++) { //recorremos los productos de segun el largo del array
      if (this.products[i].code === code) {
        //si los codigos que conseguimos recorriendo el array son iguales al codigo que recibimmos en la funcion
        console.log(`El codigo ${code} ya esta en uso`); // devolvemos que el codigo ya esta en uso
        break;
      }
    }
      const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      if(!Object.values(newProduct).includes(undefinded)){
      ProductManager.id++;
      this.products.push({
        ...newProduct,
        id: ProductManager.id,
      });
     }else{
      console.log("Todos los campos son requeridos!")
     }
  }

  getProducts() {
    return this.products;
  }

  alreadyExist(id) {
    return this.products.find((producto) => producto.id === id);
  }

  getProductById(id) {
    this.alreadyExist(id)
      ? console.log(this.alreadyExist(id))
      : console.log("Producto no encontrado");
  }
}

const productos = new ProductManager();

//primer llamado de metodo getProducts que devuelve el array vacio de nuestra instancia
console.log(productos.getProducts());

//agregamos productos a nuestro objeto
productos.addProducts("Andres", "Persona de 27 anios", 45, "imagen", "a1", 10);
productos.addProducts(
  "Roberto",
  "Persona de 57 anios",
  50,
  "imagen2",
  "a2",
  20
);

//volvemos a imprimir por consola el llamado de getProducts el cual esta vez nos devuelve
console.log(productos.getProducts());

productos.getProductById(1);
