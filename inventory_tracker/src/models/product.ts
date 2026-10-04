class Product {

    // the properties of the object (not yet created)
    sku: string;
    price: number;
    inStock: boolean;

    // built-in method of our class that helps us create the object
    constructor(sku: string, price: number, inStock: boolean = true) {

        // assigning values to our properties
        this.sku = sku; // the "this" keyword refers to the current object being created
        this.price = price;
        this.inStock = inStock;
    }

    // any object we create from this class will include this method (displayDetails)
    displayDetails(): string {
        return `${this.sku} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
    }

    getPriceWithTax(): number {
        let finalPrice: number =  Product.price;
        finalPrice += finalPrice;

    }

}

export {Product}