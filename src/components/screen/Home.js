import React, { Component } from 'react'
import './Home.css'
import { Card, SearchBar, CardDetail } from '../view'
import { UNT, DCCD, NCTC, logos } from '../../assets'





class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {
			unt: UNT,
			dccd: DCCD,
			nctc: NCTC,
			showSearch: false,
			searchText: '',
			activeSchool: {
				logo: null,
				classes: []
			}
		}
	}


	handleOnCardHover = (school) => {
		switch (school.name) {
			case 'University Of North Texas':
				this.setState({
					showSearch: true,
					activeSchool: {
						logo: logos.unt,
						classes: school.classes
					}
				})
				break;
			case 'Dallas County Community College District':
				this.setState({
					showSearch: true,
					activeSchool: {
						logo: logos.dccd,
						classes: school.classes
					}
				})
				break;
			case 'North Central Texas College':
				this.setState({
					showSearch: true,
					activeSchool: {
						logo: logos.nctc,
						classes: school.classes
					}
				})
				break;
			default:
				return []
		}
	}



	handleOnsearchChange = (event) => {
		this.setState({
			searchText: event.target.value
		})

	}

	render () {
		const { unt, dccd, nctc, searchText, showSearch, activeSchool } = this.state

		const filteredResult = activeSchool.classes.filter(value => {
			return value.class.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
				|| value.description.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
				|| value.year.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
		})

		return (
			<div className='tc '>
				<div>
					<h1 className='f1'>Road2Graduation</h1>

				</div>
				<div>
					<Card
						data={ unt }
						logo={ logos.unt }
						onCardHover={ () => this.handleOnCardHover(unt) }

					/>
					<Card
						data={ dccd }
						logo={ logos.dccd }
						onCardHover={ () => this.handleOnCardHover(dccd) }
					/>
					<Card
						data={ nctc }
						logo={ logos.nctc }
						onCardHover={ () => this.handleOnCardHover(nctc) }
					/>
				</div>

				{ activeSchool.classes === [] ?
					null
					:
					<div>
						<div>
							{ showSearch ?
								<div style={ { position: 'sticky', top: '0px', zIndex: 1000 } }>
									<SearchBar searchChange={ this.handleOnsearchChange } />
								</div>

								: null }


							{/* { filteredResult !== [] ?
								<div
									className={ ['tc  dib br3 pa3 mv4 ma2 grow ba bw2 shadow-5'] }
								>
									Sorry, No results

								</div>
								:


							} */}

							<CardDetail data={ filteredResult } logo={ activeSchool.logo } activeSchool={ activeSchool } />
						</div>
					</div>
				}
			</div>
		)

	}

}


export default Home;
