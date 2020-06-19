import React from 'react';
import './Rate.css'; 


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate' : {}
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
        this.getRate();
    }
    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest').then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
            this.setState({date: data.date});
            let result = {};
            for( let i = 0; i < this.currency.length; i++) {
                result[this.currency[i]] = data.rates[this.currency[i]];
            }
            console.log(result);
            this.setState({currencyRate: result});
        });
    }

    render() {
        return (           
            <div className="rate">
    <h3>Курс валют на {this.state.date}</h3>
        <div className="flex-container">
            {Object.keys(this.state.currencyRate).map( (keyName, i) => (
            <div className="block flex-item" key={keyName}> 
                <div className="currency-name">{keyName}</div>
            <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
                <p>* Можно купить за 1 EUR</p>
            </div>
            ) 
            )}

            {/* <div className="block flex-item">
                <div className="currency-name">ER</div>
                <div className="currency-in">100</div>
                <div className="currency-out">1000</div>
            </div>
            <div className="block flex-item">
                <div className="currency-name">RUR</div>
                <div className="currency-in">100</div>
                <div className="currency-out">500</div>
            </div> */}


        </div>
            </div>    
        );
    }  
}


export default Rate;