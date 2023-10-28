const EditButton = ({ goToEditMode }) => {
	return (
		<span onClick={goToEditMode} className='edit'>
			Edit
		</span>
	)
}

export default EditButton