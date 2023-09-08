import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function BasicExample() {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      <p>Si no posee una cuenta, puede registrarse haciendo click <a href='/crear'>aquí</a></p>
      <p>Si quiere cambiar sus datos, puede hacerlo haciendo click <a href='/cambio'>aquí</a></p>
    </Form>
    <div>
    <h2>Bienvenidos, acá podrás ver Fotos del día de la Nasa</h2>
    <p>Si quiere ver la foto de hoy, puede hacerlo haciendo click <a href='/nasa'>aquí</a></p>
    </div>
    </div>

      
  );
  
}

export default BasicExample;