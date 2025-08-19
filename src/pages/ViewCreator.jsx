import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import supabase from "../client.js";
import "../App.css"

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
      setLoading(false);
    };
    fetchCreator();
  }, [id]);

  if (loading) return <p>Loading creator...</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div className="creator-container">
      <h1 className="creator-name">{creator.name}</h1>

      <div className="creator-buttons">
        <Link to={`/edit/${id}`}>
          <button className="btn btn-edit">Edit</button>
        </Link>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-visit">Visit Creator's Page</button>
        </a>
      </div>

      <img
        src={creator.imageURL}
        alt={creator.name}
        className="creator-image"
      />

      <p className="creator-description">{creator.description}</p>
    </div>
  );
};

export default ViewCreator;
