import React, { useState } from "react";
import { translate } from "../lib/deepseek";
import Textarea from "./textarea";
import Button from "./button";
import Response from "./response";

const Content = () => {
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState("");
	const [prompt, setPropmt] = useState("");

	const onClick = async () => {
		setLoading(true);
		setResponse("");
		try {
			const resp = await translate({
				goalLng: "persian",
				text: prompt,
			});
			setResponse(resp);
			setLoading(false);
		} catch (error) {
			setResponse(error);
			setLoading(false);
		}
	};

	const onChange = (event) => {
		setPropmt(event.target.value);
	};
	return (
		<div className="">
			<Textarea onChange={onChange} />
			<Button onClick={onClick} loading={loading} />
			<Response response={response} />
		</div>
	);
};

export default Content;
