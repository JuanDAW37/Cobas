import {Iva} from './Iva.ts';
import {Familia} from './Familia.ts'

export interface Producto{
    id:BigInteger,
    nombre:string,
    precio1:number,
    precio2:number,
    precio3:number,
    precio4:number,
    precio5:number,
    iva_id:BigInteger,
    familia_id:BigInteger
    iva:Iva,
    familia:Familia
}