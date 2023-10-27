import cl from './About.module.css'

const About = ({ userProfile }) => {
	return (
		<div className={cl.aboutWrapper}>
			<div className={cl.aboutInfoWrapper}>
				<div className={cl.aboutMeInfo}>info</div>
			</div>
			<span className={cl.aboutButton}>About</span>
		</div>
	) 
}

export default About
