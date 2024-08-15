"use client";

import { useEffect, useState } from "react";
import charsCounter from "./utils/charsCounter";
import wordCounter from "./utils/wordCounter";

const MAX_CONTENT_LENGTH = 16384; // 16 Kb

const Home = () => {
  const [content, setContent] = useState("");
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    setWords(wordCounter(content));
    setChars(charsCounter(content));
  }, [content]);

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value.length > MAX_CONTENT_LENGTH) {
      alert("Your input is too big!");
      return;
    }
    setContent(event.target.value);
  };

  return (
    <div>
      <div className="flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-bold">Word Count</h1>
        <p className="text-lg">
          A simple form that counts the number of words in a block of text
        </p>
      </div>
      <div className="flew-grow flex flex-col items-center justify-between gap-4 mx-auto p-4">
        <textarea
          value={content}
          onChange={handleChange}
          className="flex-grow textarea textarea-bordered w-full bg-gray-200 resize-none rounded-md hover:textarea-primary"
          rows={20}
        />
        <p className="ml-auto text-sm">words/characters</p>
        <p className="ml-auto text-sm -mt-4">
          {words}/{chars}
        </p>
      </div>
    </div>
  );
};

export default Home;
