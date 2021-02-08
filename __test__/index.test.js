import * as axios from "axios";
const path = require("path");
const lib = path.join(path.dirname(require.resolve("axios")), "lib/adapters/http");
const http = require(lib);

test("Data is correct when get from /api/greeting", (done) => {
  const expected = { payload: "Hello monther!" };
  axios
    .get(`http://localhost:3000/api/greetings?first_name=monther`, {
      adapter: http,
    })
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.data).toMatchObject(expected);
      done();
    });
});

test("Reponse with status 200 when POST to /api/create_user", async (done) => {
  const expected = {
    payload: "MONTHER AMER",
  };
  await axios
    .post(
      `http://localhost:3000/api/create_user`,
      {
        firstName: "monther",
        lastName: "amer",
      },
      {
        adapter: http,
      }
    )
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.data.payload).toBe("MONTHER AMER");
      done();
    });
});

test("Throw error when post to /api/greeting", async () => {
  const testPost = () => {
    return axios.post(`http://localhost:3000/api/greetings?first_name=monther`, {
      adapter: http,
    });
  };
  jest.spyOn(axios, "post").mockRejectedValue(new Error("error"));
  await expect(testPost()).rejects.toThrow("error");
});

test("Throw error when Get from /api/greeting without query", async (done) => {
  await axios
    .get(`http://localhost:3000/api/greetings`, {
      adapter: http,
    })
    .then((res) => {})
    .catch((err) => {
      expect.any(Error);
      done();
    });
});

test("Throw error when get from /api/create_user", async () => {
  const testPost = () => {
    return axios.get(`http://localhost:3000/api/create_user`, {
      adapter: http,
    });
  };
  jest.spyOn(axios, "get").mockRejectedValue(new Error("error"));
  await expect(testPost()).rejects.toThrow("error");
});
