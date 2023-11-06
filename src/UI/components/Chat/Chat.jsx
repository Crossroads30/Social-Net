import classNames from 'classnames'
import Footer from './Footer/Footer'
import cl from './Chat.module.css'

const Chat = () => {
	return (
		<div className='chat-wrapper'>
			<div className={classNames('box-wrapper', 'box-wrapper2')}>
				<div className={cl.friendsChat}>Friends chat</div>
				<Footer />
			</div>
		</div>
	)
}

export default Chat
