const FollowUnfollowButton = ({ name, handler }) => {
	return (
		<button className='follow-btn' onClick={handler}>
			{name}
		</button>
	)
}

export default FollowUnfollowButton
