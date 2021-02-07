import Axios from "axios";
import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [state, setState] = useState({ first_name: "", firstName: "", lastName: "" });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleGet = async () => {
    try {
      let { data } = await Axios.post(`/api/greetings?first_name=${state.first_name}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePost = async () => {
    try {
      let { firstName, lastName } = state;
      let data = await Axios.post(`/api/create_user`, { firstName, lastName });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Green Got</h1>
      <div className={styles.container}>
        <input
          className={styles.inupt}
          autoComplete='off'
          placeholder='Enter your first name'
          name='first_name'
          value={state.first_name}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handleGet}>
          GET /api/greetings
        </button>
      </div>
      <div className={styles.container}>
        <input
          className={styles.inupt}
          autoComplete='off'
          placeholder='Enter your first name'
          name='firstName'
          value={state.firstName}
          onChange={handleChange}
        />
        <input
          className={styles.inupt}
          autoComplete='off'
          placeholder='Enter your last name'
          name='lastName'
          value={state.lastName}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handlePost}>
          POST /api/create_user
        </button>
      </div>
    </div>
  );
}
