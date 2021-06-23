import { useState } from "react";
import ReactMarkdown from "react-markdown";
import data from "../../Changes";
const gfm = require("remark-gfm");
import TextArea from "../components/Textarea";

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
        tabIndex={-1}
      />
      <br />
      <button onClick={() => onSubmitOption(option)} tabIndex={-1}>
        New optional change
      </button>
    </>
  );
};

const Index = function Index() {
  const [name, setName] = useState("Hey ");
  const [option, setOption] = useState("");
  const [options, setOptions] = useState([]);
  const [require, setRequire] = useState("");
  const [requires, setRequires] = useState([]);
  const [header, setHeader] = useState(data.header.slice());
  const [footer, setFooter] = useState(data.footer.slice());

  const middle = () => {
    let newString = data.changes.slice();
    newString = newString.replace("{requires}", requires);
    newString = newString.replace("{options}", options);
    return newString;
  };

  const newOption = (change) => {
    let newString = `\n- [ ] [OPTIONAL] ${change}`;
    setOption("");
    setOptions(options.concat(newString));
  };

  const newRequire = (change) => {
    let newString = `\n- [ ] ${change}`;
    setRequire("");
    setRequires(requires.concat(newString));
  };

  const preview = () => {
    return `${name}
    \n${header}
    ${middle()}
    \n${footer}
    `;
  };

  return (
    <div>
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <TextArea
            value={header}
            handleChange={(e) => setHeader(e.target.value)}
            placeholder="Code review Header"
          />
          <TextArea value={middle()} />
          <TextArea
            value={footer}
            handleChange={(e) => setFooter(e.target.value)}
            placeholder="Enter code review footer"
          />
        </div>

        <div style={{ margin: "1rem" }}>
          <ReactMarkdown remarkPlugins={[gfm]}>{preview()}</ReactMarkdown>
        </div>
      </div>
      <div>
        <h2>Final markdown, copy paste this</h2>
        <TextArea value={preview()} />
      </div>
    </div>
  );
};

export default Index;
