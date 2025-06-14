import { createContext, useState } from "react";

import runChat from "./../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [resentPromt, setResentPromt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loader, setLoader] = useState(false);
  const [resultData, setResultData] = useState("");
  const [extend, setextend] = useState(false);

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => {
        return prev + nextWord;
      });
    }, 75 * index);
  };

  // if(extend){
  //   setextend(true)
  // }
  // console.log()
  // console.log(extend)

  const newChat = () =>{
    setShowResult(false);
  };
  const onSend = async (prompts) => {
    setShowResult(true);
    setLoader(true);
    setInputValue("");
    setResentPromt(inputValue);
    if(inputValue){
      setPrevPrompts((prev) => [...prev, inputValue]);
    }
    setResultData("");
    let response = "";
    if (!prompts) {
      response = await runChat(inputValue);
    } else {
      setResentPromt(prompts)
      response = await runChat(prompts);
    }

    let newResponse = "";
    let newArry = response.split("**");

    for (let i = 0; i < newArry.length; i++) {
      if (i === 0 || i % 2 == 0) {
        newResponse += newArry[i];
      } else {
        newResponse += "<b>" + newArry[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br>");
    let newResponseArry = newResponse2.split(" ");

    for (let i = 0; i < newResponseArry.length; i++) {
      const nextWord = newResponseArry[i];
      delayPara(i, nextWord + " ");
    }

    setLoader(false);
    setInputValue("");
  };

  const contextValue = {
    inputValue,
    setInputValue,
    resentPromt,
    setResentPromt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loader,
    resultData,
    onSend,
    newChat,
    setextend,
    extend,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
