import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContentCreator from "../components/ContentCreator";
import supabase from "../client";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data);
      }
      setLoading(false);
    };
    fetchCreators();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (creators.length === 0) return <p>No creators found.</p>;

  return (
    <div>
      <h1>Content Creators</h1>

      {/* Add Creator Button */}
      <Link to="/add">
        <button style={{ marginBottom: "20px" }}>Add New Creator</button>
      </Link>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <div className="creators-grid">

        {creators.map((creator) => (
          <ContentCreator
            key={creator.id}
            id={creator.id} // pass id for routing
            name={creator.name}
            url={creator.url}
            description={creator.description}
            image={creator.imageURL}
          />
        ))}
      </div>
      </div>

    </div>
    
  );
};

export default ShowCreators;
