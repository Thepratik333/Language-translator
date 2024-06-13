import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaVolumeUp, FaCopy, FaExchangeAlt } from 'react-icons/fa';
import { RiSpeakLine } from 'react-icons/ri';
import lang from '../assets/lang.png'

const Translator = ({ from, setFrom, to, setTo, text, setText, translate }) => {
  const [convert, setConvert] = useState("");
  console.log(translate?.data?.translations[0]?.translatedText);

  const handleChangeFrom = (e) => {
    setFrom(e.target.value);
  };

  const handleChangeTo = (e) => {
    setTo(e.target.value);
  };

  const handleTextChange = (e) => {
    setConvert(e.target.value);
  };

  const handleBtn = (e) => {
    e.preventDefault();
    setText(convert);
  };

  const handleSpeak = (language) => {
    const synth = window.speechSynthesis;
    let utterThis;

    if (language === 'from') {
      utterThis = new SpeechSynthesisUtterance(convert);
      if (convert !== "") {
        synth.speak(utterThis);
        toast.success(`Speaking ${convert}`, {
          icon: <RiSpeakLine className='text-green-500 font-bold' />
        })
      }

    } else {
      const translatedText = translate?.data?.translations[0]?.translatedText || "";
      utterThis = new SpeechSynthesisUtterance(translatedText);
      if (translatedText !== "") {
        synth.speak(utterThis);
        toast.success(`Speaking ${translatedText}`, {
          icon: <RiSpeakLine className='text-green-500 font-bold' />
        })
      }
    }


  };

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    if (textToCopy !== "") {
      toast.success("Copied succesfully")

    }
  };

  const SwapHandle = () => {
    setFrom(to);
    setTo(from);
  };

  const languages = {
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "hy": "Armenian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "ceb": "Cebuano",
    "zh-CN": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)",
    "co": "Corsican",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "en": "English",
    "eo": "Esperanto",
    "et": "Estonian",
    "fi": "Finnish",
    "fr": "French",
    "fy": "Frisian",
    "gl": "Galician",
    "ka": "Georgian",
    "de": "German",
    "el": "Greek",
    "gu": "Gujarati",
    "ht": "Haitian Creole",
    "ha": "Hausa",
    "he": "Hebrew",
    "hi": "Hindi",
    "hmn": "Hmong",
    "hu": "Hungarian",
    "is": "Icelandic",
    "ig": "Igbo",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "ja": "Japanese",
    "jw": "Javanese",
    "kn": "Kannada",
    "kk": "Kazakh",
    "km": "Khmer",
    "ko": "Korean",
    "ku": "Kurdish",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "la": "Latin",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "lb": "Luxembourgish",
    "mk": "Macedonian",
    "mg": "Malagasy",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mn": "Mongolian",
    "my": "Myanmar (Burmese)",
    "ne": "Nepali",
    "no": "Norwegian",
    "ny": "Nyanja (Chichewa)",
    "ps": "Pashto",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "pa": "Punjabi",
    "ro": "Romanian",
    "ru": "Russian",
    "sm": "Samoan",
    "gd": "Scots Gaelic",
    "sr": "Serbian",
    "st": "Sesotho",
    "sn": "Shona",
    "sd": "Sindhi",
    "si": "Sinhala (Sinhalese)",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "es": "Spanish",
    "su": "Sundanese",
    "sw": "Swahili",
    "sv": "Swedish",
    "tl": "Tagalog (Filipino)",
    "tg": "Tajik",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "zu": "Zulu"
  };

  return (
    <div className='h-[66.6vh]'>
      <div className=' flex items-center justify-center'>
        <h1 className="text-4xl font-bold text-center bg-gray-800 rounded-b-md mx-5 p-3 font-[math] text-white  mb-4">
          Language Converter
        </h1>
      </div>

      <div className="flex justify-center h-full items-center mt-20">
        <img src={lang} alt="" style={{ width: "50%" }} />
        <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleBtn}>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <textarea
                spellCheck="false"
                value={convert}
                className="from-text w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter text"
                onChange={handleTextChange}
              ></textarea>
              <textarea
                spellCheck="false"
                value={translate?.data?.translations[0]?.translatedText || ""}
                readOnly
                disabled
                className="to-text w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Translation"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 mr-5">
                <div className="relative">
                  <select
                    name="from"
                    value={from}
                    onChange={handleChangeFrom}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {Object.entries(languages).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3a1 1 0 0 1 .993.883L11 4v10.585l2.293-2.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1 1.32-1.497l.094.083L9 14.585V4a1 1 0 0 1 1-1z" /></svg>
                  </div>
                </div>
                <FaVolumeUp
                  className="text-xl cursor-pointer"
                  onClick={() => handleSpeak('from')}
                />
                <FaCopy
                  className="text-xl cursor-pointer"
                  onClick={() => handleCopy(convert)}
                />
              </div>
              <button
                type="button"
                className=" mr-5 flex justify-center items-center exchange-button p-2 px-3 rounded-md bg-red-500 hover:bg-red-700 text-white"
                onClick={SwapHandle}
              >
                <FaExchangeAlt />
              </button>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <select
                    name="to"
                    value={to}
                    onChange={handleChangeTo}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {Object.entries(languages).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3a1 1 0 0 1 .993.883L11 4v10.585l2.293-2.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1 1.32-1.497l.094.083L9 14.585V4a1 1 0 0 1 1-1z" /></svg>
                  </div>
                </div>
                <FaVolumeUp
                  className="text-xl cursor-pointer"
                  onClick={() => handleSpeak('to')}
                />
                <FaCopy
                  className="text-xl cursor-pointer"
                  onClick={() => handleCopy(translate?.data?.translations[0]?.translatedText)}
                />
              </div>
            </div>

            <button
              type="submit"
              className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Translate Text
            </button>
          </div>
        </form>
      </div>
      <footer className="bg-gray-800 py-4 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">
            &copy; 2024 Pratik Panchal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>

  );
};

export default Translator;
