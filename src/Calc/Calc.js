import React from 'react';
import './Calc.css'; 


class Calc extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			result: 0
		}
	}
   
static getDerivedStateFromProps(props, state) {
	return {rate: props.rate};
}

    calcRate = (event) => {
event.preventDefault();

let elements = event.target.elements;
console.log(elements);
console.log(elements['count-currency'].value);
let countCurrency = elements['count-currency'].value;
console.log(countCurrency);
let typeCurrency = elements['type-currency'].value;
console.log(typeCurrency);
this.setState({result: (countCurrency / this.state.rate[typeCurrency]) })
    }

    render() {
        return (           
           <div className="calculator">
                <h3 className="">Калькулятор Обмена</h3>
        	<div className="block">
        		<div>Я хочу</div>
				
				{/* <div><label><input type="radio" name="radio" defaultValue="0" />купить</label></div>
                <div><label><input type="radio" name="radio" defaultValue="1" />купить</label></div> */}

				<div>
                    <form onSubmit={this.calcRate}>
					<input type="number" defaultValue="150" name="count-currency" />
					<select name="type-currency">
						{/* <option value="USD">USD</option>
						<option value="RUB">RUB</option>
						<option value="EUR">EUR</option> */}

                        {Object.keys(this.props.rate).map( (keyName, i) => (
                        <option key={keyName} value={keyName}>{keyName}</option>
          					) 
            			)};
					</select>
                    <input type="submit" defaultValue="calc"></input>
                    </form>
				</div>
				<h4>Результат</h4>
					<ul className="calc-res">
						<li>EUR {this.state.result}</li>
						{/* <li>EUR 150</li>
						<li>EUR 150</li>
						<li>EUR 150</li> */}
					</ul>
        	</div>
           </div> 
 
        );
    }  
}


export default Calc;