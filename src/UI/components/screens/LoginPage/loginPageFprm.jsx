import { createField } from '../../common/form-tools/FormControls/CreateField'
import cl from './LoginPage.module.css'

const LoginPage = () => {
	return (
		<>
			<div>Login Page</div>
			<form>{createField()}</form>
		</>
	)
}

export default LoginPage
