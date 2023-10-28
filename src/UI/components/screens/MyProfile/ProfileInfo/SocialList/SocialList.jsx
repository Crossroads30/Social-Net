import cl from './SocialList.module.css'
//all imports below are using as key names for img src from 'userProfile.contacts' while mapping it
import facebook from '../../../../../../assets/icons/icons8-facebook-48.png'
import twitter from '../../../../../../assets/icons/icons8-twitter-48.png'
import github from '../../../../../../assets/icons/icons8-github-logo-48.png'
import instagram from '../../../../../../assets/icons/icons8-instagram-48.png'
import youtube from '../../../../../../assets/icons/icons8-youtube-48.png'
import website from '../../../../../../assets/icons/icons8-web-48.png'
import vk from '../../../../../../assets/icons/icons8-vk-48.png'
import mainLink from '../../../../../../assets/icons/icons8-link-48.png'
import { useMemo } from 'react'
import { EditSocialReduxForm } from '../EditProfileInfoForms/EditSocialForm'

const SocialList = ({ userProfile, userLocation, workAt }) => {
	return (
		<>
			<ul className={cl.socialList}>
				{/* for preventing a dabble rendering  use 'useMemo()' method */}
				{useMemo(() => {
					return Object.entries(userProfile.contacts).map(
						([key, value]) => {
							return (
								<li key={key}>
									<div>
										<a href={`http://${value}`}>
											{/* for string(from 'key') to variable(import name) use 'eval() method!!!' */}
											<img src={eval(key)} alt={key} />
										</a>
									</div>
								</li>
							)
						}
					)
				})}
			</ul>
			<span className='edit'>Edit</span>
			<EditSocialReduxForm
				userProfile={userProfile}
				userLocation={userLocation}
				workAt={workAt}
			/>
		</>
	)
}

export default SocialList
