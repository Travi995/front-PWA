
import  { FC } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { useNavigate } from 'react-router-dom';

export interface User {
    id: number
    name: string;
    email: string;
    transactions: [];
    amount: number;
    roleUser: string;
    currency: string;
    

}

interface dataTable{
    data:User[],
}

const  BasicDemo:FC<dataTable > =({data})=> {

    const navigate = useNavigate()

   

    const handlerNavigate = (arg:string)=>{
        navigate(arg)
    }


    const header = (
        <div className="flex justify-between pr-5">
            <h5>Lista de Usuarios</h5>
            <ButtonDemo label='Add user' handlerSubmit={()=>handlerNavigate('/admin/formAddUser')} />
        </div>
    );

    return (
        <div className="card xs:w-[30rem] 2xl:w-full h-full flex justify-center items-center">
            <DataTable value={data} tableStyle={{ width: '80rem'}} header={header} className='xs:w-[15rem] sm:w-[20rem] 2xl:w-[40rem] 3xl:w-[65rem] 4xl:w-[80rem]'>
                <Column field="id" header="Id"></Column>
                <Column field="name" header="Nombre"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="currency" header="Tipo moneda"></Column>
                <Column field="amount" header="Dinero total"></Column>
                <Column field="roleUser" header="Roles"></Column>
                <Column field="actions" header="Actions"></Column>

            </DataTable>
        </div>
    );
}

export default BasicDemo

