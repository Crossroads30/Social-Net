const EditButton = ({ goToEditMode }) => {
	return (
		<span onClick={goToEditMode} className='edit-btn'>
			Edit
		</span>
	)
}

export default EditButton