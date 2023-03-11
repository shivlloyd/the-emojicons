import React, { useState } from 'react';
import './App.css';

const emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "❤️": "Red Heart",
  "😍": "Smiling Face with Heart-Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "😊": "Smiling Face with Smiling Eyes",
  "💕": "Two Hearts",
  "🙏": "Folded Hands",
  "😭": "Loudly Crying Face",
  "😘": "Face Blowing a Kiss",
  "👍": "Thumbs Up",
  "😉": "Winking Face",
  "💔": "Broken Heart",
  "🔥": "Fire",
  "🥺": "Pleading Face",
  "😁": "Beaming Face with Smiling Eyes",
  "💖": "Sparkling Heart",
  "🤔": "Thinking Face",
  "😔": "Pensive Face",
  "😜": "Winking Face with Tongue",
  "🤗": "Hugging Face",
  "💯": "Hundred Points",
  "😎": "Smiling Face with Sunglasses",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😢": "Crying Face",
  "😋": "Face Savoring Food",
  "👌": "OK Hand",
  "🤤": "Drooling Face",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👀": "Eyes",
  "🌹": "Rose",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤷": "Person Shrugging",
  "💜": "Purple Heart",
  "😇": "Smiling Face with Halo",
  "👑": "Crown",
  "🤯": "Exploding Head",
  "💗": "Growing Heart",
  "😳": "Flushed Face",
  "👉": "Backhand Index Pointing Right",
  "😞": "Disappointed Face",
  "💛": "Yellow Heart",
  "🤫": "Shushing Face",
  "🙈": "See-No-Evil Monkey",
  "😪": "Sleepy Face",
  "😮": "Face with Open Mouth",
  "🤢": "Nauseated Face",
  "😱": "Face Screaming in Fear",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😤": "Face with Steam From Nose",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😡": "Pouting Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "💤": "Zzz",
  "🥴": "Woozy Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🥊": "Boxing Glove",
  "🤸‍♀️": "Woman Cartwheeling",
  "🤸‍♂️": "Man Cartwheeling",
  "🤼‍♀️": "Women Wrestling",
  "🤼‍♂️": "Men Wrestling",
  "🥋": "Martial Arts Uniform",
  "🤺": "Fencer",
  "🤾‍♀️": "Woman Playing Handball",
  "🤾‍♂️": "Man Playing Handball",
  "🏀": "Basketball",
  "🏈": "American Football",
  "⚽️": "Soccer Ball",
  "🎾": "Tennis",
  "🏐": "Volleyball",
  "🥏": "Flying Disc",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🎿": "Ski",
  "🏂": "Snowboarder",
  "🏋️‍♀️": "Woman Weightlifting",
  "🏋️‍♂️": "Man Weightlifting",
  "🧗‍♀️": "Woman Climbing",
  "🧗‍♂️": "Man Climbing",
  "🏊‍♀️": "Woman Swimming",
  "🏊‍♂️": "Man Swimming",
  "🤽‍♀️": "Woman Playing Water Polo",
  "🤽‍♂️": "Man Playing Water Polo",
  "🚴‍♀️": "Woman Biking",
  "🚴‍♂️": "Man Biking",
  "🏇": "Horse Racing",
  "🧘‍♀️": "Woman in Lotus Position",
  "🧘‍♂️": "Man in Lotus Position",
  "🏄‍♀️": "Woman Surfing",
  "🏄‍♂️": "Man Surfing",
  "🛹": "Skateboard",
  "🛶": "Canoe",
  "🎣": "Fishing Pole",
  "🚣‍♀️": "Woman Rowing Boat",
  "🚣‍♂️": "Man Rowing Boat"
};

const arrayOfEmojis = Object.keys(emojiDictionary);

function App() {
  const [meaning, emojiFunction] = useState("");
  const [emojiIcon, emojiIconFunction] = useState("");
  const [inputValue, setInputValue] = useState("");

  function emojiInputHandler(emoji) {
    // processing

    var userInput = emoji.target.value;

    var output = emojiDictionary[userInput];

    if (output === undefined) {
      output = "we don't have this in our database";
    }
    emojiIconFunction(userInput); //react call to set output
    emojiFunction(output); //react call to set output
    setInputValue(userInput); //react call to set input value
  }

  function emojiClickHandler(emoji) {
    // processing
    var output = emojiDictionary[emoji];
    window.scrollTo({ top: 0, behavior: "smooth" }); //scrolls to the top when clicked on any icon
    emojiIconFunction(emoji); //react call to set output
    emojiFunction(output); //react call to set output
    setInputValue(""); //react call to clear input value
  }

  return (
    <div className="App">
      <h1>The Emojicons!</h1>
      <input
        placeholder="input emoji"
        value={inputValue}
        onChange={emojiInputHandler}
      ></input>
      <h2 style={{ fontSize: "2.5rem" }}>{emojiIcon}</h2>{" "}
      {/** Actual output set by React using useState */}
      <h2>{meaning}</h2> {/** Actual output set by React using useState */}
      <h3>emojis we know</h3>
      {arrayOfEmojis.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

export default App;
