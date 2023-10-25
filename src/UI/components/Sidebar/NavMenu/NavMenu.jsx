import cl from './NavMenu.module.css'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
	return (
		<nav className={cl.navMenu}>
			<ul className={cl.navList}>
				<li>
					<NavLink className={navData => (navData.isActive ? cl.active : cl.link)} to='/my-profile'>
						My Profile
					</NavLink>
				</li>
				<li>
					<NavLink
						className={navData => (navData.isActive ? cl.active : cl.link)}
						to='/my-channels'
					>
						My Channels
					</NavLink>
				</li>
				<li>
					<NavLink className={navData => (navData.isActive ? cl.active : cl.link)} to='/my-friends'>
						My Friends
					</NavLink>
				</li>
				<li>
					<NavLink className={navData => (navData.isActive ? cl.active : cl.link)} to='/messages'>
						Messages
					</NavLink>
				</li>
				<li>
					<NavLink className={navData => (navData.isActive ? cl.active : cl.link)} to='/users'>
						Users
					</NavLink>
				</li>
				<li>
					<NavLink className={navData => (navData.isActive ? cl.active : cl.link)} to='/news'>
						News
					</NavLink>
				</li>
				<li>
					<NavLink className={navData => (navData.isActive ? cl.active : cl.link)} to='/resources'>
						Resources
					</NavLink>
				</li>
				<li>
					<NavLink className={navData => (navData.isActive ? cl.active : cl.link)} to='/settings'>
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavMenu
