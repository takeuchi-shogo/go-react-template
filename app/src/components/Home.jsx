
import React from 'react'

function Home() {

	const handleClick = () => {
		alert("ボタンがクリックされました")
	}
	return (
		<>
			<main>
				<h2>Welcome to the home page!</h2>
				<p>You can do this, I belive in you.</p>
				<p>Hello World!</p>
				<button onClick={ handleClick }>Click!!</button>
			</main>
		</>
	);
}

export default Home
