import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products] = useState([
    {
      productId: 1,
      productName: "Laptop Lenovo",
      price: 850,
      imageUrl: "https://acosa.com.sv/wp-content/uploads/2023/06/82H80029USLCR.webp"
    },
    {
      productId: 2,
      productName: "Mouse Inalámbrico",
      price: 25,
      imageUrl: "https://walmartsv.vtexassets.com/arquivos/ids/399862/Mouse-Wireless-Argom-Negro-1-3127.jpg?v=638420762450430000"
    },
    {
      productId: 3,
      productName: "Teclado Mecánico",
      price: 60,
      imageUrl: "https://xht.com.sv/wp-content/uploads/2025/04/GK-993W_BK_0.png"
    },
    {
      productId: 4,
      productName: "Monitor 24''",
      price: 180,
      imageUrl: "https://siman.vtexassets.com/arquivos/ids/6370974/104788039.jpg?v=638676555485700000"
    },
    {
      productId: 5,
      productName: "Audífonos",
      price: 40,
      imageUrl: "https://buketomnisportpweb.s3.us-east-2.amazonaws.com/seo/86OkE8sjK4Kca93gDu1FsT4zm3zrv8v1XPadjfrU.jpeg"
    },
    {
      productId: 6,
      productName: "Webcam HD",
      price: 55,
      imageUrl: "https://m.media-amazon.com/images/I/71YN85pLGcL._AC_SL1500_.jpg"
    },
    {
      productId: 7,
      productName: "Disco SSD 1TB",
      price: 120,
      imageUrl: "https://acosa.com.sv/wp-content/uploads/2024/04/V300X.webp"
    },
    {
      productId: 8,
      productName: "Memoria RAM 16GB",
      price: 90,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FAVaNML5Wi8HtFtlIcKLuTcQQhrWwRnXyg&s"
    },
    {
      productId: 9,
      productName: "Impresora",
      price: 200,
      imageUrl: "https://valdes.com.sv/wp-content/uploads/2023/04/L5590.jpg"
    },
    {
      productId: 10,
      productName: "Router WiFi",
      price: 70,
      imageUrl: "https://www.steren.com.sv/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/229946b80/router-wi-fi-4g-ac1200-2-4-ghz-y-5-ghz-hasta-35-m-de-cobertura.jpg"
    }
  ]);

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>

      <div className="grid">
        {products.map((product) => (
          <ProductItem
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
