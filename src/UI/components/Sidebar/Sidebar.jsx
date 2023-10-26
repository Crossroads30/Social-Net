import classNames from 'classnames'
import Header from './Header/Header'
import NavMenu from './NavMenu/NavMenu'
import OnlineIndicatorContainer from './OnlineIndicator/OnlineIndicatorContainer'

const Sidebar = () => {
	return (
		<aside className={classNames('box-wrapper', 'box-wrapper1')}>
			<Header />
			<NavMenu />
			<OnlineIndicatorContainer />
		</aside>
	)
}

export default Sidebar
