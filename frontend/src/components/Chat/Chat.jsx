import { useState } from "react";
import axios from "axios";

import "./Chat.css"

const Chat = () => {
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/api/request", {
        query: input,
      })
      .then((response) => {
        setResponse(response.data.prediction);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleForm(e);
    }
  };

  return (
    <div className="app-container">
      <div className="container">
      <h1 className="title is-1 has-text-centered">Custom AI Chat</h1>
      <form onSubmit={handleForm}>
        <div className="field has-addons pb-3">
          <div className="control is-expanded">
            <input
              placeholder="¿Qué quieres saber?"
              className="input"
              type="text"
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              value={input}
              required
            />
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
      {loading ? (
        <div className="has-text-centered">
          <i className="fas fa-spinner fa-spin"></i> Esperando respuesta...
        </div>
      ) : (
        response && (
          <pre className="response">
            <code>{response}</code>
          </pre>
        )
      )}
      </div>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export { Chat };
