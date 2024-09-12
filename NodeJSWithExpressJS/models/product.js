const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        //console.log(require.main);
        //console.log(process.mainModule);
        const p = path.join(require.main.path,
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });
    }
    static fetchAll() {
        const p = path.join(require.main.path,
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return [];
            }
            return JSON.parse(fileContent);
        })
        //return products;
    }

}