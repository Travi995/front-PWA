import { Input } from "@/components/ui/input"

interface InputDemoProps {
    type: string
    placeholder: string
    handlerChange:(arg:string)=>void
   /*  validate: (e:React.ChangeEvent<HTMLInputElement>)=>boolean */
}


export function InputDemo(props: InputDemoProps) {
    const { type, placeholder, handlerChange } = props
    return <Input type={type} placeholder={placeholder} onChange={(e)=>handlerChange(e.target.value)} 
   /*  onInput={(e)=>validate(e)} */
    />
}