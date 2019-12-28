import React from 'react';
import { connect } from 'react-redux';
import { getNumbers, getSecondNumbers, returnState, add, remove, multiply, divide, result } from '../actions';

class Symbols extends React.Component {

    handleNumber = e => {

        const { firstNumber } = this.props;
        const { operation } = this.props;

        if (operation !== '') {
            this.props.getSecondNumbers(e.target.value);
        };

        if(firstNumber.length < 10 && operation === '') {
            this.props.getNumbers(e.target.value);
        };  
    };

    handleComma = e => {

        const { firstNumber } = this.props;
        const { secondNumber } = this.props;
        const { operation } = this.props;


        if (!firstNumber.includes('.') && operation === '') {
            this.props.getNumbers(e.target.value);
        } else if (!secondNumber.includes('.') && operation !== '') {
            this.props.getSecondNumbers(e.target.value);
        } else {
            this.props.returnState();
        };
    };

    handleAdd = e => {

        const { firstNumber } = this.props;

        if (firstNumber.length > 0) {
            this.props.add(e.target.value);
        } else {
            this.props.returnState();
        }
    };

    handleRemove = e => {

        const { firstNumber } = this.props;

        if (firstNumber.length > 0) {
            this.props.remove(e.target.value);
        } else {
            this.props.returnState();
        }
    };

    handleMultiply = e => {

        const { firstNumber } = this.props;

        if (firstNumber.length > 0) {
            this.props.multiply(e.target.value);
        } else {
            this.props.returnState();
        }
    };

    handleDivide = e => {

        const { firstNumber } = this.props;

        if (firstNumber.length > 0) {
            this.props.divide(e.target.value);
        } else {
            this.props.returnState();
        }
    };

    handleResult = () => {

        const { firstNumber } = this.props;
        const { secondNumber } = this.props;
        const { operation } = this.props;

        let result = operation === '+' ? parseFloat(firstNumber.join('')) + parseFloat(secondNumber.join(''))
                 : operation === '-' ? parseFloat(firstNumber.join('')) - parseFloat(secondNumber.join(''))
                 : operation === '*' ? parseFloat(firstNumber.join('')) * parseFloat(secondNumber.join(''))
                 : parseFloat(firstNumber.join('')) / parseFloat(secondNumber.join(''));
        
        if ( firstNumber.length > 0 && secondNumber.length > 0 && operation !== '') {
            this.props.result(result);
        } else {
            this.props.returnState();
        }
    };

    render() {
        // return this.symbols.map(symbol => {
        //     return (
        //         <div key={symbol} className="four wide column"><button onClick={this.handleNumber} value={symbol} className="huge ui button">{symbol}</button></div>
        //     ); 
        // });

        return (
            <div className="ui centered grid">
                <div className='four wide column'><button onClick={this.handleNumber} value='1' className="huge ui button">1</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='2' className="huge ui button">2</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='3' className="huge ui button">3</button></div>
                <div className='four wide column'><button onClick={this.handleDivide} value='/' className="huge ui button orange">/</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='4' className="huge ui button">4</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='5' className="huge ui button">5</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='6' className="huge ui button">6</button></div>
                <div className='four wide column'><button onClick={this.handleMultiply} value='*' className="huge ui button orange">*</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='7' className="huge ui button">7</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='8' className="huge ui button">8</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='9' className="huge ui button">9</button></div>
                <div className='four wide column'><button onClick={this.handleRemove} value='-' className="huge ui button orange">-</button></div>
                <div className='four wide column'><button onClick={this.handleNumber} value='0' className="huge ui button">0</button></div>
                <div className='four wide column'><button onClick={this.handleComma} value='.' className="huge ui button">.</button></div>
                <div className='four wide column'><button onClick={this.handleAdd} value='+' className="huge ui button orange">+</button></div>
                <div className='four wide column'><button onClick={this.handleResult} value='=' className="huge ui button orange">=</button></div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        firstNumber: state.calc.firstNumber,
        secondNumber: state.calc.secondNumber,
        operation: state.calc.operation,
    }

};

export default connect(mapStateToProps, { getNumbers, getSecondNumbers, returnState, add, remove, multiply, divide, result })(Symbols);