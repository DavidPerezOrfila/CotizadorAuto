import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio} from '../helper';


class App extends Component {
	cotizarSeguro = (datos) => {
    // console.log(datos)
    const {marca, plan, year} = datos;
    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    // por cada año restar el 3%
    resultado -= ((diferencia *3) * resultado) / 100;
    console.log(resultado);
    // Americano 15%, Asiático 5% y Europeo 30% de incremento al valor actual

  };
	render() {
		return (
			<div className="contenedor">
				<Header titulo="Cotizador de seguros de auto" />
				<div className="contenedor-formulario">
					<Formulario cotizarSeguro={this.cotizarSeguro} />
				</div>
			</div>
		);
	}
}

export default App;
