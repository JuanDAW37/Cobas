import {Producto} from './Producto.ts';
import { Albaran } from './Albaran.ts';

export interface LinAlbar{
    id:BigInteger,
    producto_id:BigInteger,
    albaran_id:BigInteger,
    unidades:number,
    L:number,
    A:number,
    E:number,
    cubicar:boolean,
    metros:number,
    importe:number,
    Producto:Producto,
    Albaran:Albaran
}