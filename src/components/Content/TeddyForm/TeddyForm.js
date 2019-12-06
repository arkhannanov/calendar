import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import './TeddyForm.scss';
import ChildSlider from "../ChildSlider/ChildSlider";
import HeroSlider from "../HeroSlider/HeroSlider";
import {instance} from "../../../api/api";
import { saveAs } from 'file-saver';

const validate = values => {
    const errors = {}
    if (!values.hero) {
        errors.hero = "Выберите изображение"
    }
    if (!values.child) {
        errors.child = "Выберите изображение"
    }
    if (!values.name) {
        errors.name = "Обязательное поле"
    }
    if (!values.email) {
        errors.email = 'Обязательное поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неправильный e-mail'
    }
    return errors
}

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="form__render-field">
        <input {...input} placeholder={label} type={type} className="form__control"/>
        {touched && ((error && <span className="form__text-danger">{error}</span>) || (warning &&
            <span>{warning}</span>))}
    </div>
)

const Form = ({handleSubmit, error, pristine, submitting, isLoading}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="form__header">
                <div className="form__header-number">1.</div>
                <div className="form__header-title">Выберите ребенка и героя</div>
                <div className="form__header-fake-number">1.</div>
            </div>
            <div className="form__child-name-surname-container">
                <div className="form__child-name-container">
                    <div className="form__child-name-title">Имя ребенка:</div>
                    <Field
                        name="name"
                        component={renderField}
                        label='Имя'
                        className='form__input'
                    />
                </div>
                <div className="form__child-surname-container">
                    <div className="form__child-surname-title">E-mail:</div>
                    <Field
                        name="email"
                        component={renderField}
                        label=''
                        className='form__input'
                    />
                </div>
            </div>
            <div className="form__sliders-container">
                <Field
                    name="child"
                    component={ChildSlider}
                    label=''
                />
                <Field
                    name="hero"
                    component={HeroSlider}
                    label=''
                />
            </div>
            <div className="form__header">
                <div className="form__header-number">2.</div>
                <div className="form__header-title">Отправьте данные:</div>
                <div className="form__header-fake-number">2.</div>
            </div>
            {error && <div className='form__error'>
                {error}
            </div>
            }
            <div className='form__submit-button-container'>{isLoading
                ? <button>Подождите...</button>
                : <button className='form__submit-button' type='submit' disabled={pristine || submitting}>
                    Отправить
                </button>
            }
            </div>
        </form>
    )
}

const ReduxForm = reduxForm({form: 'teddy', validate})(Form)

const TeddyForm = (props) => {
    const onSubmit = (formData) => {

        console.log('Деплой новый');
        instance.post('/create-pdf', formData).then(()=>instance.post('fetch-pdf', formData));

            // .then(() => instance.get('fetch-pdf', { responseType: 'blob' }))
            // .then((res) => {
            //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            //
            //     saveAs(pdfBlob, 'newPdf.pdf');
            // })
    }

    return <div className='teddy-form'>
        <ReduxForm onSubmit={onSubmit} isLoading={props.isLoading}/>
    </div>
}
const mapStateToProps = (state) => ({
    isLoading: state.teddy.isLoading
})

export default connect(mapStateToProps, {})(TeddyForm);