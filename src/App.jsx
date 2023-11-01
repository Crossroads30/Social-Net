import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import React, { lazy } from 'react'
import { withSuspense } from './HOC/withSuspense'
import Sidebar from './UI/components/Sidebar/Sidebar'
import Chat from './UI/components/Chat/Chat'

const MyProfileContainer = lazy(() => import('./UI/components/screens/MyProfile/MyProfile'))
const MessagesContainer = lazy(() => import('./UI/components/screens/Messages/MessagesContainer'))
const ChannelsContainer = lazy(() => import('./UI/components/screens/Channels/ChannelsContainer'))
const FriendsContainer = lazy(() => import('./UI/components/screens/Friends/FriendsContainer'))
const LoginPageContainer = lazy(() => import('./UI/components/screens/LoginPage/LoginPageContainer'))

const MyProfileContainerWithSuspense = withSuspense(MyProfileContainer)
const MessagesContainerWithSuspense = withSuspense(MessagesContainer)
const ChannelsContainerWithSuspense = withSuspense(ChannelsContainer)
const FriendsContainerWithSuspense = withSuspense(FriendsContainer) 
const LoginPageContainerWithSuspense = withSuspense(LoginPageContainer) 

function App() {
	return (
		<div className='app-container'>
			<Sidebar />
			<main className='main'>
				<Routes>
					<Route path='/my-profile/:userId?' element={<MyProfileContainerWithSuspense />} />
					<Route path='/' element={<MyProfileContainerWithSuspense />} />
					<Route path='my-channels' element={<ChannelsContainerWithSuspense />} />
					<Route path='/my-friends' element={<FriendsContainerWithSuspense />} />
					<Route path='/messages' element={<MessagesContainerWithSuspense />} />
					<Route path='/login' element={<LoginPageContainerWithSuspense />} />
					<Route exact path='*' element={<h2>404 - Page not found</h2>} />
				</Routes>
			</main>
			<Chat />
		</div>
	)
}

export default App
