import { useState } from 'react';
import ResumeFile from "../components/utils/Resume.pdf";
export default function Resume() {

    const [FrontEndDefenition, setFrontEndDefenition] = useState('');
    const [BackEndDefenition, setBackEndDefenition] = useState('');
    
    const handleMouseEnter = (index) => {
        if (index === 0) {
            setFrontEndDefenition("I excel in crafting semantic and accessible markup that enhances user experience and optimizes search engine visibility. My expertise includes utilizing HTML5 features such as audio and video embedding, canvas elements for graphics, and form controls that improve interactivity and usability. I prioritize best practices in coding, ensuring that my HTML is clean, well-organized, and compliant with W3C standards. ");
        }else if (index === 1) {
            setFrontEndDefenition("I have a strong command of CSS, which I use to create visually appealing and responsive web designs. My expertise includes advanced techniques like Flexbox and Grid layout, enabling me to build fluid layouts that enhance user experience across devices.");
        }else if (index === 2) {
            setFrontEndDefenition("The dynamic programming language that powers interactivity on the web. I excel in writing clean and efficient code that enhances user experiences through features such as event handling, DOM manipulation, and asynchronous programming with Promises and async/await. My experience includes utilizing modern JavaScript frameworks like React, which allows me to build scalable and maintainable applications.");
        }else if (index === 3) {
            setFrontEndDefenition("My expertise includes utilizing jQuery's concise syntax to streamline tasks such as event handling, animations, and AJAX requests, allowing for the creation of dynamic and responsive web applications. I prioritize best practices by ensuring that my jQuery code is efficient and maintainable, often integrating it seamlessly with other frameworks and libraries.");
        }else if (index === 4) {
            setFrontEndDefenition("I specialize in responsive design, ensuring that websites provide an optimal viewing experience across a variety of devices and screen sizes. My expertise includes implementing fluid grids, flexible images, and media queries to create layouts that adapt seamlessly to different resolutions. I prioritize best practices in responsive design, focusing on mobile-first approaches and accessibility to enhance user experience.");
        }else if (index === 5) {
            setFrontEndDefenition("A powerful library for building user interfaces. I excel in creating dynamic, single-page applications using React components, which promote reusability and maintainability. My skills include managing application state with hooks like useState and useEffect, as well as implementing routing with React Router for seamless navigation. I prioritize best practices in code organization and performance optimization, ensuring that my applications are efficient and user-friendly.");
        }else if (index === 6) {
            setFrontEndDefenition("The popular front-end framework that enables rapid and responsive web development. I utilize Bootstrap's grid system and pre-built components to create visually appealing and mobile-first designs that enhance user experience. My expertise includes customizing Bootstrap themes and styles to align with brand identity while ensuring cross-browser compatibility. I leverage Bootstrap's utility classes to streamline CSS and improve development efficiency.");
        }else if (index === 7) {
            setBackEndDefenition("I possess a strong understanding of APIs and their critical role in modern application development. I have hands-on experience in designing and integrating RESTful APIs, allowing seamless communication between front-end and back-end systems. My proficiency in utilizing tools like Postman for API testing and documentation ensures that I can deliver robust and well-documented endpoints.");
        }else if (index === 8) {
            setBackEndDefenition("I have a deep understanding of Node.js and its powerful capabilities for building scalable and efficient server-side applications. My experience includes creating RESTful APIs using Express.js, allowing for seamless data exchange between clients and servers. I am skilled in utilizing Node.js's asynchronous, event-driven architecture to handle multiple requests concurrently, which enhances application performance and responsiveness. Additionally, I have worked extensively with npm to manage project dependencies and leverage a vast ecosystem of third-party packages, streamlining development processes.");
        }else if (index === 9) {
            setBackEndDefenition("My understanding of routing in Express enables me to create modular and maintainable applications, ensuring that each route is clearly defined and easily accessible. I am adept at integrating various middleware solutions for logging, authentication, and error handling, which enhances the security and reliability of the applications I develop. Additionally, I have experience in serving static files and parsing JSON data, facilitating dynamic content generation.");
        }else if (index === 10) {
            setBackEndDefenition("My experience includes designing and implementing database schemas that are optimized for performance and scalability, ensuring efficient data storage and retrieval. I am proficient in writing complex SQL queries, including joins, subqueries, and aggregate functions, to extract meaningful insights from large datasets. Additionally, I have hands-on experience with database normalization techniques, ensuring data integrity and reducing redundancy through proper schema design.");
        }else if (index === 11) {
            setBackEndDefenition("My experience includes designing and implementing flexible data models that leverage MongoDB's document-oriented architecture, allowing for rapid development and easy scalability. I am skilled in executing CRUD operations and utilizing advanced MongoDB features such as aggregation, indexing, and data validation to optimize performance and ensure data integrity. My familiarity with Mongoose, an Object Data Modeling (ODM) library, enables me to define schemas and enforce data relationships effectively, streamlining the interaction between my applications and the database.");
        }else if (index === 12) {
            setBackEndDefenition("I have a strong foundation in REST (Representational State Transfer) principles and their application in building scalable and efficient web services. My experience includes designing and implementing RESTful APIs that adhere to RESTful conventions, ensuring stateless communication and resource-based interactions. I am adept at utilizing HTTP methods such as GET, POST, PUT, and DELETE to perform CRUD operations, allowing clients to interact seamlessly with server resources. I prioritize the use of meaningful URIs and proper status codes to enhance API usability and clarity. Additionally, my understanding of content negotiation enables me to serve data in various formats, such as JSON and XML, catering to diverse client needs.");
        }else if (index === 13) {
            setBackEndDefenition("I have a deep understanding of GraphQL and its advantages as a modern alternative to traditional REST APIs. My expertise includes designing and implementing GraphQL schemas that define clear and efficient data structures, allowing clients to request exactly the data they need in a single query. I am skilled in writing resolvers that handle data fetching and manipulation, ensuring optimal performance and responsiveness in applications.");
        }else {
            setFrontEndDefenition("");
            setBackEndDefenition("");
      }
    }
    const handleMouseLeave = () => {
        setFrontEndDefenition("");
        setBackEndDefenition("");

    }
    return (
        <>
               
            <main>
                <h2>Resume</h2>
                <div className="downloadResume">
                    <p id="resume1">Download ➡ </p>
                    <a id="resume2" href={ResumeFile} download="Resume">Resume</a>
                </div>
                <div className="FrontEnd">
                    <h2>Front-end Proficiencies</h2>
                    <ul>
                        <li onMouseEnter={() => handleMouseEnter(0)} id="firstLi"
                            onMouseLeave={() => handleMouseLeave()}>HTML</li>
                        <li onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave()}>CSS</li>
                        <li onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave()}>JavaScript</li>
                        <li onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave()}>jQuery</li>
                        <li onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave()}>Responsive design</li>
                        <li onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave()}>React</li>
                        <li onMouseEnter={() => handleMouseEnter(6)}
                            onMouseLeave={() => handleMouseLeave()}
                        id="lastLi">bootstrap</li>
                    </ul>
                {FrontEndDefenition && (
              <div className="defenitonDiv">
                  <p id="defenition">{FrontEndDefenition}</p>
              </div>
                    )}
                </div>
                <div className="BackEnd">
                    <h2>Back-end Proficiencies</h2>
                    <ul>
                        <li onMouseEnter={() => handleMouseEnter(7)}
                            onMouseLeave={() => handleMouseLeave()} id="firstLi">API's</li>
                        <li onMouseEnter={() => handleMouseEnter(8)}
                            onMouseLeave={() => handleMouseLeave()}>Node</li>
                        <li onMouseEnter={() => handleMouseEnter(9)}
                            onMouseLeave={() => handleMouseLeave()}>Express</li>
                        <li onMouseEnter={() => handleMouseEnter(10)}
                            onMouseLeave={() => handleMouseLeave()}>MySQL, sequelize</li>
                        <li onMouseEnter={() => handleMouseEnter(11)}
                            onMouseLeave={() => handleMouseLeave()}>MongoDB, Mongoose</li>
                        <li onMouseEnter={() => handleMouseEnter(12)}
                            onMouseLeave={() => handleMouseLeave()}>Rest</li>
                        <li onMouseEnter={() => handleMouseEnter(13)}
                            onMouseLeave={() => handleMouseLeave()}
                        id="lastLi">GraphQL</li>
                    </ul>
                    {BackEndDefenition && (
              <div className="defenitonDiv">
                  <p id="defenition">{BackEndDefenition}</p>
              </div>
                    )}
                </div>
            </main>
        </>
    )
}