import { useState } from "react";
import ReactMarkdown from "react-markdown";
import data from "./Changes";
const gfm = require("remark-gfm");

const Form = ({ name, setName, change, setChange, onSubmit }) => {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <br />
      <input
        type="text"
        value={change}
        onChange={(e) => setChange(e.target.value)}
        placeholder="Enter optional change"
      />
      <br />
      <button onClick={() => onSubmit(change)}>New optional change</button>
    </>
  );
};

const Index = function Index() {
  const [name, setName] = useState("");
  const [change, setChange] = useState("");
  const [changes, setChanges] = useState([]);
  const input = () => {
    let newString = data.slice();
    newString = newString.replace("{name}", name);
    newString = newString.replace("{options}", changes);
    return newString;
  };

  const newChange = (change) => {
    let newString = `\n- [ ] ${change}`;
    setChanges(changes.concat(newString));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Dynamic template generator
      </h1>
      <Form
        name={name}
        setName={setName}
        change={change}
        setChange={setChange}
        onSubmit={newChange}
      />
      <div style={{ display: "flex" }}>
        <textarea
          style={{ height: "80vh", width: "50%", margin: "1rem 0" }}
          value={input()}
          readOnly={true}
        />
        <p style={{ margin: "1rem" }}>
          <ReactMarkdown remarkPlugins={[gfm]}>{input()}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default Index;
