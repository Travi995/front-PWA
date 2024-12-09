import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';
import { useState } from 'react';


const FormCategory = ()=>{

    const [color, setColor] = useState('#000000'); 

    const handlerChange = (e:ColorPickerChangeEvent)=>{
        if(e.value){
            setColor(e.value as string)
        }
        console.log(e.value)
        
    }

    return <form className='flex flex-col gap-4 items-center p-8'>
        <input placeholder="Nombre de la categoría" className='p-2 rounded-xl'></input>
        <ColorPicker  className='' value={color} onChange={handlerChange}/>
    </form>
}


export default FormCategory