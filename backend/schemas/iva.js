import z from 'zod' // Paquete de npm para realizar validaciones

const ivaSchema = z.object({
    iva: z.number().positive().min(0).max(100, ({message:'El IVA, debe ser un número entero, positivo y comprendido entre 0 y 100', required_error: 'El IVA es requerido'}))
});

export function validarIVA(iva){    
    return ivaSchema.safeParse(iva);
}