import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';
import { useContext, useState } from 'react';
import 'primeicons/primeicons.css';
import CompCategory from '../compCategory/compCategory';
import { categories } from '@/enums/categories';
import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { tpCategory } from '@/types/tpCategory';
import { fetchDefault } from '@/services/fetchDefault';
import { GlobalContext } from '@/context/globalContext';


const FormCategory = ()=>{

    const {token} = useContext(GlobalContext)

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
        console.log(token)
        fetchDefault('http://localhost:3000/api/categories', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(category)
        },
        ()=>{alert('candela')}, ()=>{}
        )
    }

    return <form onSubmit={handlerSubmit} className='flex flex-col gap-4 items-center p-8 w-full'>
        <input placeholder="Nombre de la categoría" className='p-2 rounded-xl'onChange={(e)=>handlerChangeKeys('label', e.target.value)}></input>
        <ColorPicker value={color} onChange={handlerChange}/>
        <div className='w-full flex justify-around my-10'>
            {categories.map((item, index) => {
                return <CompCategory key={index} icon={item} handlerChangeKeys={(arg)=>handlerChangeKeys('icon', arg)}/>
            })}
        </div>
        <ButtonDemo label='Guardar' />
    </form>
}


export default FormCategory