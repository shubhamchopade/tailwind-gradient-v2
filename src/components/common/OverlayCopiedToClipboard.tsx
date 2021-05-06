import React from "react";

interface Props {
  hex: string;
}

const OverlayCopiedToClipboard: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div className="w-full h-56 sm:h-72 transition  backdrop-filter backdrop-blur-sm bg-white bg-opacity-50 absolute top-0 left-0 z-10 rounded-md">
        <div className="grid place-content-center text-center my-auto h-full text-gray-900">
          <p>COPIED COLOR HEX CODE</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase">
            {props.hex || "#8BAFAC"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OverlayCopiedToClipboard;
