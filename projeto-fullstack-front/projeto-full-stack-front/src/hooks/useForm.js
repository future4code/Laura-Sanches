import { formatMs } from '@material-ui/core';
import {useState} from 'react';

const useForm = (initialState) => {
    const {Form, setForm} = useState(initialState)

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChange, clear]

}

export default useForm;