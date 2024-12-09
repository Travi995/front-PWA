 
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
          <SelectItem value="cup">CUP</SelectItem>
          <SelectItem value="mlc">EURO</SelectItem>
          <SelectItem value="usd">USD</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}