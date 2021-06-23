import { useState } from "react";
import ReactMarkdown from "react-markdown";
import data from "./Changes";

const Form = ({ name, setName }) => {
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

const Index = function Index() {
  const [name, setName] = useState("");
  const input = () => {
    return data.replace("{name}", name);
  };
  return (
    <>
      <Form name={name} setName={setName} />
      <p>
        <ReactMarkdown>{input()}</ReactMarkdown>
      </p>
      <textarea style={{ height: "50vh", width: "50%" }} value={input()} />
    </>
  );
};

export default Index;
