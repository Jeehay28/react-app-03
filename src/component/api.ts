export const getQuotes = () => {
    return fetch("/quotes.json").then((res) => {
      if (!res.ok) {
        throw new Error("fetching data failed!");
      }
      return res.json();
    });
  };