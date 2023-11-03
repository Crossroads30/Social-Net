import { Navigate } from 'react-router-dom'
import cl from './LoginPage.module.css'
import { LoginPageReduxForm } from './loginPageForm'
import logo from '../../../../assets/icons/calypso.svg'

const LoginPage = ({ login, isAuth, captchaUrl }) => {
	const addLoginData = formData => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (isAuth) {
		return <Navigate to='/my-profile' />
	}
	return (
		<div className={cl.loginWrapper}>
			<div className={cl.logoBlock}>
				<img src={logo} />
				<p>Please login to enter 'CALYPSO' </p>
			</div>
			<LoginPageReduxForm onSubmit={addLoginData} captchaUrl={captchaUrl} />
		</div>
	)
}

export default LoginPage
