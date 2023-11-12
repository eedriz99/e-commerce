import { useEffect } from "react";
import axios from "axios";


function useDataFetch(source, setter) {

    useEffect(() => {
        axios
          .get(source)
          .then((res) => {
            console.log("fetched successfully");
            setter(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [source, setter]);
    
}

export default useDataFetch;
