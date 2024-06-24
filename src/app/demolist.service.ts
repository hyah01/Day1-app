export class AmaJohnService {
    getItemsTech() {
        return [
            {name:"Laptop", desc: "Gaming laptop with 4060 Ti", price: 799.99},
            {name:"X-box Controller", desc: "Gaming controller made for XBox and PC", price: 69.99},
            {name:"Iphone Carbon Fiber Case", desc: "Won't break trust", price: 56.99},
        ]
    }
    getItemsHome() {
        return [
            {name:"Foam Pillow", desc: "High-end shredded memory foam and microfiber pillow", 
                price: 26.99},
            {name:"Bed Sheet", desc: "Silky bed sheet made for max comfort", 
                price: 44.99},
            {name:"Dish 10 Set", desc: "Ceramic dishes", 
                price: 16.99},
        ]
    }
    getItemsSupply() {
        return [
            {name:"Pencil", desc: "John Wick's Pencil...", price: 10000},
        ]
    }
}