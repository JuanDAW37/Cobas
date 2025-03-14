import z from 'zod' // Paquete de npm para realizar validaciones

const familiaSchema = z.object({
    nombre: z.string({message:'El nombre de la familia debe ser una cadena', required_error: 'El nombre de la familia es requerido'}),
});

export function validarFamilia(familia){
    return familiaSchema.safeParse(familia);
}