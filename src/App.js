import React, { useState } from "react";
import './App.css';
import Person from "./Person/Person";

const App = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Max',age: 28 },
            { name: 'Manu',age: 29 },
            { name: 'Ali',age: 36 },
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        // DONT DO THIS: this.state.persons[0].name = 'Reza';
        setPersonsState({
            persons: [
                { name: 'Reza',age: 28 },
                { name: 'Manu',age: 29 },
                { name: 'Ali',age: 32 },
            ],
            otherState: personsState.otherState
        });
    }
    return (
        <div className="App">
            <h1>Hi, I'm a React app</h1>
            <button onClick={ switchNameHandler } >Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name}  age={personsState.persons[1].age}  >My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name}  age={personsState.persons[2].age}  />
        </div>
    );
}

export default App;
