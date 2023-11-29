import React from "react";

function Results({ infoData }) {
  const mydata = infoData.collection.items;

  return mydata.map((item, index) => (
    <div key={index}>
      {item.links &&
        item.links
          .filter((r) => r.render === "image")
          .map((p, index) => <img src={p.href} key={index} />)}
      {item.data.map((t, index) => (
        <div key={index}>
          <h2>title: {t.title}</h2>
          <h3>data: {t.date_created}</h3>
          <p>keywords: {t.keywords}</p>
        </div>
      ))}
    </div>
  ));
}

export default Results;