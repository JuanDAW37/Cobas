import z from 'zod' // Paquete de npm para realizar validaciones

const productoSchema = z.object({
    nombre: z.string({message:'El nombre del producto debe ser una cadena', required_error: 'El nombre del producto es requerido'}),
    precio1: z.number().positive().min(0, {message:'El precio, debe ser un número positivo'}),
    precio2: z.number().positive().min(0, {message:'El precio, debe ser un número positivo'}),
    precio3: z.number().positive().min(0, {message:'El precio, debe ser un número positivo'}),
    precio4: z.number().positive().min(0, {message:'El precio, debe ser un número positivo'}),
    precio5: z.number().positive().min(0, {message:'El precio, debe ser un número positivo'}),
    iva_id: z.number().int().positive().min(1, {message:'El IVA, debe ser un número entero positivo'}),
    familia_id: z.number().int().positive().min(1, {message:'La familia, debe ser un número entero positivo'})
})

export function validarProducto(producto){
    return productoSchema.safeParse(producto);
}