import readline from "readline";

import {
    addProduct,
    removeProduct,
    updateQuantity,
    calculateTotal
} from "./cart.js";

let cart = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showCart() {
    if (cart.length === 0) {
        console.log("\nCoșul este gol!");
        return;
    }

    console.log("\n--- PRODUSELE DIN COȘ ---");

    cart.forEach(product => {
        const { id, name, price, quantity } = product;

        console.log(
            `ID: ${id} | ${name} | ${price} MDL | Cantitate: ${quantity}`
        );
    });
}

function getNextId() {
    if (cart.length === 0) {
        return 1;
    }

    const ids = cart.map(product => product.id);

    return Math.max(...ids) + 1;
}

function menu() {
    console.log("\n--- COȘ DE CUMPĂRĂTURI ---");
    console.log("1. Afișează produsele");
    console.log("2. Adaugă produs");
    console.log("3. Șterge produs");
    console.log("4. Modifică cantitatea");
    console.log("5. Calculează totalul");
    console.log("6. Ieșire");

    rl.question("\nAlege opțiunea: ", option => {

        if (option === "1") {
            showCart();
            menu();

        } else if (option === "2") {

            rl.question("Numele produsului: ", name => {
                rl.question("Prețul: ", price => {
                    rl.question("Cantitatea: ", quantity => {

                        const product = {
                            id: getNextId(),
                            name: name,
                            price: Number(price),
                            quantity: Number(quantity)
                        };

                        cart = addProduct(cart, product);

                        console.log(`Produsul "${name}" a fost adăugat!`);

                        menu();
                    });
                });
            });

        } else if (option === "3") {

            rl.question("Introdu ID-ul produsului: ", id => {

                try {
                    cart = removeProduct(cart, Number(id));
                    console.log("Produsul a fost șters!");
                } catch (error) {
                    console.log(error.message);
                }

                menu();
            });

        } else if (option === "4") {

            rl.question("Introdu ID-ul produsului: ", id => {
                rl.question("Introdu noua cantitate: ", quantity => {

                    cart = updateQuantity(
                        cart,
                        Number(id),
                        Number(quantity)
                    );

                    console.log("Cantitatea a fost modificată!");

                    menu();
                });
            });

        } else if (option === "5") {

            const total = calculateTotal(cart);

            console.log(`\nTotalul comenzii: ${total} MDL`);

            menu();

        } else if (option === "6") {

            console.log("Programul s-a încheiat.");
            rl.close();

        } else {

            console.log("Opțiune invalidă!");
            menu();
        }
    });
}

menu();