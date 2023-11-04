import { useState } from 'react'
import cl from './Paginator.module.css'
import classNames from 'classnames'

const Paginator = ({ totalUsersCount, pageSize, portionSize = 10, onPageChangeHandler, currentPage }) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)

	let [portionNumber, setPortionNumber] = useState(1)
	let leftNumberOfPagePortion = (portionNumber - 1) * portionSize + 1
	let rightNumberOfPagePortion = portionNumber * portionSize

	return (
		<div className={cl.pagination}>
			{portionNumber > 1 && (
				<span
					className={cl.pageButton}
					onClick={() => {
						setPortionNumber(portionNumber - 1)
					}}
				>
					{'<<'}
				</span>
			)}
			<div className={cl.pageNumbers}>
				{pages
					.filter(page => page >= leftNumberOfPagePortion && page <= rightNumberOfPagePortion)
					.map(page => {
						return (
							<span
								className={currentPage === page ? classNames([cl.pagination], 'span', [cl.selectedPage]) : classNames([cl.pagination], 'span')}
								key={page}
								onClick={() => {
									onPageChangeHandler(page)
								}}
							>
								{page}
							</span>
						)
					})}
				{portionCount > portionNumber && (
					<span
						className={cl.pageButton}
						onClick={() => {
							setPortionNumber(portionNumber + 1)
						}}
					>
						{'>>'}
					</span>
				)}
			</div>
		</div>
	)
}

export default Paginator
