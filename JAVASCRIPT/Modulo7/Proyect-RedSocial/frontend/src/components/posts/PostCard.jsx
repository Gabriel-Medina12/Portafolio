import { useState } from "react";
import { Link } from "react-router-dom";
import CommentList from "../comments/CommentList";

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const [reaction, setReaction] = useState(null); // Estado para la reacción del usuario
  const [likeCount, setLikeCount] = useState(post.likes || 0); // Contador de likes
  const [dislikeCount, setDislikeCount] = useState(post.dislikes || 0); // Contador de dislikes

  // Función para manejar la reacción (like/dislike)
  const handleReaction = async (type) => {
    try {
      const response = await fetch(`http://localhost:3456/api/posts/${post.id}/react`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Asume que usas JWT
        },
        body: JSON.stringify({ type }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la reacción");
      }

      const data = await response.json();

      // Actualizar el estado de la reacción y los contadores
      setReaction(type);
      setLikeCount(data.post.likes || likeCount);
      setDislikeCount(data.post.dislikes || dislikeCount);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Formatear la fecha
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  // Truncar el contenido si es muy largo
  const truncateContent = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center">
        <div className="d-flex align-items-center">
          {post.User.profileImg ? (
            <img
              src={post.User.profileImg || "/placeholder.svg"}
              alt={post.User.username}
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          ) : (
            <div
              className="rounded-circle me-2 bg-secondary d-flex align-items-center justify-content-center text-white"
              style={{ width: "40px", height: "40px" }}
            >
              {/* {post.User.name.charAt(0)} */}
            </div>
          )}
          <div>
            <h6 className="mb-0">
              <Link to={`/profile/${post.User.id}`} className="text-decoration-none">
                {post.User.name} {post.User.lastName}
              </Link>
            </h6>
            <small className="text-muted">@{post.User.username}</small>
          </div>
        </div>
        <small className="text-muted ms-auto">{formatDate(post.createdAt)}</small>
      </div>

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {expanded ? post.content : truncateContent(post.content)}
          {post.content.length > 150 && (
            <button className="btn btn-link p-0 ms-1" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </p>

        {post.img && (
          <div className="text-center mb-3">
            <img
              src={"http://localhost:3456/" + post.img || "/placeholder.svg"}
              alt={post.title}
              className="img-fluid rounded"
              style={{ maxHeight: "400px" }}
            />
          </div>
        )}
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button
          className={`btn btn-sm ${reaction === "like" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => handleReaction("like")}
        >
          <i className="bi bi-heart me-1"></i> Me gusta ({likeCount})
        </button>
        <button
          className={`btn btn-sm ${reaction === "dislike" ? "btn-danger" : "btn-outline-danger"}`}
          onClick={() => handleReaction("dislike")}
        >
          <i className="bi bi-hand-thumbs-down me-1"></i> No me gusta ({dislikeCount})
        </button>
        <a
          href={"http://localhost:5173/post/" + post.id}
          target="_blank"
          className="btn btn-outline-secondary btn-sm"
        >
          <i className="bi bi-share me-1"></i> Compartir
        </a>
      </div>

      {/* Componente de comentarios */}
      <CommentList postID={post.id} />
    </div>
  );
};

export default PostCard;

// REACCIONES (EN CASA)
// PAGOS 
// 2FA
// CHAT
// NOTIFICACIONES
// BUSCADOR (EN CASA)
