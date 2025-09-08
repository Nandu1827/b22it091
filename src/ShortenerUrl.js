import React, { useState } from "react";
import InputForm from "./InputForm";

const ShortenerUrl = () => {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div>
      <InputForm onShortenUrl={setShortUrl} />
      {shortUrl && (
        <div>
          <h3>Shortened URL:</h3>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ShortenerUrl;