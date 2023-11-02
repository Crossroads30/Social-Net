import logoutIcon from '../../../../assets/icons/icons8-logout-48.png'

export const Logout = ({ logout }) => {
	return (
		<div onClick={logout} className='logout'>
			<img src={logoutIcon} alt='logout-icon' />
			<span>Logout</span>
		</div>
	)
}