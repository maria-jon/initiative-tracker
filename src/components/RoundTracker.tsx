import { useState } from "react"

type CounterProps = {
    initialCount?: number;
    onChange?: (value: number) => void;
}

export const RoundTracker = (props: CounterProps) => {
    const initialCount: number = 1;
    const [count, setCount] = useState<number>(initialCount);

    const increaseCount = () => {
        setCount(prev => {
            const next = prev + 1;
            props.onChange?.(next); // calls to parent
            return next;
        });
    };

    const decreaseCount = () => {
        setCount(prev => {
            const next = prev - 1;
            props.onChange?.(next); // calls to parent
            return next;
        });
    }

    const resetCount = () => {
        setCount(() => {
            const next = 0;
            props.onChange?.(next); // calls to parent
            return next;
        });
    }

    return(
        <div>
            <p>Round {count}</p>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}