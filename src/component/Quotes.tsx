import { useEffect, useState } from "react";
import { getQuotes } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Quotes = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getQuotes();
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const colors = [
    "#E2FBB6",
    "#E8F5D1",
    "#F0FFF0",
    "#A9BA9D",
    "#98FB98",
    "#D0F0C0",
    "#DADD98",
    "#ACE1AF",
  ];

  if (data) {
    return (
      <>
        <div>
          {data.length > 0 ? (
            data.map(
              (
                item: { id: number; author: string; quote: string },
                index: number
              ) => (
                <div
                  key={index}
                  style={{
                    margin: "1rem 1rem",
                    display: "grid",
                    gridTemplateColumns: "8fr 2fr",
                    gap: "1rem",
                  }}
                >
                  <div style={{ gridArea: "1/1/1/1" }}>
                    <h2
                      style={{
                        color: colors[index % colors.length],
                        textAlign : 'left'
                      }}
                    >
                      <sup>
                        {" "}
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                          style={{
                            color: "#ADE9E9",
                            fontWeight: "light",
                            marginRight: "0.5rem",
                            fontSize: "0.9rem",
                          }}
                        />
                      </sup>

                      <strong style={{ textAlign: "left" }}>
                        {item.quote}
                      </strong>
                      <sup>
                        <FontAwesomeIcon
                          icon={faQuoteRight}
                          style={{
                            color: "#ADE9E9",
                            fontWeight: "light",
                            marginLeft: "0.5rem",
                            fontSize: "0.9rem",
                          }}
                        />
                      </sup>
                    </h2>
                  </div>
                  <div style={{ gridArea: "2/1/2/1" }}></div>

                  <p style={{textAlign : 'right'}}>{item.author}</p>
                </div>
              )
            )
          ) : (
            <p>No data available</p>
          )}
        </div>
      </>
    );
  } else {
    return <>...Loading</>;
  }
};

export default Quotes;
