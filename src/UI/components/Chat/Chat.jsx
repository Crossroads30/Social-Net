import classNames from 'classnames'
import Footer from './Footer/Footer'
import cl from './Chat.module.css'
import Friend from './Friend/Friend'

const Chat = ({ followedFriends }) => {
	return (
		<div className='chat-wrapper'>
			<div className={classNames('box-wrapper', 'box-wrapper2')}>
				<div className={cl.friendsChat}>Friends chat</div>
				<div className={cl.followedFriendsWrapper}>
					<div className={cl.followedFriends}>
						{followedFriends.map(friend => (
							<Friend name={friend.name} key={friend.id} photo={friend.photos.small} />
						))}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Chat
