import './Contacto.css'
import { Col } from 'react-bootstrap'
import { BiPhone, BiTime } from "react-icons/bi";

export const Contacto = () => {
    const iconStyle = {
        fontSize: '2em',
        marginRight: '0.5em',
        verticalAlign: 'middle'
    }
    return (
        <>
            <div className='contacto-cont'>
                
                <h1 id='contacto-title'>Contacto</h1>

                <div className='container-fluid d-flex justify-content-around justify-content-md-center'>
                    <Col lg={4} className='col-6 d-flex flex-column justify-content-center align-items-center'>
                        <div>
                            <h2 className='contacto-subtitle'>Consultas</h2>
                            <div className='d-flex flex-column'>
                                <div className='d-flex contactoText'>
                                    <BiPhone style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ margin: 0 }}>11-3165-2089</p>
                                    </div>
                                </div>
                                <div className='d-flex contactoText'>
                                    <BiPhone style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ margin: 0 }}>11-5990-1769</p>
                                    </div>
                                </div>
                                <div className='d-flex contactoText'>
                                    <BiPhone style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ margin: 0 }}>4304-1135</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='col-6 d-flex flex-column justify-content-start align-items-center'>
                        <div>
                            <h2 className='contacto-subtitle'>Horarios</h2>

                            <div className='d-flex flex-column'>
                                <div className='d-flex contactoText'>
                                    <BiTime style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ margin: 0 }}>Lunes a viernes de 9 a 18hs</p>
                                    </div>
                                </div>
                                <div className='d-flex contactoText'>
                                    <BiTime style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ margin: 0 }}>Sábados de 9 a 16hs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </>
    )
}