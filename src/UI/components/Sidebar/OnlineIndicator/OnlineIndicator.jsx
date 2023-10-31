import cl from './OnlineIndicator.module.css'

const OnlineIndicator = ({ loginName }) => {
	return (
		<div className={cl.indicator}>
			<div className={cl.indicatorBlock}>
				<span>{loginName}</span>
				<span>Online</span>
			</div>
		</div>
	)
}

export default OnlineIndicator
