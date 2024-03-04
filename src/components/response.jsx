import React from "react";

const Response = ({ response }) => {
	return (
		<div className="min-h-52 flex flex-col mb-3">
			<div className="flex w-full justify-start items-center mb-2">
				<img src={"fa-flag.png"} alt={"Persian"} width={32} height={32} />
				<div className="text-black text-lg ml-2">Persian</div>
			</div>
			<div className="flex-grow border rounded-lg outline-none bg-white w-full text-end p-4">
				{response}
			</div>
		</div>
	);
};

export default Response;
