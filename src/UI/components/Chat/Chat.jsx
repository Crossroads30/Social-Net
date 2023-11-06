import classNames from 'classnames'
import Footer from './Footer/Footer'

const Chat = () => {
	return (
		<div className='chat-wrapper'>
			<div className={classNames('box-wrapper', 'box-wrapper2')}>
				<h2>chat</h2>
				<Footer />
			</div>
		</div>
	)
}

export default Chat
