import './Servicios.css'
import { Row, Col } from 'react-bootstrap'

export const Servicios = () => {
    return (
        <>

            <h1 id='servicios-title'>Servicios</h1>

            <div className='container-fluid servicios-cont'>
                <Row className='d-flex'>
                    <Col md={4} className='d-flex col-6 justify-content-center'>
                        <ul>
                            <li>Transeferencias/Sucesiones</li>
                            <li>Precargas</li>
                            <li>Pedido de informes</li>
                            <li>Certificados de nformes</li>
                            <li>Duplicados: titulo/cédulas/chapas</li>
                        </ul>
                    </Col>
                    <Col md={4} className='d-flex col-6 justify-content-center'>
                        <ul>

                            <li>Cédulas autorizadas (azules)</li>

                            <li>Cambio de tipo y uso</li>
                            <li>Rectificacion de datos</li>
                            <li>Denuncia de venta</li>
                            <li>Denuncia de compra</li>

                        </ul>
                    </Col>
                    <Col md={4} className='d-flex col-12 justify-content-center lastCol'>
                        <ul >
                            <li>Informe Historico</li>
                            <li>Infracciones</li>
                            <li>Mero poseedor</li>


                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}