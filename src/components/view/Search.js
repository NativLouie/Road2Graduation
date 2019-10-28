import React from 'react'

export const SearchBar = (props) => {
	return (
		<div className='tc pa3 pb4 bt bb bw2 b-gray bg-black '>
			<input
				className='tc pa3 ba b-red bg-white'
				type='search'
				placeholder=' Search....'
				onChange={ props.searchChange }
			/>
		</div>
	)
}
