import { useEffect, useState } from 'react';

export default function WaveText({
  text = 'TEXT',
  longText = true,
  duration = 200,
}) {
  const [charIndex, setCharIndex] = useState(0);
  const textLen = text.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex(prev => (prev + 1) % textLen);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="wave-text">
      {text.split('').map((char, i) => {
        const diff = (i - charIndex + text.length) % text.length;

        return diff === 0 ? (
          <span key={i} className="middle-wave">
            {char}
          </span>
        ) : diff === 1 || diff === text.length - 1 ? (
          <span key={i} className="border-wave">
            {char}
          </span>
        ) : (diff === 2 || diff === text.length - 2) && longText ? (
          <span key={i} className="border-wave">
            {char}
          </span>
        ) : (
          <span key={i}>{char}</span>
        );
      })}
    </span>
  );
}
