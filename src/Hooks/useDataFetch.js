import { useEffect } from "react";
import axios from "axios";

//  function useDataFetch(source, setter, setIsLoading) {
// useEffect(() => {
//     axios
//       .get(source)
//       .then((res) => {
//         console.log("fetched successfully");
//         setter(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [source, setter]);

//   setIsLoading(false);
// }

async function fetchData(source, setter, setIsLoading) {
  try {
    let response = await axios.get(source);
    setter(response.data);
  } catch (error) {
    console.log("could not fetch data successfully cause: ", error);
  } finally {
    setIsLoading(false);
  }
}

function useDataFetch(source, setter, setIsLoading) {
  useEffect(() => {
    fetchData(source, setter, setIsLoading);
    // return fetchData(source, setter, setIsLoading);
  }, [source, setter]);
}
export default useDataFetch;
