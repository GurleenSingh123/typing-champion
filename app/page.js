'use client'

import "./styles/footer.css"
import "./styles/navbar.css"

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import paragraphs from "./data/paragraphs.json";
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation";

function home(){

    const [time, setTime] = useState(60);
    const [isTyping, setIsTyping] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const [paragraph, setParagraph] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charStatus, setCharStatus] = useState([]);
    const [testStarted, setTestStarted] = useState(false);
    const [lineNumber, setLineNumber] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const typingRef = useRef(null);
    const inputRef = useRef(null);
    const paragraphRef = useRef(null);
    const timerRef = useRef(null);
    const inactivityRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    
    const lineHeight = 65;

    const [totalTime, setTotalTime] = useState(60);
    
    const isMobile =
        typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const router = useRouter();

    useEffect(() => {
        router.prefetch("/result");
    }, [router]);

    function calculateWPM() {

        const correctCharacters = charStatus.filter(
            status => status === "correct"
        ).length;

        const timeInMinutes = totalTime / 60;

        const speed = Math.floor(
            (correctCharacters / 5) / timeInMinutes
        );

        return speed;
    }   


    function calculateAccuracy() {

        const correctCharacters = charStatus.filter(
            status => status === "correct"
        ).length;

        const incorrectCharacters = charStatus.filter(
            status => status === "incorrect"
        ).length;

        const totalTyped = correctCharacters + incorrectCharacters;

        if (totalTyped === 0) {
            return 0;
        }

        const result = Math.floor(
            (correctCharacters / totalTyped) * 100
        );

        return result;
    }

    function getRandomParagraph() {

        const usedIndexes = new Set();
        const selected = [];

        while (selected.length < 10) {

            const randomIndex = Math.floor(Math.random() * paragraphs.length);

            if (!usedIndexes.has(randomIndex)) {

                usedIndexes.add(randomIndex);
                selected.push(paragraphs[randomIndex]);

            }
        }

        setParagraph(selected.join(" "));

        setCurrentIndex(0);
        setCharStatus([]);
        setInputValue("");
    }

    let displayTime;

    if(time >= 60){
        displayTime = `${time / 60} min`;
    }

    else{
        displayTime = `${time} sec`;
    }


    let pageClass;

    if(isTyping){
        pageClass = 'typingMode';
    }

    else{
        pageClass = '';
    }

    function handleMouseMove() {
        setIsTyping(false);
    }

    function timeStart() {

        setCurrentIndex(0);
        setCharStatus([]);
        setInputValue("");

        setTime(totalTime);
        setIsPaused(false);

        setTestStarted(true);
        setIsTyping(true);
        setTimerStarted(false);
        
        setLineNumber(0);

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }

    function startTimer() {

        if (timerRef.current) return;

        setTimerStarted(true);

        timerRef.current = setInterval(() => {

            setTime((prev) => {

                if (prev <= 1) {

                    clearInterval(timerRef.current);
                    timerRef.current = null;

                    clearTimeout(inactivityRef.current);

                    setTimerStarted(false);
                    setTestStarted(false);

                    return 0;
                }

                return prev - 1;

            });

        }, 1000);
    }

    function pauseTimer() {

        if (timerRef.current) {

            clearInterval(timerRef.current);
            timerRef.current = null;

            setTimerStarted(false);

            setIsPaused(true);   // Show message
        }

    }

    function resetInactivityTimer() {

        clearTimeout(inactivityRef.current);

        inactivityRef.current = setTimeout(() => {

            pauseTimer();

        }, 10000);

    }


 function processCharacter(typedChar) {

    if (!testStarted) return;

    if (!isTyping) {
        setIsTyping(true);
    }

    if (isPaused) {
        setIsPaused(false);
    }

    startTimer();
    resetInactivityTimer();

    setCurrentIndex(prevIndex => {

        if (prevIndex >= paragraph.length) {
            return prevIndex;
        }

        const expectedChar = paragraph[prevIndex];

        setCharStatus(prevStatus => {

            const newStatus = [...prevStatus];

            if (typedChar === expectedChar) {
                newStatus[prevIndex] = "correct";
            } else {
                newStatus[prevIndex] = "incorrect";
            }

            return newStatus;
        });

        return prevIndex + 1;
    });
}

function handleBackspace() {

    if (currentIndex <= 0) return;

    let wordStart = currentIndex;

    while (
        wordStart > 0 &&
        paragraph[wordStart - 1] !== " "
    ) {
        wordStart--;
    }

    if (currentIndex - 1 < wordStart) {
        return;
    }

    const newStatus = [...charStatus];
    newStatus[currentIndex - 1] = "";

    setCharStatus(newStatus);
    setCurrentIndex(prev => prev - 1);
}

    // function processCharacter(typedChar) {

    //     if (!testStarted) return;

    //     if (!isTyping) {
    //         setIsTyping(true);
    //     }

    //     if (currentIndex >= paragraph.length) {
    //         return;
    //     }

    //     if (isPaused) {
    //         setIsPaused(false);
    //     }

    //     startTimer();
    //     resetInactivityTimer();

    //     const expectedChar = paragraph[currentIndex];

    //     const newStatus = [...charStatus];

    //     if (typedChar === expectedChar) {
    //         newStatus[currentIndex] = "correct";
    //     } else {
    //         newStatus[currentIndex] = "incorrect";
    //     }

    //     setCharStatus(newStatus);
    //     setCurrentIndex(prev => prev + 1);
    // }



    // function handleKeyDown(event) {

    //     if (event.code === "Space") {
    //         event.preventDefault();
    //     }

    //     if (
    //         event.key === "Shift" ||
    //         event.key === "CapsLock" ||
    //         event.key === "Control" ||
    //         event.key === "Alt" ||
    //         event.key === "Tab"
    //     ) {
    //         return;
    //     }

    //     if (event.key === "Backspace") {

    //         if (currentIndex <= 0) return;

    //         let wordStart = currentIndex;

    //         while (
    //             wordStart > 0 &&
    //             paragraph[wordStart - 1] !== " "
    //         ) {
    //             wordStart--;
    //         }

    //         if (currentIndex - 1 < wordStart) {
    //             return;
    //         }

    //         const newStatus = [...charStatus];
    //         newStatus[currentIndex - 1] = "";

    //         setCharStatus(newStatus);
    //         setCurrentIndex(prev => prev - 1);

    //         return;
    //     }

    //     processCharacter(event.key);
    // }

    function handleKeyDown(event) {

    // Ignore desktop if the user is on a mobile device
    if (isMobile) return;

    if (
        event.key === "Shift" ||
        event.key === "CapsLock" ||
        event.key === "Control" ||
        event.key === "Alt" ||
        event.key === "Tab"
    ) {
        return;
    }

    // if (event.key === "Backspace") {

    //     if (currentIndex <= 0) return;

    //     let wordStart = currentIndex;

    //     while (
    //         wordStart > 0 &&
    //         paragraph[wordStart - 1] !== " "
    //     ) {
    //         wordStart--;
    //     }

    //     if (currentIndex - 1 < wordStart) {
    //         return;
    //     }

    //     const newStatus = [...charStatus];
    //     newStatus[currentIndex - 1] = "";

    //     setCharStatus(newStatus);
    //     setCurrentIndex(prev => prev - 1);

    //     return;
    // }

    if (event.key === "Backspace") {
        handleBackspace();
        return;
    }

    processCharacter(event.key);
}



    // function handleInput(event) {

    //     // Ignore desktop keyboards (handled by onKeyDown)
    //     if (event.nativeEvent.inputType === undefined) {
    //         return;
    //     }

    //     const value = event.target.value;

    //     if (!value) return;

    //     const typedChar = value[value.length - 1];

    //     if (typedChar === "\n") {
    //         event.target.value = "";
    //         return;
    //     }

    //     processCharacter(typedChar);

    //     event.target.value = "";
    // }

    function handleInput(event) {

    if (!isMobile) return;

    const inputType = event.nativeEvent.inputType;

    // Handle mobile backspace
    // if (inputType === "deleteContentBackward") {

    //     if (currentIndex <= 0) return;

    //     let wordStart = currentIndex;

    //     while (
    //         wordStart > 0 &&
    //         paragraph[wordStart - 1] !== " "
    //     ) {
    //         wordStart--;
    //     }

    //     if (currentIndex - 1 < wordStart) {
    //         return;
    //     }

    //     const newStatus = [...charStatus];
    //     newStatus[currentIndex - 1] = "";

    //     setCharStatus(newStatus);
    //     setCurrentIndex(prev => prev - 1);

    //     return;
    // }

    if (inputType === "deleteContentBackward") {
    handleBackspace();
    return;
}
    const value = event.target.value;

    if (!value) return;
    
    // If multiple characters are inserted (autocomplete/paste),
    // process them one by one.
    for (const char of value) {
        processCharacter(char);
    }
    
    setInputValue("");
}


    useEffect(() => {

        if (currentIndex <= 0) return;

        const chars = document.querySelectorAll(".typePara span");

        const previousChar = chars[currentIndex - 1];
        const currentChar = chars[currentIndex];

        if (!previousChar || !currentChar) return;

        if (currentChar.offsetTop > previousChar.offsetTop) {
            setLineNumber(prev => prev + 1);
        }

    }, [currentIndex]);
 
    useEffect(() => {

        if (!testStarted && time === 0) {

            const wpm = calculateWPM();
            const accuracy = calculateAccuracy();

            localStorage.setItem("wpm", wpm);
            localStorage.setItem("accuracy", accuracy);

            router.push("/result");
        }

    }, [testStarted, time, charStatus]);

    useEffect(() => {
        getRandomParagraph();
    }, []);


    return(
        <>

        <div className={`page ${pageClass} `} onMouseMove={handleMouseMove}>

            {!isTyping && <Navbar />}

        <main className="mainContent">
            
            <p id="time" className="typeTime">{`Time: ${displayTime} `}</p>
            
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                className="hiddenInput"
                onKeyDown={!isMobile ? handleKeyDown : undefined}
                onInput={isMobile ? handleInput : undefined}
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                enterKeyHint="done"
                inputMode="text"/>

            {isPaused && (<div className="pauseMessage"> Timer paused. Resume typing to continue.</div>)}

            <div className="typeBox"  ref={typingRef} onClick={() => inputRef.current?.focus()}> 

                <div className="textWrapper" style={{
                    transform: `translateY(-${lineNumber * lineHeight}px)`}}>

                
                <p className="typePara" ref={paragraphRef}>
                                
                    {paragraph.split("").map((char, index) => {
                    let className = charStatus[index] || "";

                    if (testStarted && index === currentIndex) {
                        className += " active";
                    }

                    return (
                        <span key={index} className={className}>{char}</span>
                    );

                })}
                
                </p>
                </div>

            </div>

            {!isTyping && (<button id="btn" onClick={timeStart} className="startBtn">Start</button>)}

        </main>
            {!isTyping &&<Footer />}

        </div>
    </>
    )

}

export default home