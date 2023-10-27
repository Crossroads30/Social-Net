import { useState } from 'react'
import cl from './About.module.css'
import classNames from 'classnames'

const About = ({ userProfile }) => {

	const [about, setAbout] = useState(false)

	const openAbout = () => {
		setAbout(true)
	}
	const closeAbout = () => {
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
							: classNames(cl.aboutInfoWrapper, cl.aboutInfoWrapperActive)
					}
				>
					<div>
						<div onClick={closeAbout} className={cl.close}></div>
					</div>

					<div className={cl.aboutMeInfo}>
						<p>About me:</p>
						<span>{userProfile.aboutMe}</span>
						<p>My skills:</p>
						<span>{userProfile.lookingForAJobDescription}</span>
						<div className={cl.location}>
							<span></span>
							<p>Minsk, Belarus</p>
						</div>
						<div className={cl.job}>
							<span></span>
							<p> Work in "Altoros"</p>
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
