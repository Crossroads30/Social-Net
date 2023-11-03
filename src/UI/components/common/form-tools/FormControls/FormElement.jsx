import cl from './FormElement.module.css'
import classNames from 'classnames'

export const FormElement = ({ input, meta: { touched, error }, ...props }) => {
	const hasError = touched && error

	return (
		<div className={classNames([cl.formControl], hasError ? [cl.error] : '')}>
			{hasError && <p>{error}</p>}
			<props.element_type {...input} {...props} />
		</div>
	)
}