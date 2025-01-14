import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';
import { SyntheticEvent, useContext, useState } from 'react';
import 'primeicons/primeicons.css';
import CompCategory from '../compCategory/compCategory';
import { iconCategories } from '@/enums/iconCategories';
import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { tpCategory } from '@/types/tpCategory';
import { fetchDefault } from '@/services/fetchDefault';
import { GlobalContext } from '@/context/globalContext';
import { useNavigate } from 'react-router-dom';


const FormCategory = () => {

    const navigate = useNavigate()

    const { token } = useContext(GlobalContext)

    const [color, setColor] = useState('#000000');

    const [active, setActive] = useState<boolean>(false)


    const [category, setCategory] = useState<tpCategory>({
        label: '',
        icon: '',
        color: ''
    })

    const handlerNavigate = () => {
        navigate(-1)
    }

    const handlerChangeColorPicker = (e: ColorPickerChangeEvent) => {
        if (e.value) {
            setColor(e.value as string)
            setCategory({ ...category, 'color': color })
        }
    }

    const handlerClick = ()=>{
        setActive(!active)
    }

    const handlerChange = (key: keyof tpCategory, arg: string) => {
        setCategory({ ...category, [key]: arg })
    }

    const handlerSubmit = (e:SyntheticEvent) => {
        e.preventDefault()
        console.log(token)
        console.log(category)
        fetchDefault('http://localhost:3000/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(category)
        },
            () => { handlerNavigate()}, () => { }
        )
    }

    return <form onSubmit={handlerSubmit} className='flex flex-col gap-4 items-center py-8 px-2 w-full'>
        <input placeholder="Nombre de la categoría" className='p-2 rounded-xl' onChange={(e) => handlerChange('label', e.target.value)}></input>
        <ColorPicker value={color} onChange={handlerChangeColorPicker} />
        <div className='w-full flex flex-wrap gap-4 justify-around my-10 mb-40'>
            {iconCategories.map((item, index) => {
                return <CompCategory key={index} icon={item} handlerChange={(arg) => handlerChange('icon', arg)} handlerClick={handlerClick} active={active}/>
            })}
        </div>
        <ButtonDemo  label='Guardar' />
    </form>
}


export default FormCategory