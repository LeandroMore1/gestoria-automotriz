import './Iconos.css'
import { FaHandshake } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoCarSportSharp } from "react-icons/io5";

export const Iconos = () => {
    const iconStyle = {
        
        verticalAlign: 'middle',
        color: 'E3CD80'
    }
    return (

        <>
        <h1 className='iconosTitle'>Realizamos trámites del automotor</h1>
        <div className='d-flex justify-content-around iconosContainer'>
        <div className='d-flex flex-column align-itenms-center justify-content-center example'>
                <div className='d-flex justify-content-center'>
                    <p className='iconosText'>Asesoramiento personalizado</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <HiClipboardDocumentList className='icono' style={iconStyle} />
                </div>
            </div>
            <div className='d-flex flex-column align-itenms-center justify-content-center example'>
                <div className='d-flex justify-content-center'>
                    <p className='iconosText'>Gestión integral</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <HiClipboardDocumentList className='icono' style={iconStyle} />
                </div>
            </div>
            <div className='d-flex flex-column align-itenms-center justify-content-center example'>
                <div className='d-flex justify-content-center'>
                    <p className='iconosText'>Patentamiento de 0km</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <IoCarSportSharp className='icono' style={iconStyle} />
                </div>
            </div>
        </div>
        </>
    )
}