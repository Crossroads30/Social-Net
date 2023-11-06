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
import EditButton from '../../../../common/buttons/EditButton'

const SocialList = ({ userProfile, goToEditMode, isOwner }) => {
	let imports = {
		facebook: facebook,
		twitter: twitter,
		github: github,
		instagram: instagram,
		youtube: youtube,
		website: website,
		vk: vk,
		mainLink: mainLink,
	}
	return (
		<div className={cl.social}>
			<ul className={cl.socialList}>
				{/* for preventing a dabble rendering  use 'useMemo()' method */}
				{useMemo(() => {
					return Object.entries(userProfile.contacts).map(([key, value]) => {
						return (
							<li key={key}>
								<div>
									<a href={`http://${value}`}>
										{Object.entries(imports).map(([name, path]) => {
											 if (key === name && path) {
												return (
													<img src={path} alt={name} />
												)
											 }
											})}
									</a>
								</div>
							</li>
						)
					})
				})}
			</ul>
			{isOwner && <EditButton goToEditMode={goToEditMode} />}
		</div>
	)
}

export default SocialList
