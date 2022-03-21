import index from '../index.js'

function Keypad (){
    function handleChange(){
        console.log("Entering password...");
    }
    return <input type="password" onChange={handleChange} />
}
export default Keypad;