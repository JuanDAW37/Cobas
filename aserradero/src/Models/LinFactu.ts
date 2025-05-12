import {Producto} from './Producto.ts';
import {Factura} from './Factura.ts';
import { LinAlbar } from './LinAlbar.ts';

export interface LinFactu{
    id:BigInteger,
    producto_id:BigInteger,
    factura_id:BigInteger,
    detalbar_id:BigInteger,
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