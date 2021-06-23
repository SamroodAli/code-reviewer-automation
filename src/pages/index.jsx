import { useState } from "react";
import ReactMarkdown from "react-markdown";
import data from "./Changes";
const gfm = require("remark-gfm");

const Form = ({
  name,
  setName,
  option,
  setOption,
  require,
  setRequire,
  onSubmitOption,
  onSubmitRequire,
}) => {
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
        value={require}
        onChange={(e) => setRequire(e.target.value)}
        placeholder="Enter Required Change"
      />
      <br />
      <button onClick={() => onSubmitRequire(require)}>
        New optional change
      </button>
      <br />
      <input
        type="text"
        value={option}
        onChange={(e) => setOption(e.target.value)}
        placeholder="Enter optional change"
      />
      <br />
      <button onClick={() => onSubmitOption(option)}>
        New optional change
      </button>
    </>
  );
};

const Index = function Index() {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [options, setOptions] = useState([]);
  const [require, setRequire] = useState("");
  const [requires, setRequires] = useState([]);
  const [input, setInput] = useState(data.slice());

  // const input = () => {
  //   let newString = data.slice();
  //   newString = newString.replace("{name}", name);
  //   newString = newString.replace("{options}", options);
  //   newString = newString.replace("{requires}", requires);
  //   return newString;
  // };

  const newOption = (change) => {
    let newString = `\n- [ ] ${change}`;
    setOption("");
    setOptions(options.concat(newString));
  };

  const newRequire = (change) => {
    let newString = `\n- [ ] ${change}`;
    setRequire("");
    setRequires(requires.concat(newString));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Dynamic template generator
      </h1>
      <Form
        name={name}
        setName={setName}
        option={option}
        setOption={setOption}
        require={require}
        setRequire={setRequire}
        onSubmitOption={newOption}
        onSubmitRequire={newRequire}
      />
      <div style={{ display: "flex" }}>
        <textarea
          style={{ height: "80vh", width: "50%", margin: "1rem 0" }}
          value={input}
        />
        <div style={{ margin: "1rem" }}>
          <ReactMarkdown remarkPlugins={[gfm]}>{input}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Index;
