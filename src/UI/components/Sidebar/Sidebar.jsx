import classNames from 'classnames'
import Header from './Header/Header'
import NavMenu from './NavMenu/NavMenu'
import OnlineIndicator from './OnlineIndicator/OnlineIndicator'

const Sidebar = () => {
	return (
		<aside className={classNames('box-wrapper', 'box-wrapper1')}>
			<Header />
			<NavMenu />
			<OnlineIndicator />
		</aside>
	)
}

export default Sidebar
