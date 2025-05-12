import { LinFactu } from "./LinFactu.ts";
import { Albaran } from './Albaran.ts';
import { Cliente } from "./Cliente.ts";

export interface Factura{
    id:BigInteger,
    numero:string,
    fecha:string,
    ano:number,
    albaran_id:BigInteger,
    cliente_id:BigInteger,
    base:number,
    cuota:number,
    total:number,
    linFactu:Array<LinFactu>,
    Albaran:Albaran,
    Cliente:Cliente
}