import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
function App() {
    const [text, setText] = useState("L1");
    useEffect(() => {
        setTimeout(() => {
            setText("LI11111");
        }, 5000);
    }, []);
    return (
        <div className="parent">
            <div className="children-class1">
                DIV1
                <li>{text}</li>
                <li>LI1-1</li>
                <li>LI1-2</li>
            </div>
            {/* <div className="children-class2">
                DIV2
                <li>LI2</li>
            </div>
            <div className="children-class3">
                DIV3 <li>LI3</li>
            </div>
            <div className="children-class4">
                DIV4 <li>LI4</li>
            </div> */}
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
