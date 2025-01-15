import { tpSelectTypeMoney } from "./tpSelectTypeMoney"

export type tpMoney = {
    id: string,
    typeCoin: tpSelectTypeMoney,
    value: number,
    type: 'Gasto' | 'Ingreso'
}