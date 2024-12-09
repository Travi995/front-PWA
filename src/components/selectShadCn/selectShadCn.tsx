import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a currency"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="cup">CUP</SelectItem>
          <SelectItem value="mlc">MLC</SelectItem>
          <SelectItem value="usd">USD</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}