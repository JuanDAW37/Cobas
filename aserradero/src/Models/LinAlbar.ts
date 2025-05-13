import {Producto} from './Producto.ts';
import { Albaran } from './Albaran.ts';

export interface LinAlbar{
    id:bigint,
    producto_id:bigint,
    albaran_id:bigint,
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