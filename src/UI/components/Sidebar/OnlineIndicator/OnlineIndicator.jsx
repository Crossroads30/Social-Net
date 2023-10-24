import cl from './OnlineIndicator.module.css'

const OnlineIndicator = () => {
	return (
		<div className={cl.indicator}>
			<div className={cl.indicatorBlock}>
				<span>User Name</span>
				<span>Online</span>
			</div>
		</div>
	)
}

export default OnlineIndicator
