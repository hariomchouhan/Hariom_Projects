import React, { useState } from "react";

const MainContent = (props) => {
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };

  // To UpperCase the text
  const uppercaseHandler = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!");
  };

  // To LowerCase the text
  const lowercaseHandler = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!");
  };

  // To Clear the text
  const clearHandler = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Clear All text!");
  };

  // To Replace the text
  const replaceHandler = () => {
    const repval = prompt("Enter the word to be replaced:");
    const todoreplace = new RegExp(repval, "");

    const tobereplace = prompt("Enter the text that you want to replace with:");

    const newText = text.replace(todoreplace, tobereplace);
    setText(newText);
    props.showAlert("Replace text!");
  };

  // To Copy the text
  const copyHandler = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!");
  };

  // To Remove Extra Spaces
  const extraSpacesHandler = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces!");
  };

  // To Capitalize the first letter of the text
  const capitalizeHandler = () => {
    // const str = text;
    // const newStr = text.split(/\s+/).map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    const newStr = text.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    setText(newStr);
    props.showAlert("Capitalize the first letter of the text!");
  };

  // To Separte the 
  const comaHandler = () => {
    const textString = text.toString();
    const rows = textString.split(", ").join('\n');
    // console.log(rows);
    // const newStr = textString.split(",").join(", ");
    // const newStr = rows.map(row => row.replace(",", "\n"));
    // rows.map(row => row.split(','));

    setText(rows);
    // extraSpacesHandler();
    props.showAlert("Serparte with Coma and Remove");
  };

  return (
    <>
      <div className="flex flex-col gap-5 mb-14">
        <h2 className="text-2xl md:text-4xl text-center font-semibold mb-2">
          Word Counter, Character Counter, Remove extra spaces, Capitalize
        </h2>

        <textarea
          id="myContent"
          rows="8"
          value={text}
          onChange={changeHandler}
          className="w-[100%] bg-[#13466e] p-[0.7rem] border-[0.8px] border-white rounded-md hover:outline-none tracking-wider"
          placeholder="Enter your text to analize !"
        ></textarea>

        <div className="flex gap-3 flex-wrap">
          {/* All buttons */}
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={uppercaseHandler}
          >
            Convert to Uppercase
          </button>
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={lowercaseHandler}
          >
            Convert to Lowercase
          </button>
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={clearHandler}
          >
            Clear
          </button>
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={replaceHandler}
          >
            Replace
          </button>
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={copyHandler}
          >
            Copy
          </button>
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={extraSpacesHandler}
          >
            Remove Extra Spaces
          </button>
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={capitalizeHandler}
          >
            Capitalize
          </button>
          <button
            className="bg-[#0d6efd] text-white py-[0.5rem] px-[0.7rem] rounded-md hover:bg-[#0b5ed7]"
            disabled={text.length === 0}
            onClick={comaHandler}
          >
            Separte By Coma
          </button>
        </div>

        <h2 className="text-3xl font-semibold">Your text summary</h2>

        <p className="text-lg tracking-wider	">
          {
            text.split(/\S+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>

        <h2 className="text-3xl font-semibold">Preview</h2>

        <p className="text-lg">
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </>
  );
};

export default MainContent;
