import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../client";

const AddCreator = () => {
  const navigate = useNavigate(); // this is to redirect after adding a creator
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState(""); // optional
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    //for error handling
    const { error } = await supabase.from("creators").insert([
      {
        name,
        url,
        description,
        imageURL: imageURL || null, // optional
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error adding creator:", error);
      setError(error.message);
    } else {
      // Successfully added → redirect to homepage
      navigate("/");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Add New Creator</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Website URL"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Image URL (optional)"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Creator"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default AddCreator;
