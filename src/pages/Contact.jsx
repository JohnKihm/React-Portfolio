export default function Contact() {
    return (
        <article id="contact">
            <h2>Contact</h2>
            <form>
                <div>
                    <label>Name: </label>
                    <input id="name" type="text"></input>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input id="email" type="text"></input>
                </div>
                <div>
                    <label>Message: </label>
                    <textarea id="message"></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </article>
    );
}
