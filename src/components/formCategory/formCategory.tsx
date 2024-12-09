import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';
import { useState } from 'react';
import 'primeicons/primeicons.css';
import CompCategory from '../compCategory/compCategory';
import { categories } from '@/enums/categories';
import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { tpCategory } from '@/types/tpCategory';
import { handler } from 'tailwindcss-animate';


const FormCategory = ()=>{

    const [color, setColor] = useState('#000000'); 

    const handlerChange = (e:ColorPickerChangeEvent)=>{
        if(e.value){
            setColor(e.value as string)
            setCategory({...category, 'color':color})

        }
        
    }

    const [category, setCategory]=useState<tpCategory>({
        label: '',
        icon: '',    
        color: ''
    })

    const handlerChangeKeys =(key:keyof tpCategory, arg:string)=>{
        setCategory({...category, [key]:arg})
    }

    const handlerSubmit = ()=>{

    }

    return <form className='flex flex-col gap-4 items-center p-8 w-full'>
        <input placeholder="Nombre de la categoría" className='p-2 rounded-xl'></input>
        <ColorPicker value={color} onChange={handlerChange} />
        <div className='w-full flex justify-around my-10'>
            {categories.map((item, index) => {
                return <CompCategory key={index} icon={item.icon} />
            })}
        </div>
        <ButtonDemo label='Guardar'/>
    </form>
}


export default FormCategory