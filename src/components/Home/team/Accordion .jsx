import React, { useState } from 'react';
import { FaAngleDown, FaTimes } from 'react-icons/fa'; 

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="relative mb-3">
            <h6 className="mb-0">
                <button
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                    onClick={toggleAccordion}
                >
                    <span>{title}</span>
                    <span className="ml-auto">{isOpen ? <FaTimes size={20} className="accordion-icon" /> : <FaAngleDown size={20} className="accordion-icon" />}</span>
                </button>
            </h6>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Accordion = () => (
    <section className='px-4'>
        <div className="col-span-1 lg:col-span-1">
            {[
                { title: "What are the benefits of using Gen-Z-AI's language model?", content: "Gen-Z-AI's language model can generate human-like text, assist with various natural language processing tasks, and provide valuable insights and information across a wide range of topics." },
                { title: "How can I utilize Gen-Z-AI's language model in my projects?", content: "You can integrate Zen-Z-AI's language model into your projects through APIs, SDKs, or libraries provided by OpenAI. Additionally, you can explore tutorials and documentation to better understand its capabilities and implementation." },
                { title: "What are some use cases for Gen-Z-AI's language model?", content: "Zen-Z-AI's language model can be used for content generation, sentiment analysis, language translation, question answering, and much more. Its versatility makes it suitable for various industries such as healthcare, finance, education, and entertainment." }
            ].map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    </section>
);

export default Accordion;
