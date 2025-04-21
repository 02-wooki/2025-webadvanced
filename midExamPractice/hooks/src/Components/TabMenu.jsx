import React, { useState } from 'react';

export default function TabMenu(props) {
	const [spilledTab, setSpilledTab] = useState('');
	
	return (
		<div>
			<span onClick={() => {
				setSpilledTab('react');
			}}>React </span>
			<span onClick={() => {
				setSpilledTab('hook');
			}}>Hook </span>
			{ spilledTab === 'react' &&
					<div>react에 대한 설명</div>
			}
			{ spilledTab === 'hook' &&
					<div>hook에 대한 설명</div>
			}
		</div>
	);
}