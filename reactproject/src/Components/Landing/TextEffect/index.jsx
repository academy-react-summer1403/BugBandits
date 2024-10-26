import React, { useState, useEffect } from "react";

const useTypingEffect = (text, duration) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  useEffect(() => {
    if (currentPosition >= text.length) return;

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, text, duration]);

  return text.slice(0, currentPosition);
};

const texts = ["دنبال چی می گردی؟"];
const TIME_TO_FADE = 300;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 100;

const TextTypingEffect = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeText, setFadeText] = useState(true);
  const typedText = useTypingEffect(texts[textIndex], TIME_PER_LETTER);

  const timeToTypeText = texts[textIndex].length * TIME_PER_LETTER;

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeText(false);

      const nextTextTimeout = setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeText(true);
      }, TIME_TO_FADE);

      return () => clearTimeout(nextTextTimeout);
    }, timeToTypeText + TIME_INTERVAL);

    return () => clearTimeout(fadeTimeout);
  }, [textIndex, timeToTypeText]);

  return (
    <span
      className={`inline-flex items-center text-ocean_blue lg:text-3xl sm:text-3xl font-bold mb-3 dark:text-light_blue duration-300 ${
        fadeText ? "opacity-1 translate-y-0" : "translate-y-2 opacity-0"
      }`}
      key={textIndex}
    >
      {typedText}
      <span
        className={`ml-2 w-1 bg-ocean_blue dark:bg-white ${
          fadeText ? "opacity-1" : "opacity-0"
        } animate-blink`}
      >
        &nbsp;
      </span>
    </span>
  );
};

export { TextTypingEffect };
