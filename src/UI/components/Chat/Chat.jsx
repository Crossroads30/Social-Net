import classNames from 'classnames'
import cl from './Chat.module.css'

const Chat = () => {
	return (
		<div className={classNames([cl.chat], 'box-wrapper')}>
			<h2>chat</h2>
		</div>
	)
}

export default Chat
