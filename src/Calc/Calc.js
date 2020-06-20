import React from 'react';
import './Calc.css'; 


class Calc extends React.Component {
   
    calcRate = (event) => {
event.preventDefault();
console.log('!')
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
					<input type="number" defaultValue="150" name="" />
					<select name="">
						<option value="USD">USD</option>
						<option value="RUB">RUB</option>
						<option value="EUR">EUR</option>

                        {Object.keys(this.props.rate).map( (keyName, i) => (
 
               
                        <option key={keyName} value={keyName}>{keyName}</option>
          
            ) 
            )}
					</select>
                    <input type="submit" defaultValue="calc"></input>
                    </form>
				</div>
				<h4>Результат</h4>
					<ul className="calc-res">
						<li>EUR 150</li>
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