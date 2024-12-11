import { tpTypeTransaction } from "@/types/tpTypeTransaction"
import { FC } from "react"


interface tpNavbarProps{
    typeTransaction:tpTypeTransaction['typeTransaction']
    setTypeTranscription: (arg:tpTypeTransaction ['typeTransaction'])=>void
}

const Navbar:FC<tpNavbarProps> = ({ setTypeTranscription}) => {


    const handlerNavigate = (arg: tpTypeTransaction['typeTransaction']) => {
        setTypeTranscription(arg)
    }

    return <nav className=" w-full bg-black h-max text-gray-300 text-lg flex flex-col items-center justify-center gap-2 xs:rounded-br-[20%] xs:rounded-bl-[20%] xs:py-4 2xl:py-10 2xl:rounded-br-full 2xl:rounded-bl-full">
        <div className="flex items-center justify-center">
            <span>Total: $</span>
        </div>

        <ul className="flex w-full justify-around xs:text-xl 2xl:text-3xl">
            <li className="transition-all duration-200 hover: cursor-pointer hover:text-gray-400" onClick={() => handlerNavigate('gastos')}>Gastos</li>
            <li className="transition-all duration-200 hover: cursor-pointer hover:text-gray-400" onClick={() => handlerNavigate('ingresos')}>Ingresos</li>
        </ul>
    </nav>
}

export default Navbar