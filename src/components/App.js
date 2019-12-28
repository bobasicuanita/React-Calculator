import React from 'react';
import Title from './Title';
import CalcContainer from './CalcContainer';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Title />
                <CalcContainer />
            </div>
        ); 
    }
};

export default App;