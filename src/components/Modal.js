import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #581845;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    width: 300px;
    border-radius: 5px;
`;

function Modal({ product, onClose }) {
    return (
        <ModalOverlay>
            <ModalContent>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={onClose}>Cerrar</button>
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;