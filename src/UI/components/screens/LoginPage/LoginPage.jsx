import { Navigate } from 'react-router-dom'
import cl from './LoginPage.module.css'
import { LoginPageReduxForm } from './loginPageForm'

const LoginPage = ({ login, isAuth, captchaUrl }) => {
	const addLoginData = formData => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (isAuth) {
		return <Navigate to='/my-profile' />
	}
	return (
		<>
			<LoginPageReduxForm onSubmit={addLoginData} captchaUrl={captchaUrl} />
		</>
	)
}

export default LoginPage
