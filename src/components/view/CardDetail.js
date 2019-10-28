import React from 'react';




export const CardDetail = (props) => {
	const classes = props.data
	return (

		classes.map((item, index) => {
			const possibleGrade = ['A', 'B', 'C'];
			const status = possibleGrade.find(grade => grade === item.grade) ? 'Passed' : 'In Progress';
			return (
				<div
					key={ index }
					className={ ['tc  dib br3 pa3 mv4 ma2 grow ba bw2 shadow-5'] }
				>
					<img className='br2' alt='logo' src={ props.logo } height='200px' width='300px' />
					<div>
						<h2> { item.class } </h2>
					</div>
					<div>
						<h4> { `${ item.description }` } </h4>
						<h4> { `Credit: ${ item.credits }` } </h4>
						<h4> { `Grade: ${ item.grade }` } </h4>
						<h4> { `Status: ${ status } ` } </h4>
						<h4> { `Year Taken: ${ item.year }` } </h4>
					</div>
					<div>
					</div>
				</div>
			)
		})

	)


}
