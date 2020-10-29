import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { setName, getName } from "./Utils/global";
// import App from './App';
import Children from "./component/items";

function App() {
    const [text, setText] = useState("L1");
    // const [text2, setText2] = useState("L2");
    useEffect(() => {
        console.log(getName());
        setName("yegaofeng");
        setTimeout(() => {
            setText("LI11111");
            setText("LI22222");
            console.log(getName());
            // setText2("LI22222");
        }, 5000);
    }, []);
    return (
        <div className="parent">
            <div>
                {text}
                {/* {text2} */}
            </div>
            <Children />

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
