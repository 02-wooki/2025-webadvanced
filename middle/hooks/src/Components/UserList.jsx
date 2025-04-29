import React, { useState, useEffect } from 'react';

export default function UserList() {
	const [data, setData] = useState();
	
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setData(data));
	}, []);
	
	return (
		<div>
		{ data ?
			<ul>
				{ data.map((user) => {
						return (<li key={user.id}>{user.name}</li>);
				})}
			</ul>
      : <p>Loading...</p>
		}
		</div>
	);
}