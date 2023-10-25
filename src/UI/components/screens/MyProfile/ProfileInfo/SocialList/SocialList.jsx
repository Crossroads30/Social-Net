import cl from './SocialList.module.css'
import facebookImage from '../../../../../../assets/icons/icons8-facebook-48.png'
import twitterImage from '../../../../../../assets/icons/icons8-twitter-48.png'
import gitImage from '../../../../../../assets/icons/icons8-github-logo-48.png'
import instagramImage from '../../../../../../assets/icons/icons8-instagram-48.png'
import youTubeImage from '../../../../../../assets/icons/icons8-youtube-48.png'

const SocialList = () => {
  return (
			<ul className={cl.socialList}>
				<li>
					<div>
						<a>
							<img src={facebookImage} alt='facebook' />
						</a>
					</div>
				</li>
				<li>
					<div>
						<a>
							<img src={twitterImage} alt='twitter' />
						</a>
					</div>
				</li>
				<li>
					<div>
						<a>
							<img src={gitImage} alt='github' />
						</a>
					</div>
				</li>
				<li>
					<div>
						<a>
							<img src={instagramImage} alt='instagram' />
						</a>
					</div>
				</li>
				<li>
					<div>
						<a>
							<img src={youTubeImage} alt='youtube' />
						</a>
					</div>
				</li>
			</ul>
	)
}

export default SocialList
