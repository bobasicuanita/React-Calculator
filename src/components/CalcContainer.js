import React from 'react';
import Screen from './Screen';
import Topbuttons from './Topbuttons';
import Symbols from './Symbols';


const CalcContainer = () => {
    return (
        <div className="size">
            <div className="ui container">
                <Screen />
                <Topbuttons />
                <div className="ui centered grid container">
                    <Symbols />
                </div>
            </div>
        </div>
    );
};

export default CalcContainer;