import './styles/App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import React, { lazy } from 'react'
import { withSuspense } from './HOC/withSuspense'
import SidebarContainer from './UI/components/Sidebar/SidebarContainer'
import FriendsSidebarContainer from './UI/components/Friends-sidebar/FriendsSidebarContainer'

const MyProfileContainer = lazy(() => import('./UI/components/screens/MyProfile/MyProfileContainer'))
const MessagesContainer = lazy(() => import('./UI/components/screens/Messages/MessagesContainer'))
const FriendsContainer = lazy(() => import('./UI/components/screens/Friends/FriendsContainer'))
const LoginPageContainer = lazy(() => import('./UI/components/screens/LoginPage/LoginPageContainer'))

const MyProfileContainerWithSuspense = withSuspense(MyProfileContainer)
const MessagesContainerWithSuspense = withSuspense(MessagesContainer)
const FriendsContainerWithSuspense = withSuspense(FriendsContainer) 
const LoginPageContainerWithSuspense = withSuspense(LoginPageContainer) 

function App() {
	return (
		<div className='app-container'>
			<SidebarContainer />
			<main className='main'>
				<Routes>
					<Route path='/my-profile/:userId?' element={<MyProfileContainerWithSuspense />} />
					<Route path='/profile/:userId?' element={<MyProfileContainerWithSuspense />} />
					<Route path='/' element={<Navigate from='/' to={'/my-profile'} />} />
					<Route path='/my-friends/*' element={<FriendsContainerWithSuspense />} />
					<Route path='/messages' element={<MessagesContainerWithSuspense />} />
					<Route path='/login' element={<LoginPageContainerWithSuspense />} />
					<Route exact path='*' element={<h2>404 - Page not found</h2>} />
				</Routes>
			</main>
			<FriendsSidebarContainer />
		</div>
	)
}

export default App
