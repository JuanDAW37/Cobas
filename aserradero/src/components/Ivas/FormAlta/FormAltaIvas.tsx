import { useForm } from "../../../hooks/useForm";
import { routes } from "../../../hooks/routes";

const initialForm = {
  nombre: "",
  tipo:0
};
const validationsForm = (form) => {
  let errors = {};
  
  let regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;  
  let regexTipo = /^[0-9]{1,2}$/;

  if(!form.nombre.trim()) {
    errors.nombre = "El 'Nombre' es requerido";
  }else if(regexName.test(form.nombre.trim()) === false){
    errors.nombre = "El 'Nombre' solo acepta letras y espacios en blanco";
  }

  if(!form.tipo){
    errors.tipo = "El 'Tipo' es requerido";
  }else if(regexTipo.test(form.tipo) === false){
    errors.tipo = "El 'Tipo' solo acepta números";
  }
  return errors;
};

export const FormAltaIvas = () => {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  const endpoint = routes[2]; // Cambia el índice según la ruta que necesites
  return (
    <>
      <div>FormAlta</div>
      <form onSubmit={handleSubmit} endpoint={endpoint}>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
          placeholder="Nombre..."
        />
        {error.nombre && <p>{error.nombre}</p>}
        <input
          type="number"
          id="tipo"
          name="tipo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.tipo}
          required
          placeholder="Tipo..."
        />
        {error.tipo && <p>{error.tipo}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
