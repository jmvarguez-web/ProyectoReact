import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ProductGrid = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 20px
`;

const ProductCard = styled.div`
    border: 1px solid #e0e0e0;
    padding: 20px;
    cursor: pointer;
`;

function Products() {
    const [selectedProduct, setSelectedProduct] = useState();

    const products = [
        { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
        { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
        { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
        { id: 4, name: 'Producto 4', description: 'Descripción del Producto 4' },
        { id: 5, name: 'Producto 5', description: 'Descripción del Producto 5' },
        { id: 6, name: 'Producto 6', description: 'Descripción del Producto 6' },
    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    const closeModal = () => {
        setSelectedProduct(null);
    }

    return (
        <div id="products">
            <h2>Productos</h2>
            <ProductGrid>
                {products.map((product) => (
                    <ProductCard key={product.id} onClick={() => handleProductClick(product)}>
                        {product.name}
                    </ProductCard>
                ))}
            </ProductGrid>
            {selectedProduct && <Modal product={selectedProduct} onClose={closeModal} />}
        </div>
    );
}

export default Products;