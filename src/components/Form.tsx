export const Form = () => {
  return (
    <div className="form-wrapper">
      <form action="https://formsubmit.co/a.stuborn@gmail.com" method="POST">
        <input
          type="hidden"
          name="_subject"
          value="Nytt mail från Adams Portfolio!"
          className="input-fields"
        />

        <input
          type="hidden"
          name="_next"
          value="https://localhost:5173/thanks"
          className="input-fields"
        />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Ämne" required></input>
        <textarea
          name="message"
          cols={30}
          rows={5}
          placeholder="Skriv ditt meddelande här"
        />

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};
