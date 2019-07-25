import React from 'react';

const KeyPad = ({val})=> {
    return (
        <div className="numpad">
            <div className="button" onClick={val.handleKeyPad} id="1">1</div>
            <div className="button" onClick={val.handleKeyPad} id="2">2</div>
            <div className="button" onClick={val.handleKeyPad} id="3">3</div>
            <div className="button" onClick={val.handleKeyPad} id="4">4</div>
            <div className="button" onClick={val.handleKeyPad} id="5">5</div>
            <div className="button" onClick={val.handleKeyPad} id="6">6</div>
            <div className="button" onClick={val.handleKeyPad} id="7">7</div>
            <div className="button" onClick={val.handleKeyPad} id="8">8</div>
            <div className="button" onClick={val.handleKeyPad} id="9">9</div>
            <div className="button" onClick={val.handleKeyPad} id="0">0</div>
            <div className="button" onClick={val.handleDelete} >Del</div>
        </div>
    );
}

export default KeyPad;