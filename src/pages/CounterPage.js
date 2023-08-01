import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0); 

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        setValueToAdd(value);
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment} success rounded outline>
                    Increment
                </Button>
                <Button onClick={decrement} danger rounded outline>
                    Decrement
                </Button>
            </div>

            <form onSubmit={handleSumbit}>
                <label>Add a lot!</label>
                <input value={valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button primary>
                    Add it!
                </Button>
            </form>
        </Panel>
    )
}

export default CounterPage;