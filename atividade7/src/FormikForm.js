import {Formik} from 'formik';
import React from 'react';

const FormikForm =() => {
    const handleSubmitting = (values, {setSubmitting}) => {
        setTimeout(() => {
            console.info(JSON.stringify(values, null, 12));
            setSubmitting(false);
        }, 400);
    }

    return(
        <Formik initialValues={{
            nome: '',
            idade: '',
            cpf: '',
            matricula: '',
            curso: '',
            endereco: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            cep: ''
        }} onSubmit={handleSubmitting}>
            {({values, handleChange, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <div className="wrapper">
                        <div className="reg-form" onSubmit={handleSubmit}>
                            <div className="register-fields">
                                <input type="text" className="input" name="nome" placeholder="Nome" value={values.nome} onChange={handleChange} />
                                <input type="number" className="input" name="idade" placeholder="Idade" value={values.idade} onChange={handleChange} />
                                <input type="text" className="input" name="cpf" placeholder="CPF" value={values.cpf} onChange={handleChange} />
                                <input type="text" className="input" name="matricula" placeholder="Matricula" value={values.matricula} onChange={handleChange} />
                                <input type="text" className="input" name="curso" placeholder="Curso" value={values.curso} onChange={handleChange} />
                                <input type="text" className="input" name="cep" placeholder="CEP" value={values.cep} onChange={handleChange} />
                                <input type="text" className="input" name="endereco" placeholder="Endereço" value={values.endereco} onChange={handleChange} />
                                <input type="text" className="input" name="bairro" placeholder="Bairro" value={values.bairro} onChange={handleChange} />
                                <input type="text" className="input" name="cidade" placeholder="Cidade" value={values.cidade} onChange={handleChange} />
                                <input type="text" className="input" name="numero" placeholder="Número" value={values.numero} onChange={handleChange} />
                                <input type="text" className="input" name="complemento" placeholder="Complemento" value={values.complemento} onChange={handleChange} />
                                <select className="input" name="uf" value={values.uf} onChange={handleChange} >
                                    <option value="AA">AA</option>
                                    <option value="BB">BB</option>
                                </select>
                            </div>
                       
                        <input type="submit" className="btn" value="Cadastrar" disable={isSubmitting} />
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default FormikForm;