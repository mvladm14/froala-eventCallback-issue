import React, { useState } from "react";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/plugins.pkgd.min.css";

const App = () => {
  const [model, setModel] = useState("some content");
  const [array, setArray] = useState([]);

  const onContentChanged = () => {
    console.log(array);
  };

  const config = {
    placeholderText: "Edit Your Content Here!",
    toolbarButtons: [
      ["paragraphFormat"],
      ["insertVideo", "bold", "italic", "textColor", "clearFormatting"],
      ["formatUL"],
    ],
    events: {
      contentChanged: onContentChanged,
      focus: () => console.log("focused"),
    },
  };

  return (
    <div style={{ maxWidth: "1000px" }}>
      <FroalaEditorComponent
        tag="textarea"
        config={config}
        model={model}
        onModelChange={setModel}
      />
      <button onClick={() => setArray((oldArr) => [...oldArr, "x"])}>
        Add to state array
      </button>
      <button onClick={onContentChanged}>Print state array content</button>
    </div>
  );
};

export default App;
