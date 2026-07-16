'use client'
import "../styles/result.css"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Results() {

    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const router = useRouter();

    useEffect(() => {

        const savedWpm = localStorage.getItem("wpm");
        const savedAccuracy = localStorage.getItem("accuracy");

        setWpm(savedWpm);
        setAccuracy(savedAccuracy);

    }, []);

    return (

        <div id="resultPage">

            <h1 className="resultHead">Typing Test Result</h1>

            <h2 className="typeResult">WPM : {wpm}</h2>

            <h2 className="typeResult">Accuracy : {accuracy}%</h2>

            <button className="testAgainBtn" onClick={() => router.push("/")}>Take Another Test</button>

        </div>

    );

}