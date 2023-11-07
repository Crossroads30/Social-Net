import cl from './Footer.module.css'
import logo from '../../../../assets/icons/calypso.svg'

const Footer = () => {
	return (
		<div className={cl.footer}>
			<div>
				<img src={logo} alt='logo' />
				<p>Calypso Corporation © 2023</p>
			</div>
			<p>All rights reserved</p>
		</div>
	)
}

export default Footer
