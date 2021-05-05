import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import useGetTailwindConfig from "../../hooks/useGetTailwindConfig";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FunctionComponent<Props> = (props) => {
  const { children, showModal, setShowModal } = props;
  const [numberState, setNumberState] = useState(0);
  // const config = useGetTailwindConfig();
  const [clipboard, setClipboard] = useState(false);
  const [, setTriggerCopy] = useState(false);
  const copyCode = useGetTailwindConfig(true);
  const commmonClasses =
    "border-4 px-2 py-1 border-transparent hover:border-darkblue-8 rounded-xl cursor-pointer";

  useEffect(() => {
    const timer = setTimeout(() => {
      setClipboard(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copyCode]);

  function handleClick() {
    setClipboard(true);
    setTriggerCopy(true);
  }

  return (
    <div
      className={`fixed z-10 inset-0 overflow-hidden transition-all transform ${
        showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      // style={{ display: showModal ? "block" : "none" }}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen p-16 text-center sm:block sm:p-4">
        <div
          className="fixed inset-0 bg-white backdrop-filter backdrop-blur-sm bg-opacity-50 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className={`inline-block sm:align-middle sm:h-screen`}
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom rounded-lg text-left transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex flex-col justify-center items-start w-full">
            {/* close button */}
            <svg
              className="absolute -top-6 -right-6 transform active:scale-95 cursor-pointer"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowModal(false)}
            >
              <path
                d="M22.1928 10.3502C22.1928 10.193 22.0643 10.0645 21.9071 10.0645L19.55 10.0752L16 14.3073L12.4536 10.0787L10.0928 10.068C9.9357 10.068 9.80713 10.193 9.80713 10.3537C9.80713 10.4216 9.83213 10.4859 9.87499 10.5395L14.5214 16.0752L9.87499 21.6073C9.83183 21.6597 9.80788 21.7252 9.80713 21.793C9.80713 21.9502 9.9357 22.0787 10.0928 22.0787L12.4536 22.068L16 17.8359L19.5464 22.0645L21.9036 22.0752C22.0607 22.0752 22.1893 21.9502 22.1893 21.7895C22.1893 21.7216 22.1643 21.6573 22.1214 21.6037L17.4821 16.0716L22.1286 10.5359C22.1714 10.4859 22.1928 10.418 22.1928 10.3502Z"
                fill="#4D4D4D"
              />
              <path
                d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM16 29.2857C8.66429 29.2857 2.71429 23.3357 2.71429 16C2.71429 8.66429 8.66429 2.71429 16 2.71429C23.3357 2.71429 29.2857 8.66429 29.2857 16C29.2857 23.3357 23.3357 29.2857 16 29.2857Z"
                fill="#4D4D4D"
              />
            </svg>

            <div className="p-6 mx-auto">
              <CopyToClipboard text={copyCode}>
                <button
                  onClick={handleClick}
                  type="button"
                  className="w-80 inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-4 bg-darkblue-6 text-2xl font-medium text-white hover:bg-darkblue-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue-5"
                >
                  {!clipboard && (
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.8285 0.35791H14.0393C12.1874 0.35791 10.6814 1.8639 10.6814 3.71575V10.4314H3.96575C2.1139 10.4314 0.60791 11.9374 0.60791 13.7893V30.5785C0.60791 32.4303 2.1139 33.9363 3.96575 33.9363H20.755C22.6068 33.9363 24.1128 32.4303 24.1128 30.5785V23.8628H30.8285C32.6803 23.8628 34.1863 22.3568 34.1863 20.505V3.71575C34.1863 1.8639 32.6803 0.35791 30.8285 0.35791ZM3.96575 30.5785V13.7893H20.755L20.7583 30.5785H3.96575ZM30.8285 20.505H24.1128V13.7893C24.1128 11.9374 22.6068 10.4314 20.755 10.4314H14.0393V3.71575H30.8285V20.505Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  <p className="ml-3">
                    {clipboard ? "Copied" : "Copy to Clipboard"}
                  </p>
                </button>
              </CopyToClipboard>
              <div className="flex justify-around items-center font-medium text-xl mt-4 ">
                <h4>Numbering Style</h4>
                <span
                  onClick={() => setNumberState(100)}
                  className={`${commmonClasses} ${
                    numberState === 100 && "border-darkblue-8"
                  }`}
                >
                  100
                </span>
                <span
                  onClick={() => setNumberState(10)}
                  className={`${commmonClasses} ${
                    numberState === 10 && "border-darkblue-8"
                  }`}
                >
                  10
                </span>
                <span
                  onClick={() => setNumberState(1)}
                  className={`${commmonClasses} ${
                    numberState === 1 && "border-darkblue-8"
                  }`}
                >
                  1
                </span>
              </div>
              <section>
                <div className="bg-darkblue-0 text-white p-2 mt-8 h-80 overflow-y-auto rounded-lg w-full">
                  {children}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
