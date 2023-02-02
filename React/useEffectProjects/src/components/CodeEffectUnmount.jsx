import { useState, useEffect } from "react";
import MessageComponent from "./MessageComponent";


const CodeEffectUnmount =()=>{

    const [visible, setVisible] = useState(false)
    
    useEffect(()=>{
console.log("Me monto en el DOM")
return () =>{console.log("Me desmonto del DOM")}

    }, [])


return(
<div>

{visible && <MessageComponent/>}
<button onClick={()=>{setVisible(!visible)}}>Change visibility</button>

</div>

)

}

export default CodeEffectUnmount