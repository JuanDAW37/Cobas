import {Producto} from './Producto.ts';
import {Factura} from './Factura.ts';
import { LinAlbar } from './LinAlbar.ts';

export interface LinFactu{
    id:bigint,
    producto_id:bigint,
    factura_id:bigint,
    detalbar_id:bigint,
    unidades:number,
    L:number,
    A:number,
    E:number,
    cubicar:boolean,
    metros:number,
    importe:number
    Producto:Producto,
    Factura:Factura,
    LinAlbar:LinAlbar
}