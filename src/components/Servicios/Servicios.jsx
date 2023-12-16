import './Servicios.css'
import { motion } from 'framer-motion';




export const Servicios = () => {

    return (
        <>

            <h1 id='servicios-title'>Servicios</h1>
            <div className='d-flex justify-content-center'>
            <motion.div className='underline' transition={{ease: "linear",duration: 0.5, delay:0.2}} initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} />
            </div>
            <div className='container servicios-cont'>
                <h2 className='firstSub'>Transferencias</h2>
                <div className='container contServicio d-flex flex-wrap justify-content-center'>
                    <button className='boton1'>Con Cambio de Radicación</button>
                    <button className='boton1'>Ordinarias</button>
                    <button className='boton1'>Con Prenda</button>
                    <button className='boton1'>Simultánea</button>
                    <button className='boton1'>Entre condóminos</button>
                    <button className='boton1'>En sucesión</button>
                </div>
                <h2 className='servicios-subtitle'>Informes</h2>
                <div className='container contServicio d-flex flex-wrap justify-content-center'>
                    <button className='boton1'>Infracciones</button>
                    <button className='boton1'>Dominio</button>
                    <button className='boton1'>Históricos</button>
                    <button className='boton1'>Patentes</button>
                    <button className='boton1'>Robo/Hurto</button>
                    <button className='boton1'>Automotor</button>
                    <button className='boton1'>Nominales</button>
                    <button className='boton1'>Consulta Legajos</button>
                    <button className='boton1'>Anotaciones personales</button>
                </div>
                <h2 className='servicios-subtitle'>Denuncias de</h2>
                <div className='container contServicio d-flex flex-wrap justify-content-center'>
                    <button className='boton1'>Venta</button>
                    <button className='boton1'>Compra y posesión</button>
                    <button className='boton1'>Robo</button>
                </div>
                <h2 className='servicios-subtitle'>Duplicados</h2>
                <div className='container contServicio d-flex flex-wrap justify-content-center'>
                    <button className='boton1'>Chapas/Patentes</button>
                    <button className='boton1'>Cédula</button>
                    <button className='boton1'>Título</button>
                    <button className='boton1'>Cédulas autorizadas (Azules)</button>
                </div>

            </div>
        </>
    )
}