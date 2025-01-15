import { tpSelectTypeMoney } from "./tpSelectTypeMoney"

export type tpTransaction = {
    amount: number,
    currency: tpSelectTypeMoney,
    category: number,
    typeTransaction: 'Gasto' | 'Ingreso'
}


