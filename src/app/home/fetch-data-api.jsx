import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchDataApi = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axios.get("https://fakestoreapi.com/products", {
          signal,
        });

        setProductData(res.data);
      } catch (error) {
        if (error.name === "CanceledError") {
          console.log("abort the req");
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    let handler = setTimeout(() => {
      setDebounced(search);
    }, 2000);

    return () => clearTimeout(handler);
  }, [search]);

  const filteredProductdata = productData.filter((item) => {
    return item.title.toLowerCase().includes(debounced.toLowerCase());
  });

  return (
    <div>
      <h2>product data</h2>

      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}

      <input
        value={search}
        placeholder="search...."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredProductdata?.map((product) => (
          <div key={product.id}>
            <span>{product?.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchDataApi;
