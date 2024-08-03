document.getElementById('add-sale').addEventListener('click', addSale);

let sales = [];

function addSale() {
    const productName = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);

    if (productName && quantity > 0 && price > 0) {
        const totalAmount = quantity * price;
        const sale = { productName, quantity, totalAmount };
        sales.push(sale);
        renderSales();
        clearInputs();
    }
}

function renderSales() {
    const salesList = document.getElementById('sales-list');
    salesList.innerHTML = '';
    sales.forEach((sale, index) => {
        const li = document.createElement('li');
        li.textContent = `${sale.productName} - Cantidad: ${sale.quantity}, Monto Total: $${sale.totalAmount.toFixed(2)}`;
        salesList.appendChild(li);
    });

    renderSummary();
}

function clearInputs() {
    document.getElementById('product-name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
}

function renderSummary() {
    const totalSales = sales.reduce((total, sale) => total + sale.totalAmount, 0);
    document.getElementById('total-sales').textContent = `Total de Ventas: $${totalSales.toFixed(2)}`;

    const productQuantities = sales.reduce((quantities, sale) => {
        if (!quantities[sale.productName]) {
            quantities[sale.productName] = 0;
        }
        quantities[sale.productName] += sale.quantity;
        return quantities;
    }, {});

    const topProduct = Object.keys(productQuantities).reduce((top, product) => {
        return productQuantities[product] > (productQuantities[top] || 0) ? product : top;
    }, null);

    document.getElementById('top-product').textContent = topProduct ? `Producto Más Vendido: ${topProduct}` : 'Producto Más Vendido: N/A';
}
