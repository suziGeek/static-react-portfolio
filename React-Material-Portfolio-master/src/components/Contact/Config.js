import source from "./source.json";

const user = USER;
const refreshToken = "1/cNxnEkKzGJKYhm4ChvQd7PZQ6vHb_1hINEA2--df278";
const accessToken =
  "4/lgETRGk-WiR8g0Fr8EYN1WqNyeIxlgclTX4dwd837EhiAfWb8ykEr2zBMjQmjVfl7vZ3VKiQuF2PK0K8gWcHAhs";

export default {
  user,
  clientId: source.web.client_id,
  clientSecret: source.web.client_secret,
  refreshToken,
  accessToken
};
