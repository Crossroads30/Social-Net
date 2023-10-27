import cl from './About.module.css'

const About = ({ userProfile }) => {
	return (
		<>
			{}
			<div className={cl.aboutWrapper}>
				<div className={cl.aboutInfoWrapper}>
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
				<span className={cl.aboutButton}>About</span>
			</div>
		</>
	)
}

export default About
