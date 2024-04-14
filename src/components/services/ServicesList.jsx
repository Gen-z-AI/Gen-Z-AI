import React from 'react';
import ProjectCard from './ProjectCard';

export default function ServicesList() {
  const services = [
    {
      id: "project1",
      className: "odd",
      projectTitle: "AI Q&A Bot: Your Virtual Knowledge Navigator",
      projectDesc: "Embark on a seamless quest for knowledge with our AI Q&A Bot. Simply pose any question, from trivia to complex inquiries, and receive accurate answers in real-time, thanks to cutting-edge natural language processing.",
      projectImgUrl: "https://media.istockphoto.com/id/920743046/photo/robots-call-center.jpg?s=612x612&w=0&k=20&c=fdlk8f9_cYq3H00xKTU67nugqN2zRzKVOBJTeqGZ3WA="
    },
    {
      id: "project2",
      className: "even",
      projectTitle: "KnowItAll: AI-Powered Information Concierge",
      projectDesc: "Introducing KnowItAll, your ultimate AI companion for rapid information retrieval. Harnessing advanced machine learning techniques, KnowItAll swiftly deciphers queries and furnishes comprehensive responses, revolutionizing how we access knowledge.",
      projectImgUrl: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
    },
    {
      id: "project3",
      className: "odd",
      projectTitle: "AskEinstein: AI-Powered Genius at Your Fingertips",
      projectDesc: "Unlock the mysteries of the universe with AskEinstein. This AI marvel employs the wisdom of the ages to provide enlightening responses to your questions. From scientific quandaries to philosophical ponderings, AskEinstein illuminates the path to understanding.",
      projectImgUrl: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
    }
  ];

  return (
    <div>
      {services.map((service, index) => (
          <ProjectCard
            id={service.id}
            className={service.className}
            projectTitle={service.projectTitle}
            projectDesc={service.projectDesc}
            projectImgUrl={service.projectImgUrl}
          />
      ))}
    </div>
  );
}
