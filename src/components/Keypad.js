// Code Keypad Component Here

function Keypad (){
    function typing(){
        console.log('Entering password...')
    }
    return (
        
            <input type="password" onChange={typing} />
        
    )
}

export default Keypad;