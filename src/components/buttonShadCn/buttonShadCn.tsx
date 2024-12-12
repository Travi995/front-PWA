import { Button } from "@/components/ui/button"

interface ButtonDemoProps {
    label: string
    handlerSubmit?: ()=>void
}

export function ButtonDemo(props:ButtonDemoProps) {
    const {label, handlerSubmit}=props
    return <Button  onClick={handlerSubmit}>{label}</Button>
}