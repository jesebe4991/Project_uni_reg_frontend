import React, { useState } from 'react';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';

const Formulario = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementación del manejo de envío aquí si es necesario
  };

  return (
    <div className="product-form-container" style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 4px rgba(0, 0, 0, 0.1)'
    }}>
      <Form.Group controlId="search" className="mb-3">
        <Form.Label>Buscar producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Buscar producto por nombre o codigo"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <h3 className="text-center mb-4">Crear nuevo producto</h3>
      <Form onSubmit={handleSubmit}>
        {/* Product Name */}
        <Form.Group controlId="productName" className="mb-3">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control type="text" placeholder="Ingrese producto" required />
        </Form.Group>

        {/* Product Code */}
        <Form.Group controlId="productCode" className="mb-3">
          <Form.Label>Codigo del producto</Form.Label>
          <Form.Control type="text" placeholder="Ingrese codigo de categoria" required />
        </Form.Group>

        {/* Category */}
        <Form.Group controlId="category" className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" placeholder="Ingrese Categoria" required />
        </Form.Group>

        {/* Price */}
        <Form.Group controlId="price" className="mb-3">
          <Form.Label>Precio</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number" placeholder="Ingrese Precio" required />
          </InputGroup>
        </Form.Group>

        {/* Stock Available */}
        <Form.Group controlId="stock" className="mb-3">
          <Form.Label>Stock Disponible</Form.Label>
          <Form.Control type="number" placeholder="Stock inicial" required />
        </Form.Group>

        {/* Discount */}
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="discount" className="mb-3">
              <Form.Label>Descuento (%)</Form.Label>
              <Form.Control type="number" placeholder="Ingrese Descuento" />
            </Form.Group>
          </Col>
        </Row>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Crear Producto
        </Button>
      </Form>

      {/* Search Products */}
      <hr className="my-4" />

    </div>
  );
};

export default Formulario;