import z from 'zod' // Paquete de npm para realizar validaciones

const ivaSchema = z.object({
    tipo: z.number().positive().min(0).max(100, ({message:'El IVA, debe ser un número entero, positivo y comprendido entre 0 y 100', required_error: 'El IVA es requerido'})),
    nombre: z.string().min(3, {message:'El nombre del IVA debe tener al menos 3 caracteres', required_error: 'El nombre del IVA es requerido'})
});

export function validarIva(input){    
    return ivaSchema.safeParse(input);
}