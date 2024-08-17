import React from'react';
import { Table , Button } from'react-bootstrap';

const ProductTable = ({ products }) => {
  return (
    <div style={{maxWidth: '900px', margin: '0auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '04px8pxrgba(0, 0, 0, 0.1)' }}><h3 className="text-center mb-4">Product List</h3>
    <Table striped bordered hover responsive>
            <thead>
                <tr><th>Codigo</th><th>Producto</th><th>Inventario</th><th>Costo</th><th>Stock Disponible</th><th>Descuento (%)</th><th>Acciones</th></tr></thead>
          {/* {products.map((product) => (
            <trkey={product.productCode}><td>{product.name}</td><td>{product.productCode}</td><td>{product.category}</td><td>${product.price.toFixed(2)}</td><td>{product.stock}</td><td>{product.discount || 'N/A'}</td><td><Button variant="warning" size="sm" className="me-2">Edit</Button><Button variant="danger" size="sm">Delete</Button></td></tr>
          ))} */}
 
        <tbody>
        <tr>
          <td>1</td>
          <td>Product1</td>
          <td>5</td>
          <td>200</td>
          <td>5</td>
          <td>0</td>
          <td><Button variant="warning" size="sm" className="me-2">Edit</Button><Button variant="danger" size="sm">Delete</Button></td>
        </tr>
        <tr>
        <td>2</td>
          <td>Product2</td>
          <td>5</td>
          <td>300</td>
          <td>5</td>
          <td>0</td>
          <td><Button variant="warning" size="sm" className="me-2">Edit</Button><Button variant="danger" size="sm">Delete</Button></td>
        </tr>
        <tr>
        <td>3</td>
          <td>Product3</td>
          <td>5</td>
          <td>400</td>
          <td>5</td>
          <td>0</td>
          <td><Button variant="warning" size="sm" className="me-2">Edit</Button><Button variant="danger" size="sm">Delete</Button></td>
        </tr>
      </tbody>
        </Table>
        </div>
  );
};

export default ProductTable;