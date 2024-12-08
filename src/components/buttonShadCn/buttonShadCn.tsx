import { Button } from "@/components/ui/button"

interface ButtonDemoProps {
    label: string
}

export function ButtonDemo(props:ButtonDemoProps) {
    const {label}=props
    return <Button>{label}</Button>
}