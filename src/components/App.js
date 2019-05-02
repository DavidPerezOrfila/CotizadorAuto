import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';


class App extends Component {
	cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;
    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    // por cada año restar el 3%
    resultado -= ((diferencia * 3) * resultado) / 100;
    // Americano 15%, Asiático 5% y Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
    // El plan del auto; el básico aumenta el valor 20% y la cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);
    // Dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    console.log(resultado);
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
