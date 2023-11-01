import { reduxForm } from 'redux-form'
import { createField } from '../../common/form-tools/FormControls/CreateField'
import cl from './LoginPage.module.css'
import { required,maxLengthCreator } from '../../common/form-tools/validators/validators'
import SubmitButton from '../../common/buttons/SubmitButton'

const maxLength30 = maxLengthCreator(30)

const LoginPageForm = ({ handleSubmit, error }) => {
	return (
		<>
			<form onSubmit={handleSubmit} className={cl.loginForm}>
				{createField(null, 'Email', 'email', [required, maxLength30], 'input', {})}
				{createField(null, 'Password', 'password', [required, maxLength30], 'input', { type: 'password' })}
				<div className={cl.checkbox}>
					{createField(null, '', 'rememberMe', null, 'input', { type: 'checkbox' }, 'Remember Me')}
					<span>Remember me</span>
				</div>
				{error && (
					<div className={cl.formSummaryError}>{error}</div>
					/* используем диструктуризацию пропсов */
					/* <div className={cl.formSummaryError}>{props.error}</div> */
				)}
				<SubmitButton name={'Login'} />
			</form>
		</>
	)
}

export const LoginPageReduxForm = reduxForm({
	form: 'login',
})(LoginPageForm)

export default LoginPageForm
