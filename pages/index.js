import Axios from "axios";
import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [state, setState] = useState({ first_name: "" });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = async () => {
    console.log("hello");
    try {
      let data = await Axios.get(`/api/greetings?first_name=${state.first_name}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <input placeholder='Enter your first name' name='first_name' value={state.first_name} onChange={handleChange} />
      <h1>hello</h1>
      <button onClick={handleClick}>GET /api/greetings</button>
    </div>
  );
}
