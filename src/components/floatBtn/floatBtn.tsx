import { FC } from "react";
import { IoIosAdd } from "react-icons/io";

interface FloatBtnProps {
    handlerNavigate:()=> void
}

const FloatBtn:FC<FloatBtnProps> = ({handlerNavigate}) => {
    return <button className="bg-yellow-600 transition-all duration-200 w-14 h-14 absolute right-4 bottom-4 rounded-full flex items-center justify-center shadow hover:bg-yellow-700" onClick={handlerNavigate}>
        <IoIosAdd className="w-10 h-10 text-white" />
        </button>
}

export default FloatBtn