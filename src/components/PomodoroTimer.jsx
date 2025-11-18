import { useState, useEffect } from "react";

function PomodoroTimer({ projectId }) {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (!active) return;
        const timer = setInterval(() => {
            setTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <div style={{ marginTop: "10px" }}>
            <p>
                {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
            </p>
            <button onClick={() => setActive(!active)} style={{ marginRight: "5px" }}>
                {active ? "Pause" : "Start"}
            </button>
            <button onClick={() => setTime(25 * 60)}>Reset</button>
        </div>
    );
}

export default PomodoroTimer;
