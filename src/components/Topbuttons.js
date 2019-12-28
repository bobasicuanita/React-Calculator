import React from 'react';
import { connect } from 'react-redux';
import { clear, backspaceFirst, backspaceSecond } from '../actions';

class Topbuttons extends React.Component {

    clear= () => {
        this.props.clear();
    };

    backspace = () => {

        const { firstNumberActive } = this.props;
        const { secondNumberActive } = this.props;
        
        if (firstNumberActive) {
            this.props.backspaceFirst();
        };

        if (secondNumberActive) {
            this.props.backspaceSecond();
        }
        
    };

    render() {
        return (
            <div className="ui centered grid container">
                <div className="seven wide column left floated"><button onClick={this.clear} className="huge ui button">CLEAR</button></div>
                <div className="nine wide column right floated"><button onClick={this.backspace} className="huge ui button">BACKSPACE</button></div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        firstNumberActive: state.calc.firstNumberActive,
        secondNumberActive: state.calc.secondNumberActive
    }
};

export default connect(mapStateToProps, { clear, backspaceFirst, backspaceSecond })(Topbuttons);