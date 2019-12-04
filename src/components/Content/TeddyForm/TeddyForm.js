import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import './TeddyForm.scss';
import ChildSlider from "../ChildSlider/ChildSlider";

const validate = values => {
    const errors = {}
    if (!values.child) {errors.child = "Лопух2"}
    if (!values.name ) {errors.name = "Лопух"}
    if (values.child === '') {errors.child = "Выберите Ребенка"}
    if (!values.email) {
        errors.email = 'Необходимое поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неправильный e-mail'
    }
    return errors
}

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
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
                    <div className="form__child-surname-title">Фамилия:</div>
                    <Field
                        name="surname"
                        component={renderField}
                        label=''
                        className='form__input'
                    />
                </div>
            </div>
            <Field
                name="child"
                component={ChildSlider}
                label=''
            />

            <div className="form__header">
                <div className="form__header-number">2.</div>
                <div className="form__header-title">Закончите форму</div>
                <div className="form__header-fake-number">2.</div>
            </div>
            {error && <div className='form__error'>
                {error}
            </div>
            }
            <div>{isLoading
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
        console.log(formData);
    }

    return <div className='teddy-form'>
        <ReduxForm onSubmit={onSubmit} isLoading={props.isLoading}/>
    </div>
}
const mapStateToProps = (state) => ({
    isLoading: state.teddy.isLoading
})

export default connect(mapStateToProps, {})(TeddyForm);