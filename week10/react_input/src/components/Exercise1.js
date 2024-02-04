import { useState } from 'react';

const Exercise1 = () => {
    const [person, setPerson] = useState({ name: "", age: "" });

    const handleChange = (event, property) => {
        setPerson({ ...person, [property]: event.target.value });
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(`Come in ${person.name}, you’re ${person.age} - that’s good enough.`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id="name-input" onChange={(e) => handleChange(e, 'name')} value={person.name} />
            <input id="age-input" onChange={(e) => handleChange(e, 'age')} value={person.age} />
            <button>Go to Bar</button>
        </form>
    );
}
export default Exercise1;