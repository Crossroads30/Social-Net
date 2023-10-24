import Chat from './UI/components/Chat/Chat'
import Sidebar from './UI/components/Sidebar/SideBar'
import './styles/App.css'

function App() {

	return (
		<div className='app-container'>
			<Sidebar />
			<main className='main'>MAIN</main>
			<Chat />
		</div>
	)
}

export default App
