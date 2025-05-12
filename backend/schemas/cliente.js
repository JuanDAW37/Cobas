import z from 'zod' // Paquete de npm para realizar validaciones

const clienteSchema = z.object({
    nombreApellidos: z.string({message:'El nombre y apellidos del cliente debe ser una cadena',
        required_error: 'El nombre y apellidos del cliente es requerido'}),
    nif: z.string({message:'El NIF del cliente debe ser una cadena', required_error: 'El NIF del cliente es requerido'}),
    direccion: z.string({message:'La dirección del cliente debe ser una cadena', required_error: 'La dirección del cliente es requerida'}),
    localidad: z.string({message: 'La localidad del cliente debe ser una cadena', required_error: 'La localidad del cliente es requerida'}),
    cp: z.number().int().positive({message:'El código postal, debe ser un número entero, positivo y comprendido entre 1000 y 52999',
        required_error: 'El código postal es requerido'}),
    provincia: z.string({message:'La provincia del cliente debe ser una cadena', required_error: 'La provincia del cliente es requerida'}),
    pais: z.string({message:'El país del cliente debe ser una cadena', required_error: 'El país del cliente es requerido'}),
    telefono1: z.string().optional({message:'El teléfono del cliente debe ser una cadena'}),
    telefono2: z.string().optional({message:'El teléfono del cliente debe ser una cadena'}),
    fax: z.string().optional({message:'El fax del cliente debe ser una cadena'}),
    email: z.any().optional(),
    web: z.any().optional(),
    fechaAlta: z.string().optional()
});

export function validarCliente(cliente){    
    return clienteSchema.safeParse(cliente);
}