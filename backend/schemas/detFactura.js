import z from 'zod'

const detFacturaSchema = z.object({
    producto_id: z.number().min(1).required({message:'El producto debe ser un número y es requerido'}),
    factura_id: z.number().min(1).required({message:'La factura debe ser un número y es requerido'}),
    albaran_id: z.number().min(1).required({message:'El albarán debe ser un número y es requerido'}),
    unidades: z.number().int({message:'Las unidades tienen que ser un número entero'}),
    L: z.number({message: 'El largo debe ser un número'}),
    A: z.number({message: 'El largo debe ser un número'}),
    E: z.number({message: 'El largo debe ser un número'}),
    cubicar: z.number().int().min(0).max(1, {message: 'El cubicar tiene que ser S o N'}),
    metros: z.number({message: 'Los metros tienen que ser un número'}),
    importe: z.number({message: 'El importe tiene que ser un número'})
});

export function validarDetFacturaSchema(detFactura){
    return detFacturaSchema.safeParse(detFactura);
}