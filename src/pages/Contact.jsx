
export default function Contact(){
    return (
        <>
     <header>
                <h1>Payton Schmidt</h1>
            </header>
            <div class = "pageTitle">
                <h3>Contact Me</h3>
            </div>
            <div class="nameInput">
                <h2 id="nameh2">Name:</h2>
                <input id="nameInput"></input>
            </div>
            <div class="emailInput">
                <h2 id="emailh2">Email:</h2>
                <input type="email" id="emailInput"></input>
            </div>
            <div class="messageInput">
                <h2 id="messageh2">Message:</h2>
                <textarea id="messageInput" rows="4" cols="60" placeholder="Enter your message here..."></textarea>
            </div>
            <div class="submit">
                <input type="submit" id="submit"></input>
            </div>
    </>)
}