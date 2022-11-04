async function byDate() {
  try {
    const urlOrders = new URL("http://localhost:3000/orders");
    const rawDataOrders = await fetch(urlOrders);
    const formattedOrders = await rawDataOrders.json();

    const byDateOrders = formattedOrders.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    for (const element of byDateOrders) {
      for (const key in element.products) {
        var productName =
          "http://localhost:3000/products/" + element.products[key].productId;

        const urlProducts = new URL(productName);
        const rawProducts = await fetch(urlProducts);
        const formattedProducts = await rawProducts.json();

        var div = document.createElement("div");
        document.body.appendChild(div);

        var hpedidoN = document.createElement("h1");
        div.append(hpedidoN);
        hpedidoN.innerText = "Pedido número: " + element.id;

        var h22 = document.createElement("h4");
        div.append(h22);
        h22.innerText = "Nombre producto: " + formattedProducts.name;

        var h2 = document.createElement("h4");
        div.append(h2);
        h2.innerText = "Fecha: " + element.date;

        var h3 = document.createElement("h4");
        div.append(h3);
        h3.innerText = "Product ID: " + element.products[key].productId;

        var h4 = document.createElement("h4");
        div.append(h4);
        h4.innerText = "Cantidad: " + element.products[key].quantity;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

byDate();
