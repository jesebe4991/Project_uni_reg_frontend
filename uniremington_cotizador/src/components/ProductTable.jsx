import React from'react';
import { Table , Button } from'react-bootstrap';

const ProductTable = ({ products }) => {
  return (
    <div style={{maxWidth: '900px', margin: '0auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '04px8pxrgba(0, 0, 0, 0.1)' }}><h3 className="text-center mb-4">Product List</h3>
    <Table striped bordered hover responsive>
            <thead>
                <tr><th>codigo</th><th>Producto</th><th>Inventario</th><th>Costo</th><th>Stock Available</th><th>Discount (%)</th><th>Actions</th></tr></thead><tbody>
          {/* {products.map((product) => (
            <trkey={product.productCode}><td>{product.name}</td><td>{product.productCode}</td><td>{product.category}</td><td>${product.price.toFixed(2)}</td><td>{product.stock}</td><td>{product.discount || 'N/A'}</td><td><Button variant="warning" size="sm" className="me-2">Edit</Button><Button variant="danger" size="sm">Delete</Button></td></tr>
          ))} */}
        </tbody>x
        </Table>
        </div>
  );
};

export default ProductTable;