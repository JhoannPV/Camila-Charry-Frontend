import React from "react";
import styled from "styled-components";

function Modal({ mensaje, estado, setEstado, children }) {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>{mensaje}</h3>
            </EncabezadoModal>
            <BotonCerrar onClick={() => setEstado(!estado)}>
              <i className="bi bi-x-lg"></i>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  position: relative;
  background-image: linear-gradient(silver, rgb(228, 227, 227), white);
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;

  h3 {
    font-weight: bold;
    font-size: 16px;
    color: black;
  }
`;

const BotonCerrar = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-image: linear-gradient(
      rgb(201, 113, 113),
      rgb(199, 70, 70),
      red
    );
  }
  i {
    font-size: 1.5rem;
  }
`;
