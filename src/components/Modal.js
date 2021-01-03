import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import ReactDOM from "react-dom";
import "../assets/css/modal.css";

// using forwardRef since we are using react hooks(this wraps the whole component and takes two arguments:props and ref), also
// useImperativeHandle returns objects which contain methods that links  to the functions to open and close the modal
//note: this needed me to create a new root in the index.html File, you can check

const Modal = forwardRef((props, ref) => {
  {
    console.log("modal");
  }
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  // the functions to open and close the modal
  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className="modal" style={{ background: "red" }}>
        <div className="container">{props.children}</div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return null;
});

export default Modal;
