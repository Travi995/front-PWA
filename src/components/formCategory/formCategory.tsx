import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';
import { useState } from 'react';
import 'primeicons/primeicons.css';
import CompCategory from '../compCategory/compCategory';
import { categories } from '@/enums/categories';
import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { tpCategory } from '@/types/tpCategory';


const FormCategory = ()=>{

    const [color, setColor] = useState('#000000'); 

    const [category, setCategory]=useState<tpCategory>({
        label: '',
        icon: '',    
        color: ''
    })

    const handlerChange = (e:ColorPickerChangeEvent)=>{
        if(e.value){
            setColor(e.value as string)
            setCategory({...category, 'color':color})
        }
        
    }

    const handlerChangeKeys =(key:keyof tpCategory, arg:string)=>{
        setCategory({...category, [key]:arg})
    }

    const handlerSubmit = ()=>{

    }

    return <form className='flex flex-col gap-4 items-center p-8 w-full'>
        <input placeholder="Nombre de la categoría" className='p-2 rounded-xl'onChange={(e)=>handlerChangeKeys('label', e.target.value)}></input>
        <ColorPicker value={color} onChange={handlerChange}/>
        <div className='w-full flex justify-around my-10'>
            {categories.map((item, index) => {
                return <CompCategory key={index} icon={item} handlerChangeKeys={(arg)=>handlerChangeKeys('icon', arg)}/>
            })}
        </div>
        <ButtonDemo label='Guardar'handlerSubmit={handlerSubmit}/>
    </form>
}


export default FormCategory