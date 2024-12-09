
export const validateMoney = (arg:string)=>{
    const validInput = arg.replace(/[^0-9.]/g, '');
    

    return  /^(?!0)([0-9]+(\.[0-9]+)?)$/.test(validInput)
}