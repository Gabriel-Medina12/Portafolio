import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';

const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`http://localhost:3456/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo cargar el post');
        }
        const datos = await response.json();
        setData(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No se encontró el post</div>;
  }

  return (
    <>
      <PostCard key={data.id} post={data} />
    </>
  );
};

export default Post;