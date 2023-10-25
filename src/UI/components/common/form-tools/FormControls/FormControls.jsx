import cl from './FormControls.module.css'
import classNames from 'classnames'

export const FormElement = ({ input, meta: { touched, error }, ...props }) => {
	const hasError = touched && error

	return (
		<div className={classNames([cl.formControl], hasError ? [cl.error] : '')}>
			<div>
				<element_type {...input} {...props} />
				{hasError && <span>{error}</span>}
			</div>
		</div>
	)
}


