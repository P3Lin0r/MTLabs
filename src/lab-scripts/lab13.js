document.addEventListener("DOMContentLoaded", async () => {
    const productsTableBody = document.getElementById("tablebody");
    const deleteButton = document.getElementById("delBtn");

    await getProducts(productsTableBody);


    deleteButton.addEventListener("click", () => {
        const id = prompt("Введіть ID товару для видалення:");

        if (id) {
            deleteProduct(id);
        }
    });
});

async function getProducts(productsTableBody) {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=10&select=title,price,category");
        const data = await response.json();
        data.products.forEach(product => {
            const row = document.createElement("tr");
            row.setAttribute("data-id", product.id);
            row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.price}$</td>
                    <td>${product.category}</td>
            `;
            productsTableBody.appendChild(row);
        })
    }
    catch (error) {
        console.error("Error fetching:", error);
    }
}

async function deleteProduct(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);

        const rowToDelete = document.querySelector(`tr[data-id='${id}']`);
        if (rowToDelete) {
            rowToDelete.remove();
            alert(`Товар з ID ${id} видалено`);
        }
        else {
            alert("Товар з таким ID не знайдено у таблиці!");
        }
    }
    catch (error) {
        console.error("Error deleting:", error);
    }
}