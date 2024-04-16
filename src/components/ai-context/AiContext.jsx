import React, { createContext, useContext, useState } from "react";
import runChat from "@/config/Gen";
import { PiArrowArcRight } from "react-icons/pi";

const Ai_context = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState("");
    const [prompt, setPrompt] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [allprompt, setAllprompt] = useState([]);
    const [allresponse, setAllresponse] = useState([]);
    const [loader, setLoader] = useState(false);
    const [history, setHistory] = useState(false);
    const [recent, setRecent] = useState("");
    const [recentans, setRecentans] = useState("");
    const [menu, setMenu] = useState(true);
    const [mobile, setMobile] = useState(true);

    const sent = async (prompt) => {
        setQuestion(prompt);
        setLoader(true);
        const response = await runChat(prompt);
        const formattedResponse = handleResponse(response, prompt);
        setAnswer(formattedResponse);
        setAllresponse([...allresponse, formattedResponse]);
        setLoader(false);
    };

    const handleResponse = (response, prompt) => {
        if (/^[\d+\-*/().\s]+$/.test(prompt)) {
            return evaluateMathExpression(prompt);
        } else {
            return formatResponse(response);
        }
    };

    const evaluateMathExpression = (expression) => {
        try {
            const result = eval(expression);
            return (
                <div className="chat-message">
                    <div className="chat-line">
                        <span style={{ fontWeight: "bold", color: "blue" }}>{expression}</span> = <span style={{ fontWeight: "bold", color: "red" }}>{result}</span>
                    </div>
                </div>
            );
        } catch (error) {
            console.error("Error evaluating the expression:", error);
            return "Error evaluating the expression";
        }
    };

    const formatResponse = (response) => {
        const parts = response.split("**").map((part, index) => {
            if (index % 2 === 0) {
                return part;
            } else {
                return <b key={index}>{part}<br /></b>;
            }
        });

        return (
            <div className="chat-message">
                {parts.map((part, index) => (
                    <div key={index} className="chat-line">
                        {part}
                    </div>
                ))}
            </div>
        );
    };

    const passData = {
        data,
        setData,
        sent,
        prompt,
        setPrompt,
        question,
        answer,
        allprompt,
        setAllprompt,
        loader,
        setLoader,
        allresponse,
        setAllresponse,
        history,
        setHistory,
        recent,
        setRecent,
        recentans,
        setRecentans,
        menu,
        setMenu,
        mobile,
        setMobile,
    };

    return (
        <Ai_context.Provider value={passData}>
            {children}
        </Ai_context.Provider>
    );
};

const Myprovider = () => {
    return useContext(Ai_context);
};

export { Ai_context, Myprovider, ContextProvider };
