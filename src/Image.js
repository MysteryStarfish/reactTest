import { useState, useEffect } from "react";

export default function Image() {
  const [imageUrl, setImageUrl] = useState(null);
  const [option, setOption] = useState("");
  useEffect(() => {
    if (option === "dogs") {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((json) => setImageUrl(json.message));
    } else if (option === "cats") {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((json) => setImageUrl(json[0].url));
    }
  }, [option]);
  return (
    <div className="App">
      <button onClick={() => setOption("cats")}>Cats</button>
      <button onClick={() => setOption("dogs")}>Dogs</button>
      <img src={imageUrl} alt={imageUrl}></img>
      <p>{imageUrl}</p>
    </div>
  );
}
