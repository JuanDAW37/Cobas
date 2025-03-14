import z from 'zod' // Paquete de npm para realizar validaciones

const facturaSchema = z.object({
    numero: z.required().string({message:'El número del albarán debe ser una cadena', required_error: 'El número del albarán es requerido'}),
    fecha: z.required().string({message:'La fecha del albarán debe ser una cadena', required_error: 'La fecha del albarán es requerida'}),
    ano: z.required().number().int().positive({message:'El año, debe ser un número entero positivo'}),
    cliente_id: z.required().number().int().positive().min(1, {message:'El cliente, debe ser un número entero positivo'}),
    albaran_id: z.required().number().int().positive().min(1, {message:'El cliente, debe ser un número entero positivo'}),
    base: z.required().number({message:'La base, debe ser un número'}),
    cuota: z.required().number({message:'La base, debe ser un número'}),
    total: z.required().number({message:'El total, debe ser un número'})    
});

export function validarSchemaFactura(factura){
    return facturaSchema.safeParse(factura);
}