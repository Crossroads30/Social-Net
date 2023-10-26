import cl from './OnlineIndicator.module.css'

const OnlineIndicator = ({ userName }) => {
	return (
		<div className={cl.indicator}>
			<div className={cl.indicatorBlock}>
				<span>{userName}</span>
				<span>Online</span>
			</div>
		</div>
	)
}

export default OnlineIndicator
