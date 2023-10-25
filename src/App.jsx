import { Route, Routes } from 'react-router-dom'
import Chat from './UI/components/Chat/Chat'
import Sidebar from './UI/components/Sidebar/SideBar'
import './styles/App.css'
import React, { lazy, Suspense } from 'react'
import MyProfile from './UI/components/screens/MyProfile/MyProfile'
import MyProfileContainer from './UI/components/screens/MyProfile/MyProfileContainer'
import FriendsContainer from './UI/components/screens/Friends/FriendsContainer'
import MessagesContainer from './UI/components/screens/Messages/MessagesContainer'
import UsersContainer from './UI/components/screens/Users/UsersContainer'
import ChannelsContainer from './UI/components/screens/Channels/ChannelsContainer'

// const MyProfileContainer = lazy(() => import('./UI/components/screens/MyProfile/MyProfile'))

function App() {
	return (
		<div className='app-container'>
			<Sidebar />
			<main className='main'>
				MAIN
				<Routes>
					<Route
						path='/my-profile/:userId?'
						element={
							<React.Suspense fallback={'Loading...'}>
								<MyProfileContainer />
							</React.Suspense>
						}
					/>
					<Route
						path='my-channels'
						element={
							<React.Suspense fallback={'Loading...'}>
								<ChannelsContainer />
							</React.Suspense>
						}
					/>
					<Route
						path='/my-friends'
						element={
							<React.Suspense fallback={'Loading...'}>
								<FriendsContainer />
							</React.Suspense>
						}
					/>
					<Route
						path='/messages'
						element={
							<React.Suspense fallback={'Loading...'}>
								<MessagesContainer />
							</React.Suspense>
						}
					/>
					<Route
						path='/users'
						element={
							<React.Suspense fallback={'Loading...'}>
								<UsersContainer />
							</React.Suspense>
						}
					/>
				</Routes>
			</main>
			<Chat />
		</div>
	)
}

export default App
