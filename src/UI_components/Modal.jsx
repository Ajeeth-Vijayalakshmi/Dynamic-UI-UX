import ReactJson from 'react-json-view';
import response from "../Response.json";

export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__title">Existing JSON</div>
        <div className="modal__content">
          {/* <JSONViewer
            data={reponse}
            collapsible
          /> */}
          <div className="json_content">
          <ReactJson src={response} />
          </div>
        </div>
        <div className="modal__footer">
          <button
            type="button"
            className="btn modal_action"
            onClick={() => {
              props.onClick();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
