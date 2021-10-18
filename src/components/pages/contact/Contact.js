import React, { useReducer, useContext } from "react";
import Counter from "../../features/counter/Counter";
import Icons from "../../features/icons/Icons";
import { reducer } from "../../reducers/Counter";
import { CounterProvider } from "../../../context";
import Waves from "../../features/waves/Waves";
import Carousel from "../../features/carousel/Carousel";
export const Contact = () => {
	const [counter, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<CounterProvider value={{ counter, dispatch }}>
			<div className="contact " id="contact" >
				<Waves />
				<Icons />

			</div>
		</CounterProvider>
	);
};
