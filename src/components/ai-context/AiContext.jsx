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

        // Check if the response is a mathematical expression
        const isMathExpression = /^[\d+\-*/().\s]+$/.test(prompt);

        // If it's a mathematical expression, evaluate it
        if (isMathExpression) {
            try {
                const result = eval(prompt); // Use eval to evaluate the expression (Note: Use with caution)
                const formattedResponse = (
                    <div className="chat-message">
                        <div className="chat-line">
                            {prompt} = {result}
                        </div>
                    </div>
                );
                setAnswer(formattedResponse);
                setAllresponse([...allresponse, formattedResponse]);
            } catch (error) {
                console.error("Error evaluating the expression:", error);
                setAnswer("Error evaluating the expression");
            }
        } else {
            // Split the response by "**" and format each part
            const parts = response.split("**").map((part, index) => {
                if (index % 2 === 0) {
                    return part; // Unformatted text
                } else {
                    return <b key={index}>{part}<br /></b>; // Bold formatted text followed by line break
                }
            });

            // Join the parts together with line breaks
            const formattedResponse = (
                <div className="chat-message">
                    {parts.map((part, index) => (
                        <div key={index} className="chat-line">
                            {part}
                        </div>
                    ))}
                </div>
            );

            setAnswer(formattedResponse);
            setAllresponse([...allresponse, formattedResponse]);
        }
        
        setLoader(false);
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
