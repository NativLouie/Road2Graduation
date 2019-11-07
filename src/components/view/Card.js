import React from 'react';
import './Card.css'
import PieChart from 'react-minimal-pie-chart';


export const Card = (props) => {
	const school = props.data
	return (
		<div
			className={ ['tc ba dib br3 pa2 pv2 mv4 ma1 grow bw2 shadow-5'] }
			onMouseEnter={ () => props.onCardHover(props.data) }
		>
			<img className='br2' alt='logo' src={ props.logo } height='150px' width='150px' />
			<div>
				<h2> { school.name } </h2>
			</div>
			<div>
				<h4> { `Address: ${ school.address }` } </h4>
				<h4> { <span>{ `HashTags:` }</span> } </h4>
				{ school.hashTag.map((hashtag, i) => <div key={ i } onClick={ () => props.onHashTagCLick(hashtag) }>
					<h4><span id='hashTag'>{ `#${ hashtag }` }</span> </h4>
				</div>) }
				<h4> { `Population: ${ school.population }` } </h4>
			</div>
			<div>
				<div>
					<PieChart
						animate={ true }
						label={ ({ data, dataIndex }) =>
							dataIndex === 0 ?
								`${ Math.round(data[dataIndex].percentage) }% Male`
								:
								`${ Math.round(data[dataIndex].percentage) }% Female`

						}
						labelPosition={ 50 }
						labelStyle={ {
							fill: '#121212',
							fontFamily: 'sans-serif',
							fontSize: '10px',
						} }
						data={ school.genderDistribution }
						style={ {
							height: '200px',
						} }
					/>
				</div>
			</div>
			<div>
				{ school.areaOfStudy === null ? <h4>{ `Area Of Study: N/A` }</h4> : <h4>{ `Area Of Study: ${ school.areaOfStudy }` }</h4> }
				<h4>{ `Classes Taken: ${ school.classes.length }` } </h4>
				{ school.graduation === null ? <h4>{ `Graduation Date: N/A` }</h4> : <h4>{ `Graduation Date: ${ school.graduation }` }</h4> }
			</div>
		</div>
	)
}
