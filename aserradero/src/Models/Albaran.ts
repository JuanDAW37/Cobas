import { LinAlbar } from "./LinAlbar"
import { Cliente } from "./Cliente.ts";

export interface Albaran{
    id:bigint,
    numero:string,
    fecha:string,
    ano:number,
    cliente_id:bigint,
    total:number
    linAlbar:Array<LinAlbar>,
    Cliente:Cliente
}