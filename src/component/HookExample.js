import React, { useState } from "react";

export default function HookExample() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    function handleChangeMail(e) {
        setEmail(e.target.value)
    }
    
    function handleChangePassword(e) {
        setPassword(e.targe.value)
    }
    
    return (
        <form>
            <h1> Your Email: </h1><br/>
            <input value={email} onChange={handleChangeMail} /><br/>
            <h1>Your password: </h1><br/>
            <input value={password} onChange={handleChangePassword} />
        </form>
    )   
} 

// import React, { useState } from 'react'

// function useInputText(defaultValue) {
//     const [value, setValue] = useState(defaultValue)
//     function onChange(e) {
//         setValue(e.target.value)
//     }
//     return {
//         value,
//         onChange,
//     }
// }

// function App() {
//   const useEmail = useInputText('')
//   const usePassword = usePassword('')
//   return (
//    <form>
//       <input {...useEmail} />
//       <input {...usePassword} />
//    </form>
//   )
// }