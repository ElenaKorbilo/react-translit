import React, { useState } from "react";

const alphabet = [
  { ru: "а", en: "a" },
  { ru: "б", en: "b" },
  { ru: "в", en: "v" },
  { ru: "г", en: "g" },
  { ru: "д", en: "d" },
  { ru: "е", en: "e" },
  { ru: "ё", en: "jo" },
  { ru: "ж", en: "zh" },
  { ru: "з", en: "z" },
  { ru: "и", en: "i" },
  { ru: "й", en: "j" },
  { ru: "к", en: "k" },
  { ru: "л", en: "l" },
  { ru: "м", en: "m" },
  { ru: "н", en: "n" },
  { ru: "о", en: "o" },
  { ru: "п", en: "p" },
  { ru: "р", en: "r" },
  { ru: "с", en: "s" },
  { ru: "т", en: "t" },
  { ru: "у", en: "u" },
  { ru: "ф", en: "f" },
  { ru: "х", en: "x" },
  { ru: "ц", en: "c" },
  { ru: "ч", en: "ch" },
  { ru: "ш", en: "sh" },
  { ru: "щ", en: "w" },
  { ru: "ъ", en: "#" },
  { ru: "ы", en: "y" },
  { ru: "ь", en: "'" },
  { ru: "э", en: "je" },
  { ru: "ю", en: "yu" },
  { ru: "я", en: "ya" }
];

export default function Transliteration() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handlerInput = e => {
    setInput(e.target.value);
  };

  function transliteText() {
    let newstr = input
      .split("")
      .map(el => {
        let index = alphabet.findIndex(item => item.ru == el);
        console.log(index);
        if (index != -1) {
          return alphabet[index].en;
        } else {
          return el;
        }
      })
      .join("");

    setOutput(newstr);
  }

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label htmlFor="input">Введите текст:</label>
        <br />
        <input type="text" name="input" value={input} onChange={handlerInput} />
        <br />
        <button onClick={transliteText}>Транслит</button>
        <br />
        <label htmlFor="output">Транслитерированный текст:</label>
        <br />
        <input type="text" name="output" value={output} readOnly />
      </form>
    </div>
  );
}
