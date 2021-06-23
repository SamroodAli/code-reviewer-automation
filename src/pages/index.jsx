import { MDXProvider } from "@mdx-js/react";
import { useState } from "react";

const Name = ({ name }) => <span>{name}</span>;

const Form = ({ name, setName }) => {
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

const Index = function Index() {
  const [name, setName] = useState("");
  return (
    <>
      <Form name={name} setName={setName} />
      <p>
        Hi <Name name={name} />, Your project is complete! There is nothing else
        to say other than... it's time to merge it :shipit: Congratulations! 🎉
        Cheers and Happy coding!👏👏👏 Feel free to leave any questions or
        comments in the PR thread if something is not 100% clear. ------ _As
        described in the [Code reviews limits
        policy](https://microverse.zendesk.com/hc/en-us/articles/1500004088561)
        you have only 3 code reviews per project. If you think that the code
        review was not fair, you can request a second opinion using [this
        form](https://airtable.com/shrQAqnBwek5a0O0s)._
      </p>
    </>
  );
};

export default Index;
