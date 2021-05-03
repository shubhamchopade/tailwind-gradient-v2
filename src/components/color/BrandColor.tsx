import React, { useState } from "react";
import { useColorState } from "../../store/ColorStateProvider";
import Modal from "../common/Modal";
import TailwindConfig from "../common/TailwindConfig";
import ColorGrid from "./ColorGrid";
import GetBrandPicker from "./GetBrandPicker";

export const BrandColor: React.FunctionComponent = () => {
  const [showConfigFile, setShowConfigFile] = useState(false);
  const { setShowColorName } = useColorState();

  interface BtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }

  const GetConfigFileButton: React.FunctionComponent<BtnProps> = ({
    onClick,
  }) => (
    <button
      onClick={onClick}
      className="btn fixed z-10 top-8 -right-8 transform hover:-translate-x-3 transition-transform shadow-md rounded-full bg-darkblue-6 text-white pl-4 py-2 pr-12"
    >
      Get Tailwind Config
    </button>
  );

  function handleClick() {
    setShowColorName(true);
    setShowConfigFile(true);
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center relative">
        <GetConfigFileButton onClick={handleClick} />
        <GetBrandPicker />
        <ColorGrid />
        <Modal showModal={showConfigFile} setShowModal={setShowConfigFile}>
          <TailwindConfig />
        </Modal>
      </div>
    </div>
  );
};
