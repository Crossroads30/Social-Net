import classNames from 'classnames'
import cl from './SideBar.module.css'

const Sidebar = () => {
	return (
		<div className={classNames([cl.sidebar], 'box-wrapper')}>
			<h2>sidebar</h2>
		</div>
	)
}

export default Sidebar
