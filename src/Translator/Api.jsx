import React, { useState, useEffect } from "react";
import axios from 'axios';
import Translator from "./Translator";

const Api = () => {
  const [from, setFrom] = useState("hi");
  const [to, setTo] = useState("en");
  const [text, setText] = useState("");
  const [translate, setTranslate] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set('q', text);
      encodedParams.set('target', to);
      encodedParams.set('source', from);
      
      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '00722ee11bmshde32a0af369b7d0p10914djsn19de19319127',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
      };
      
      try {
        const response = await axios.request(options);
        console.log(response);
        setTranslate(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (text && from && to) {
      fetchData();
    }
  }, [text, from, to]);

  return (
    <Translator
      from={from}
      setFrom={setFrom}
      to={to}
      setTo={setTo}
      text={text}
      setText={setText}
      translate={translate}
    />
  );
};

export default Api;
