import React from 'react';
import ReactDOM from 'react-dom';
import "./styling.css";

function Room() {

    const [isLit, setLit] = React.useState(true);
    const [roomTemp, setRoomTemp] = React.useState(72);
    const brightness = isLit ? "lit" : "dark";
    const myClassName = "room " + brightness;

    return (
        <div className={myClassName}>
            <br />
            <p style={{ fontSize: "22px" }}>The room is {brightness}</p>
            <p style={{ fontSize: "22px" }}>The temperature is {roomTemp} fahrenheit</p>
            <br /><br />
            <button onClick={() => setLit(true)}>
                Lights ON
            </button>
            &nbsp;
            <button onClick={() => setLit(!isLit)}>
                Flip the Lights
            </button>
            &nbsp;
            <button onClick={() => setLit(false)}>
                Lights OFF
            </button>
            <br /><br />
            <button onClick={() => setRoomTemp(roomTemp + 1)}>
                Make it hot
            </button>
            &nbsp;
            <button onClick={() => setRoomTemp(roomTemp - 1)}>
                Cool it down
            </button>
        </div>

    );
}

ReactDOM.render(<Room />, document.getElementById('root'));
