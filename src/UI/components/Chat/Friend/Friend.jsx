import cl from './Friend.module.css'

const Friend = ({ photo, name }) => {
	return (
		<div className={cl.friend}>
			<img src={photo !== null ? photo : defaultUserPhoto} alt='avatarImg' className={cl.avatarImg} />
			<p className={cl.name}>{name}</p>
		</div>
	)
}

export default Friend
