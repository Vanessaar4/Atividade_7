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
                <div className="wrapper">
                    <div className="reg-form">
                        <div className="register-fields">
                            <input type="text" className="input" name="name" placeholder="Name" value={values.nome} onChange={handleChange} />
                            <input type="number" className="input" name="age" placeholder="Age" value={values.idade} onChange={handleChange} />
                            <input type="text" className="input" name="cpf" placeholder="CPF" value={values.cpf} onChange={handleChange} />
                            <input type="text" className="input" name="matricula" placeholder="Matricula" value={values.matricula} onchange={handleChange} />
                            <input type="text" className="input" name="course" placeholder="Course" value={values.curso} onChange={handleChange} />
                            <input type="text" className="input" name="zip" placeholder="Zip-code" value={values.cep} onChange={handleChange} />
                            <input type="text" className="input" name="location" placeholder="Location" value={values.endereco} onChange={handleChange} />
                            <input type="text" className="input" name="bairro" placeholder="Neighborhood" value={values.bairro} onChange={handleChange} />
                            <input type="text" className="input" name="city" placeholder="City" value={values.cidade} onchange={handleChange} />
                            <input type="text" className="input" name="number" placeholder="House number" value={values.numero} onChange={handleChange} />
                            <input type="text" className="input" name="complemento" placeholder="complement" value={values.complemento} onChange={handleChange} />
                            <select className="input" value={values.uf} onChange={this.handleOnUfChange} >
                                <option value="AA">AA</option>
                                <option value="BB">BB</option>
                            </select>
                        </div>
                    <div className="btn" onClick={this.confirmDate}>Register</div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default FormikForm;