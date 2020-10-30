import React, { useEffect, useState } from "react";
import { setName, getName } from "../Utils/global";

function Children() {
    const [text, setText] = useState("children1");
    const [text2, setText2] = useState("children2");
    useEffect(() => {
        setTimeout(() => {
            setText("children111111");
            console.log(getName());
        }, 10000);
    }, []);
    return (
        <div className="children-classname">
            <div>{text}</div>
            <li>{text2}</li>
        </div>
    );
}

export default Children;
