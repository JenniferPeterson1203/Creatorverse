import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../client";
import "../App.css"; // make sure your CSS is imported

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fetch creator
  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) setError(error.message);
      else {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL || "");
      }

      setLoading(false);
    };
    fetchCreator();
  }, [id]);

  // Update creator
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const { error } = await supabase
      .from("creators")
      .update({ name, url, description, imageURL: imageURL || null })
      .eq("id", id);

    setSaving(false);
    if (error) setError(error.message);
    else navigate(`/view/${id}`);
  };

  // Delete creator
  const handleDelete = async () => {
    setSaving(true);
    setError(null);

    const { error } = await supabase.from("creators").delete().eq("id", id);

    setSaving(false);
    if (error) setError(error.message);
    else navigate("/");
  };

  if (loading) return <p>Loading creator...</p>;

  return (
    <div className="creator-form-container">
      <h1>Edit {name}</h1>
      <form onSubmit={handleSubmit} className="creator-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Image URL (optional)"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Update Creator"}
        </button>
      </form>

      <button
        className="btn-delete"
        onClick={() => setShowDeleteModal(true)}
        disabled={saving}
      >
        Delete Creator
      </button>

      {error && <p className="error-text">Error: {error}</p>}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this creator? This cannot be undone.</p>
            <div className="modal-buttons">
              <button className="btn-cancel" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className="btn-confirm" onClick={handleDelete} disabled={saving}>
                {saving ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCreator;
