import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function AlumnoAgregar() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Alumno agregar</h1>
          </Col>
        </Row>

        <Form>
          <Row>
            <Col>
              <p className="fs1">Alumno agregar</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="fs-3">Datos generales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Matricula">
                <Form.Control
                  name="matricula"
                  type="text"
                  placeholder="Ingresa la matricula"
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Ingresa nombre"
                
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="aPaterno"
                type="text"
                placeholder="Ingresa Apellido paterno"
              />
            </Col>

            <Col>
              <Form.Control
                name="aMaterno"
                type="text"
                placeholder="Ingresa Apellido materno"
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Select
                name="sexo"
                aria-label="Default select example"
                required
              >
                <option>Selecciona tu sexo</option>

                <option value="1">Femenino</option>

                <option value="2">Masculino</option>
              </Form.Select>
            </Col>

            <Col>
              {" "}
              <Form.Control
                name="aTelefono"
                type="text"
                placeholder="Ingresa Telefono (618)1232323"
                pattern="[(][0-9]{3}[)][0-9]{7}"
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="aCorreo"
                type="email"
                placeholder="Ingresa Correo electronico"
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="aFacebook"
                type="text"
                placeholder="Ingresa perfil Facebook"
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="aInstagram"
                type="text"
                placeholder="Ingresa perfil Instagram"
                required
              />
            </Col>

            <Col></Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">Dirección</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="dCalle"
                type="text"
                placeholder="Ingresa la calle"
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="dNumero"
                type="number"
                placeholder="Ingresa el numero"
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="dColonia"
                type="text"
                placeholder="Ingresa la colonia"
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="dCodigoPostal"
                type="number"
                placeholder="Ingresa el código postal"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-primary">
                Guardar
              </Button>
            </Col>

            <Col>
              <Button className="btn btn-info">Cancelar</Button>
            </Col>
          </Row>

          {/* <Row className='mt-3 mb-3'>

                                               <Col></Col>

                                               <Col></Col>

                               </Row> */}
        </Form>
      </Container>
    </>
  );
}

export default AlumnoAgregar;
