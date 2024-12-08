export const validateText = (e:React.ChangeEvent<HTMLInputElement>)=>{
    return /^[a-zA-Z]+$/.test(e?.target.value) 

    
 
}

export const validateEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
    return /^[a-zA-Z/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(e?.target.value) 

    
 
}



