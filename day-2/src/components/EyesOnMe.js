import index from '../index.js'

function EyesOnMe(){
    function focusEvent(){
        console.log("Good!");
    }

    const blurEvent = () => {
        console.log("Hey! Eyes on me!");
    }
    return <button onFocus={focusEvent} onBlur={blurEvent}>Eyes on me</button>
}
export default EyesOnMe;