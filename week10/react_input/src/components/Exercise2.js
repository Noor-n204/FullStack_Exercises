
import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    
const handleChange = (event) => {
    setFruit(event.target.value)
        alert(`${name} selected ${event.target.value}`)
}


    return (
        <form>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={handleChange} value={fruit}>
                <option value="Watermelon">Watermelon</option>
                <option value="Banana">Banana</option>
                <option value="Apple">Apple</option>
                <option value="Grapes">Grapes</option>
            </select>
        </form>
    );
}
export default Exercise2;
