import {React} from "../../.react-my-library/React.js";
import Section from "../Section/Section.js";

const hello = 'Hello everybody!'

const someFunction = () => {
    console.log("some text")
}

const App = () => {
    return (`
        <h1 
            class="heading" 
            ${React.createAsyncEvent("click")
                .then(event => {
                    React.event(document.querySelector('.heading'), event, someFunction)
                })
            }
        >
            ${hello}
        </h1>

        <button class="btn">Click me</button>
        ${Section()}
    `);
}

export default App;