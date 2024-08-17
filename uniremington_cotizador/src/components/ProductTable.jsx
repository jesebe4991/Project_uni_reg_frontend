import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import { Table, Button } from 'react-bootstrap';
import { mockProducts } from '../Mocks/Mocks';

const ProductTable = () => {
  const [products, setProducts] = useState([]); // Inicializa el estado fuera de useEffect

  useEffect(() => {
    setProducts(mockProducts); // Asigna los productos mock a partir de useEffect
  }, []);

  return (
    <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px rgba(0, 0, 0, 0.1)'
      }}>
      <h3 className="text-center mb-4">Product List</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Inventario</th>
            <th>Costo</th>
            <th>Stock Disponible</th>
            <th>Descuento (%)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productCode}>
              <td>{product.productCode}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>{product.discount || 'N/A'}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2">Edit</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;