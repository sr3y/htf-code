import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const API_KEY = "apikey"; // Replace with your actual API key

  const fetchData = async () => {
    if (!query) return;
    try {
      const res = await fetch("https://api.gemini.com/v1/your-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ prompt: query }),
      });
      const data = await res.json();
      setResponse(data.result || "No response");
    } catch (error) {
        console.error("Fetch error:", error);
        setResponse("Error fetching data");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Gemini API Fetcher</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter query"
        style={{ width: "100%", padding: "10px" }}
      />
      <button onClick={fetchData} style={{ marginTop: "10px", padding: "10px" }}>
        Get Data
      </button>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>{response}</div>
    </div>
  );
}

export default App;
