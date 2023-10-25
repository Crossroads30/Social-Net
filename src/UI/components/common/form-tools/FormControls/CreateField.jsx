import { Field } from "redux-form"
import { FormElement } from "./FormControls"

export const createField = (
	className,
	placeholder,
	name,
	validate,
	element_type,
	props = {},
	text = ''
) => {
	return (
		<div className={className}>
			<Field
				placeholder={placeholder}
				name={name}
				validate={validate}
				component={FormElement}
				element_type={element_type}
				{...props}
			/>
			{text}
		</div>
	)
}
