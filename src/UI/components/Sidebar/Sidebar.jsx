import classNames from 'classnames'
import cl from './SideBar.module.css'
import Header from './Header/Header'
import NavMenu from './NavMenu/NavMenu'
import OnlineIndicator from './OnlineIndicator/OnlineIndicator'

const Sidebar = () => {
	return (
		<aside className={classNames([cl.sidebar], 'box-wrapper')}>
			<Header/>
			<NavMenu/>
			<OnlineIndicator/>
		</aside>
	)
}

export default Sidebar
