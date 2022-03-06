import React from 'react';
import useData from '../../Tooling/useData';

const Home = () => {
	const [ catFacts ] = useData('https://cat-fact.herokuapp.com/facts');
	
	return (
	<div>
		<h1>Hello world!</h1>
		<ul>
			{catFacts.map((fact, i) => (<li key={i}>{fact.text}</li>))}
		</ul>
	</div>);
};

export default Home;
