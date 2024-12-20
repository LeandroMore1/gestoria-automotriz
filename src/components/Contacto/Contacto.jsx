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
                
                <h1 id='contacto-title'>Consultanos</h1>

                <div className='container-fluid d-flex justify-content-around justify-content-md-center'>
                    <Col lg={4} className='col-6 d-flex flex-column justify-content-center align-items-center'>
                        <div>
                            <h2 className='contacto-subtitle'>Teléfonos</h2>
                            <div className='d-flex flex-column'>
                                <div className='d-flex contactoText'>
                                    <BiPhone style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <a className='tel' href="tel:1131652089" style={{ margin: 0 }}>11-3165-2089</a>
                                    </div>
                                </div>
                                <div className='d-flex contactoText'>
                                    <BiPhone style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <a className='tel' style={{ margin: 0 }}>11-5990-1769</a>
                                    </div>
                                </div>
                                <div className='d-flex contactoText'>
                                    <BiPhone style={iconStyle} />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <a className='tel' style={{ margin: 0 }}>4304-1135</a>
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
                <div className='d-flex justify-content-center align-items-end map'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6566.410162707578!2d-58.40185675!3d-34.624257400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1d945c8459%3A0xccf24520f594eeef!2sSan%20Crist%C3%B3bal%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1734736863071!5m2!1ses!2sar" 
                width="100%" 
                height="100%" s
                tyle="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}