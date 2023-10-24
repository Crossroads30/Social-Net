import cl from './Header.module.css'
import logo from '../../../../assets/icons/calypso.svg'

const Header = () => {
	return (
		<div className={cl.header}>
			<div className={cl.headerBlock}>
				<img src={logo} />
				<h1>Calypso</h1>
			</div>
		</div>
	)
}

export default Header
