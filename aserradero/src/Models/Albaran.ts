import { LinAlbar } from "./LinAlbar"
import { Cliente } from "./Cliente.ts";

export interface Albaran{
    id:BigInteger,
    numero:string,
    fecha:string,
    ano:number,
    cliente_id:BigInteger,
    total:number
    linAlbar:Array<LinAlbar>,
    Cliente:Cliente
}