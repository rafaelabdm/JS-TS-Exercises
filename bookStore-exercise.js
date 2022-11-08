//encapsulamento, herança, polimorfismo, abstração

class Book {
    constructor (title, cost, dateOfRelease, copiesInStock, copiesSold , isAvaliable) {
        this.title = title;
        this.cost = cost;
        this.dateOfRelease = dateOfRelease;
        this.copiesInStock = copiesInStock;
        this.copiesSold = copiesSold;
        this.isAvaliable = isAvaliable;
    }

    hasInStock() {
        console.log(`${this.title} has in stock? ${this.isAvaliable}.`);
    }

    getCost() {
        console.log(`Cost of ${this.title}: $${this.cost.toFixed(2)}.`);
    }

    hasSold() {
        console.log(`${this.title} has sold ${this.copiesSold} copies.`);
    }

    sellCopie(howMany = 1) {
        if (this.isAvaliable === "No"){
            console.log("There's no book avaliable.");
            return ;
        }
        this.copiesSold += howMany;
        this.copiesInStock -= howMany;
        if (this.copiesInStock === 0)
            this.isAvaliable = "No";
        console.log(`Sold ${howMany} copie(s) of ${this.title}.`);
    }
    
}

class Novel extends Book {
    constructor (title, cost, dateOfRelease, copiesInStock, copiesSold , isAvaliable) {
        super(title, cost, dateOfRelease, copiesInStock, copiesSold , isAvaliable);
        this.applyDiscount();
    }

    applyDiscount() {
        let currentYear = new Date().getFullYear();
        if (currentYear - this.dateOfRelease >= 10)
            this.cost -= this.cost * 0.1;
    }
}

class BestSeller extends Novel {
    constructor (title, cost, dateOfRelease, copiesInStock, copiesSold , isAvaliable) {
        super(title, cost, dateOfRelease, copiesInStock, copiesSold , isAvaliable);
    }

    buyMore(numberToBuy = 2) {
        if (this.isAvaliable === "No") {
            console.log("Buying more books...");
            this.copiesInStock = numberToBuy;
            this.isAvaliable = "Yes";
        }
    }
}

const bookOne = new BestSeller("Hunger Games", 30.00, 2008, 2, 9999 , "Yes");

bookOne.hasInStock();
bookOne.getCost();
bookOne.sellCopie(2);
bookOne.hasInStock();
bookOne.buyMore(10);
bookOne.hasSold();
