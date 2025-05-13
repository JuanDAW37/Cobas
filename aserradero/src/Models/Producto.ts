import {Iva} from './Iva.ts';
import {Familia} from './Familia.ts'

export interface Producto{
    id:bigint,
    nombre:string,
    precio1:number,
    precio2:number,
    precio3:number,
    precio4:number,
    precio5:number,
    iva_id:bigint,
    familia_id:bigint,
    iva:Iva,
    familia:Familia
}