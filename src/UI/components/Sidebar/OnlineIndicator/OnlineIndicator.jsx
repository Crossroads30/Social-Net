import cl from './OnlineIndicator.module.css'

const OnlineIndicator = ({ loginName }) => {
	return (
		<div className={cl.indicator}>
			{loginName ? (
				<div className={cl.indicatorBlock}>
					<p>{loginName}</p>
					<p className={cl.online}>Online</p>
				</div>
			) : (
				<p className={cl.offline}>Please login</p>
			)}
		</div>
	)
}

export default OnlineIndicator
