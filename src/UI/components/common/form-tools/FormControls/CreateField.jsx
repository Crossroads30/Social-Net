import { Field } from "redux-form"
import { FormElement } from "./FormElement"

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
			<Field
				placeholder={placeholder}
				name={name}
				validate={validate}
				component={FormElement}
				element_type={element_type}
				{...props}
			/>
			// {text}		
	)
}
