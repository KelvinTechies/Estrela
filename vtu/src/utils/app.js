import axios from "axios";

const MtnData = axios
  .get("https://api.epins.com.ng/v2/autho/variations/?service=sme")
  .then((res) => {
    console.log(res.data);
  });

export { MtnData };
