import { useState } from 'react';

function App() {
	let count = 0;

	return (
		<>
			<div className="card">
				<div>Count: {count}</div>
				<button onClick={() => (count = count + 1)}>Update count</button>
			</div>
		</>
	);
}

export default App;
