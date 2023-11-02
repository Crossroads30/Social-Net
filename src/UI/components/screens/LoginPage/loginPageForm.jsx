import { reduxForm } from 'redux-form'
import { createField } from '../../common/form-tools/FormControls/CreateField'
import cl from './LoginPage.module.css'
import { required,maxLengthCreator } from '../../common/form-tools/validators/validators'
import SubmitButton from '../../common/buttons/SubmitButton'

const maxLength30 = maxLengthCreator(30)

const LoginPageForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<>
			<form onSubmit={handleSubmit} className={cl.loginForm}>
				{createField(null, 'Email', 'email', [required, maxLength30], 'input', {})}
				{createField(null, 'Password', 'password', [required, maxLength30], 'input', { type: 'password' })}
				<div className={cl.checkbox}>
					{createField(null, '', 'rememberMe', null, 'input', { type: 'checkbox' }, 'Remember Me')}
					<span>Remember me</span>
				</div>
				{captchaUrl && <img src={captchaUrl} />}
				{captchaUrl && createField(null, 'Symbols from image', 'captcha', [required], 'input', {})}
				{error && <div className={cl.formSummaryError}>{error}</div>}
				<SubmitButton name={'Login'} />
			</form>
		</>
	)
}

export const LoginPageReduxForm = reduxForm({
	form: 'login',
})(LoginPageForm)

export default LoginPageForm
