import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AlumnoAgregar() {
	return ( 
		<>
		<Container>
			<Row>
				<Col></Col>
				<Col>
					<h1>Alumno agregar</h1>
					<Form>
						<Form.Group className='mt-3 mb-3'>
							<Form.Label>Matricula:</Form.Label>
							<Form.Control id='matricula' type='text' placeholder='Ingresa la matricula' />
						</Form.Group>
						<Form.Group className='mt-3 mb-3'>
							<Form.Label>Nombre(s):</Form.Label>
							<Form.Control id='nombre' type='text' placeholder='Ingresa nombre' />
						</Form.Group>
						<Form.Group className='mt-3 mb-3'>
							<Form.Label>Apellido paterno:</Form.Label>
							<Form.Control id='aPaterno' type='text' placeholder='Ingresa Apellido paterno' />
						</Form.Group>
						<Form.Group className='mt-3 mb-3'>
							<Form.Label>Apellido materno:</Form.Label>
							<Form.Control id='aMaterno' type='text' placeholder='Ingresa Apellido materno' />
						</Form.Group>
						<Button>Guardar</Button>
					</Form>				
				</Col>
				<Col></Col>
			</Row>
			
		</Container>
			
		</>
	 );
}

export default AlumnoAgregar;