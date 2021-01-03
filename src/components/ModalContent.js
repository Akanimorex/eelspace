import React, { useState, useCallback } from "react";
import "../assets/css/modal.css";
import customer from "../assets/images/customer.svg";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const ModalContent = (props) => {
  // if (!props) {
  //   return null;
  // }
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = useCallback((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);

      return "handled";
    }
    return "not-handled";
  });

  const settingEditorType = (textType) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, `${textType}`));
  };

  const _onBoldClick = useCallback(() => {
    settingEditorType("BOLD");
  });

  const _onItalicClick = useCallback(() => {
    settingEditorType("ITALIC");
  });
  const _onUnderlineClick = useCallback(() => {
    settingEditorType("UNDERLINE");
  });

  return (
    <div className="the-modal">
      <div className="container">
        <div className="row justify-content-between">
          <h4>
            <span>
              <svg
                width="32"
                height="41"
                viewBox="0 0 32 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0794 15.3531L3.55135 27.1509C1.58999 28.2781 0.91379 30.7819 2.04101 32.7432L2.04465 32.7496C3.17187 34.7109 5.67565 35.3871 7.63701 34.2599L28.1651 22.4622C30.1264 21.335 30.8027 18.8312 29.6754 16.8698L29.6718 16.8635C28.5446 14.9021 26.0408 14.2259 24.0794 15.3531Z"
                  fill="#464855"
                />
                <path
                  d="M25.0961 28.0274L14.0869 34.3545C12.6614 35.1738 12.17 36.9935 12.9892 38.419C13.8085 39.8444 15.6282 40.3359 17.0537 39.5167L28.0629 33.1895C29.4884 32.3703 29.9798 30.5506 29.1606 29.1251C28.3413 27.6996 26.5216 27.2082 25.0961 28.0274Z"
                  fill="#464855"
                />
                <path
                  d="M23.9792 2.04088L3.54489 13.8386C1.5925 14.9658 0.923555 17.4624 2.05077 19.4148L2.05442 19.4211C3.18163 21.3735 5.67815 22.0424 7.63055 20.9152L28.0648 9.11745C30.0172 7.99023 30.6862 5.49371 29.559 3.54132L29.5553 3.535C28.4281 1.58261 25.9316 0.913668 23.9792 2.04088Z"
                  fill="#464855"
                />
              </svg>
            </span>
            <span>eelspace</span>
          </h4>
          <h4 style={{ cursor: "pointer" }} onClick={props.close}>
            &#10005;
          </h4>
        </div>

        <div className="mt-4 pt-4">
          <h4>Ask Me a Question</h4>
          <div className="d-flex">
            <img src={customer} className="modal-img" alt="customer" />
            <p className="mt-2 ml-2" style={{ alignSelf: "center" }}>
              <span className="font-weight-bold">Mfonobong Umondia</span>
              <figcaption>
                <span>Dec 09, 2020</span>
              </figcaption>
            </p>
          </div>
          <div className="mt-4 pt-4">
            <figcaption>
              <label htmlFor="Question">Question *</label>
            </figcaption>
            <textarea
              className="modal-textarea"
              placeholder="Enter your Username"
              rows="4"
            ></textarea>
            <figcaption>
              <p>
                Descriptive questions help other users discover and answer your
                question
              </p>
            </figcaption>
            <figcaption>
              <label htmlFor="Question">Details *</label>
            </figcaption>

            <div className="type-box">
              <ul className="list-unstyled d-flex format-options">
                <li onClick={_onBoldClick}>
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 3.5C9.5 3.04037 9.40947 2.58525 9.23358 2.16061C9.05769 1.73597 8.79988 1.35013 8.47487 1.02513C8.14987 0.700121 7.76403 0.442313 7.33939 0.266422C6.91475 0.0905303 6.45963 0 6 0H1.5C1.23478 0 0.98043 0.105357 0.792893 0.292893C0.605357 0.48043 0.5 0.734784 0.5 1V11C0.5 11.2652 0.605357 11.5196 0.792893 11.7071C0.98043 11.8946 1.23478 12 1.5 12H6C6.69667 12.003 7.37831 11.7975 7.95717 11.4098C8.53603 11.0221 8.98562 10.4701 9.24806 9.82475C9.51051 9.17939 9.5738 8.47025 9.42979 7.78862C9.28578 7.10698 8.94106 6.48405 8.44 6C8.77431 5.67492 9.0403 5.2863 9.22233 4.85699C9.40436 4.42767 9.49876 3.96631 9.5 3.5ZM6 10H2.5V7H6C6.39782 7 6.77936 7.15804 7.06066 7.43934C7.34196 7.72064 7.5 8.10218 7.5 8.5C7.5 8.89782 7.34196 9.27936 7.06066 9.56066C6.77936 9.84196 6.39782 10 6 10ZM6 5H2.5V2H6C6.39782 2 6.77936 2.15804 7.06066 2.43934C7.34196 2.72064 7.5 3.10218 7.5 3.5C7.5 3.89782 7.34196 4.27936 7.06066 4.56066C6.77936 4.84196 6.39782 5 6 5Z"
                      fill="#464855"
                    />
                  </svg>
                </li>

                <li onClick={_onItalicClick}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1C4 1.26522 4.10536 1.51957 4.29289 1.70711C4.48043 1.89464 4.73478 2 5 2H6.52L3.32 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H7C7.26522 12 7.51957 11.8946 7.70711 11.7071C7.89464 11.5196 8 11.2652 8 11C8 10.7348 7.89464 10.4804 7.70711 10.2929C7.51957 10.1054 7.26522 10 7 10H5.48L8.68 2H11C11.2652 2 11.5196 1.89464 11.7071 1.70711C11.8946 1.51957 12 1.26522 12 1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0Z"
                      fill="#464855"
                    />
                  </svg>
                </li>
                <li onClick={_onUnderlineClick}>
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 11.5C7.32608 11.5 8.59785 10.9732 9.53553 10.0355C10.4732 9.09785 11 7.82608 11 6.5V1.5C11 1.23478 10.8946 0.98043 10.7071 0.792893C10.5196 0.605357 10.2652 0.5 10 0.5C9.73478 0.5 9.48043 0.605357 9.29289 0.792893C9.10536 0.98043 9 1.23478 9 1.5V6.5C9 7.29565 8.68393 8.05871 8.12132 8.62132C7.55871 9.18393 6.79565 9.5 6 9.5C5.20435 9.5 4.44129 9.18393 3.87868 8.62132C3.31607 8.05871 3 7.29565 3 6.5V1.5C3 1.23478 2.89464 0.98043 2.70711 0.792893C2.51957 0.605357 2.26522 0.5 2 0.5C1.73478 0.5 1.48043 0.605357 1.29289 0.792893C1.10536 0.98043 1 1.23478 1 1.5V6.5C1 7.82608 1.52678 9.09785 2.46447 10.0355C3.40215 10.9732 4.67392 11.5 6 11.5ZM11 13.5H1C0.734784 13.5 0.48043 13.6054 0.292893 13.7929C0.105357 13.9804 0 14.2348 0 14.5C0 14.7652 0.105357 15.0196 0.292893 15.2071C0.48043 15.3946 0.734784 15.5 1 15.5H11C11.2652 15.5 11.5196 15.3946 11.7071 15.2071C11.8946 15.0196 12 14.7652 12 14.5C12 14.2348 11.8946 13.9804 11.7071 13.7929C11.5196 13.6054 11.2652 13.5 11 13.5Z"
                      fill="#464855"
                    />
                  </svg>
                </li>
              </ul>
              <hr></hr>
              <Editor editorState={editorState} onChange={setEditorState} />
            </div>
            <div className="mt-2 pt-2">
              <label htmlFor="email-me">
                <span>
                  <input type="checkbox" name="email-me" />
                  Email me when someone replies
                </span>
              </label>
              <div className="d-block">
                <button
                  className="btn blog-btn-cancel "
                  style={{ cursor: "pointer" }}
                  onClick={props.close}
                >
                  Cancel
                </button>
                <button className="btn blog-btn-publish ml-1">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
