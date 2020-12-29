
class Vehiculo {

    _marca;
    _modelo;
    _precio;

    constructor(marca, modelo, precio) {
        this._marca = marca;
        this._modelo = modelo;
        this._precio = precio;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get marca() {
        return this._marca;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    get modelo() {
        return this._modelo;
    }

    set precio(precio) {
        this._precio = precio;
    }

    get precio() {
        return this._precio;
    }
}


class Auto extends Vehiculo {
    #cantidadPuertas;
    
    constructor(marca, modelo, precio, cantidadPuertas) {
        super(marca, modelo, precio);
        this.#cantidadPuertas = cantidadPuertas;
    }

    set cantidadPuertas(cantidadPuertas) {
        this.#cantidadPuertas = cantidadPuertas;
    }

    get cantidadPuertas() {
        return this.#cantidadPuertas;
    }

    toString() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.#cantidadPuertas} // Precio: $${this.precio}`;
    }
}

class Moto extends Vehiculo {
    #cilindrada;

    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.#cilindrada = cilindrada;
    }

    set cilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }

    get cilindrada() {
        return this.#cilindrada;
    }

    toString() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${ this.#cilindrada+"cc" } // Precio: $${this.precio}`
    }

}

class Concesionaria {
    #vehiculos = []

    constructor() {}

    inicializarVehiculos() {
        this.#vehiculos.push(new Auto("Peugeot", "206", "200.000.00", 4))
        this.#vehiculos.push(new Moto("Honda", "Titan", "60.000.00", 125))
        this.#vehiculos.push(new Auto("Peugeot", "208", "250.000.00", 5))
        this.#vehiculos.push(new Moto("Yamaha", "YBR", "80.500.50", 160))
        
        return this.#vehiculos;
    }

    listarVehiculos() {
        this.#vehiculos.forEach(vehiculo => {
            console.log(vehiculo.toString())
        })
    }

    listarVehiculosPorPrecio() {
        let vehiculosOrdenados = this.#vehiculos.sort((a, b) => (parseFloat(a.precio.split('.')) > parseFloat(b.precio.split('.'))) ? -1 : 1);
        
        console.log("Vehiculos ordenados por precio de mayor a menor: ")

        vehiculosOrdenados.forEach(vehiculo => {
            console.log(`${vehiculo.marca} ${vehiculo.modelo}`)
        })
    }


    listarVehiculoMasCaroBaratoYPorLetra(letra) {
        let vehiculosOrdenados = this.#vehiculos.sort((a, b) => (parseFloat(a.precio.split('.')) > parseFloat(b.precio.split('.'))) ? -1 : 1);
        
        let vehiculoMasCaro = vehiculosOrdenados[0]
        let vehiculoMasBarato = vehiculosOrdenados[ vehiculosOrdenados.length - 1 ]
        
        let vehiculoConLetra = vehiculosOrdenados.find((vehiculo) => {
            if (vehiculo.modelo.indexOf(letra) > -1) return vehiculo;
        })

        console.log(`Vehiculo mas caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`);
        console.log(`Vehiculo mas barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`);
        console.log(`Vehiculo que contiene en el modelo la letra '${letra}': ${vehiculoConLetra.marca} ${vehiculoConLetra.modelo} $${vehiculoConLetra.precio}`)
    }
}

class Main {

    static main() {
        let concesionaria = new Concesionaria();

        concesionaria.inicializarVehiculos();
            
        concesionaria.listarVehiculos();
        console.log("=========================================")
        concesionaria.listarVehiculoMasCaroBaratoYPorLetra('Y');
        console.log("=========================================")
        concesionaria.listarVehiculosPorPrecio();   
    }
}

Main.main()