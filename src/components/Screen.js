import React from 'react';
import { connect } from 'react-redux';


class Screen extends React.Component {

    render() {
        return (
            <div className="ui centered grid container screen">
                <div className="sixteen wide column">{this.props.view}</div>
            </div>
        );
        
    }
};

const mapStateToProps = state => {
    return {
        view: state.calc.view
    };
};

export default connect(mapStateToProps)(Screen);