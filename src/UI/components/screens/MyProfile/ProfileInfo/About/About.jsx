import { useState } from 'react'
import cl from './About.module.css'
import classNames from 'classnames'
import CloseButton from '../../../../common/buttons/CloseButton'

const About = ({ userProfile, userLocation, workAt }) => {
	const [about, setAbout] = useState(false)

	const openAbout = () => {
		setAbout(true)
	}
	const closeWindow = () => {
		setAbout(false)
	}

	return (
		<>
			{}
			<div className={cl.aboutWrapper}>
				<div
					className={
						!about
							? cl.aboutInfoWrapper
							: classNames(
									cl.aboutInfoWrapper,
									cl.aboutInfoWrapperActive
							  )
					}
				>
					<div className={cl.close}>
						<CloseButton closeWindow={closeWindow} />
					</div>

					<div className={cl.aboutMeInfo}>
						<p>About me:</p>
						<span>{userProfile.aboutMe}</span>
						<p>My skills:</p>
						<span>{userProfile.lookingForAJobDescription}</span>
						<div className={cl.location}>
							<span></span>
							<p>{userLocation}</p>
						</div>
						<div className={cl.job}>
							<span></span>
							<p>{workAt}</p>
						</div>
					</div>
				</div>
				<span onClick={openAbout} className={cl.aboutButton}>
					About
				</span>
			</div>
		</>
	)
}

export default About
