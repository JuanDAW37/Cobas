import * as React from 'react';
import { useState, useEffect } from 'react';
import { HelperHttp } from '../helpers/HelperHttp';

export const useForm = (initialForm, validateForm, endpoint) => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleBlur = (e) => {
        handleChange(e);
        setError(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validateForm(form));
        //Si el objeto errors está vacío se puede enviar el formulario
        if (Object.keys(error).length === 0) {
            const url = endpoint;
            setLoading(true);
            HelperHttp().post(url, { body: form, headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then((res) => {
                setLoading(false);
                setResponse(res);
                setForm(initialForm);
            })
            setResponse({ error: 200, message: 'Formulario enviado correctamente' });
            setForm(initialForm);
        } else {
            return
        }
    }

    return { form, error, loading, response, handleChange, handleBlur, handleSubmit }
}
