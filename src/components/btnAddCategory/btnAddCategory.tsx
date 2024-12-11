import { FC } from "react";
import { IoIosAdd } from "react-icons/io";

interface btnAddCategoryProps {
    handlerNavigate: () => void
}

const BtnAddCategory: FC<btnAddCategoryProps> = ({ handlerNavigate }) => {
    return <div className="w-28 h-36 relative flex flex-col items-center">
        <button className="bg-gray-500 transition-all duration-200 w-28 h-28 rounded-full flex items-center justify-center shadow hover:bg-gray-600" onClick={handlerNavigate}>
            <IoIosAdd className="w-10 h-10 text-white" />
        </button>
        <span className="absolute bottom-0">Add category</span>
    </div>

}

export default BtnAddCategory