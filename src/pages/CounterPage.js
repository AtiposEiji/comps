import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const constants = require("./CounterPageConst");

const reducer = (state, action) => {
    switch (action.type) {
        case constants.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case constants.DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case constants.CHANGE_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case constants.ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            throw new Error(`unexpected action type: ${action.type}`);
    }
}

function CounterPage({ initialCount }) {
    //useReducer
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: constants.INCREMENT_COUNT
        });
    }

    const decrement = () => {
        dispatch({
            type: constants.DECREMENT_COUNT
        });
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: constants.CHANGE_VALUE_TO_ADD,
            payload: value
        });
    }

    const handleSumbit = (event) => {
        event.preventDefault();

        dispatch({
            type: constants.ADD_VALUE_TO_COUNT,
        });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
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
                <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button primary>
                    Add it!
                </Button>
            </form>
        </Panel>
    )
}

export default CounterPage;