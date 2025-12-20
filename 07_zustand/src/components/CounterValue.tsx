import { useCounterStore } from "../store/counterStore"


function CounterValue() {
    const count = useCounterStore((state) => state.count);
    return (
        <div>
            <h2>Counter Value</h2>
            <p>Count: {count}</p>
        </div>
    )
}

export default CounterValue