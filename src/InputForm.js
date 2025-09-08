 
import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ onShortenUrl }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

   try {
      const response = await axios.get(
        `http://localhost:5000/api/shorten?url=${encodeURIComponent(url)}`
      );
      const shortUrl = response.data.result.full_short_link;
      onShortenUrl(shortUrl);  
      setUrl("");  
    } catch (err) {
      console.error(err); 
      setError("Failed to shorten URL. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputForm;
