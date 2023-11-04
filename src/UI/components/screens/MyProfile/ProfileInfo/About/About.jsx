import { useState } from 'react'
import cl from './About.module.css'
import classNames from 'classnames'
import CloseButton from '../../../../common/buttons/CloseButton'
import EditButton from '../../../../common/buttons/EditButton'
import { EditAboutReduxForm } from '../EditProfileInfoForms/EditAboutForm'

const About = ({ userProfile, getUpdateUserProfile, isOwner }) => {
	const [about, setAbout] = useState(false)

	const openAbout = () => {
		setAbout(true)
	}
	const closeWindow = () => {
		setAbout(false)
		setEditAbout(false)
	}
	const [editAbout, setEditAbout] = useState(false)

	const activateEditAbout = () => {
		setEditAbout(true)
	}
	const closeEditWindow = () => {
		setEditAbout(false)
	}
		const onSubmitEditForm = formData => {
			getUpdateUserProfile(formData).then(() => {
				setEditAbout(false)
			})
		}

	return (
		<>
			<div className={cl.aboutWrapper}>
				<span onClick={openAbout} className={!about ? cl.aboutButton : classNames(cl.aboutButton, cl.aboutButtonDisable)}>
					About
				</span>
				<div className={!about ? cl.aboutInfoWrapper : classNames(cl.aboutInfoWrapper, cl.aboutInfoWrapperActive)}>
					<div className={cl.close}>
						<CloseButton closeWindow={closeWindow} />
					</div>
					{!editAbout && (
						<>
							<div className={cl.aboutMeInfo}>
								<div>
									<p>About me:</p>
									<span>{userProfile.aboutMe ? userProfile.aboutMe : 'No Info'}</span>
								</div>
								<div>
									<p>My skills:</p>
									<span>{userProfile.lookingForAJobDescription ? userProfile.lookingForAJobDescription : 'No Info'}</span>
								</div>
							</div>
							<div className={cl.editAboutButton}>{isOwner && <EditButton goToEditMode={activateEditAbout} />}</div>
						</>
					)}
					{editAbout && (
						<EditAboutReduxForm
							initialValues={userProfile}
							getUpdateUserProfile={getUpdateUserProfile}
							closeEditWindow={closeEditWindow}
							onSubmit={onSubmitEditForm}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default About
