 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectDemo{
  handlerChange:(arg:string)=>void
}


export function SelectDemo(props:SelectDemo) {
  const {handlerChange} = props
  return (
    <Select onValueChange={handlerChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a currency"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="CUP">CUP</SelectItem>
          <SelectItem value="EURO">EURO</SelectItem>
          <SelectItem value="USD">USD</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}