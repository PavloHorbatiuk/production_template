
import React, { useState } from 'react'
import classes from './Counter.module.scss'


const Conunter = () => {
	const [count, setCount] = useState(1)
	return (
		<>
			{count}
			<button className={classes.btn} onClick={() => { setCount((prev) => ++prev) }}>
				Conunter
			</button>
		</>
	)
}

export default Conunter