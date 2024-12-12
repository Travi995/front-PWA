
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchDefault } from '@/services/fetchDefault';
import { Button } from '../ui/button';
import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { useNavigate } from 'react-router-dom';

interface User {
    name: string;
    email: string;
    transactions: number;
    totalMoney: number;
    rol: string;
}

export default function BasicDemo() {

    const navigate = useNavigate()

    const [user, setUser] = useState<User[]>([
    ]);

    useEffect(() => {
        
    }, []);

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
        <div className="card w-full h-full flex justify-center items-center">
            <DataTable value={user} tableStyle={{ minWidth: '80rem'}} header={header}>
                <Column field="user" header="User"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="#transactions" header="No. Transactions"></Column>
                <Column field="totalMoney" header="Total Money"></Column>
                <Column field="rol" header="Roles"></Column>
                <Column field="actions" header="Actions"></Column>
            </DataTable>
        </div>
    );
}

