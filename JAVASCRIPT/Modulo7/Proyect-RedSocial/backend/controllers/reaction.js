// backend/controllers/reaction.js
const express = require('express');
const router = express.Router();
const Reaction = require('../models/reaction');
const Post = require('../models/Post');

// Crear una reacción (like/dislike)
router.post('/:postId/react', async (req, res) => {
  try {
    const { type } = req.body;
    const { postId } = req.params;
    const userId = req.user.id; // Asume que tienes autenticación JWT

    // Verificar si el usuario ya ha reaccionado a esta publicación
    const existingReaction = await Reaction.findOne({
      where: { postId, userId }
    });

    if (existingReaction) {
      // Si ya existe, actualizamos el tipo de reacción
      await existingReaction.update({ type });
      return res.status(200).json({ message: 'Reacción actualizada exitosamente' });
    }

    // Si no existe, creamos una nueva reacción
    const reaction = await Reaction.create({
      postId,
      userId,
      type
    });

    // Obtener la publicación actualizada con las reacciones
    const post = await Post.findByPk(postId, {
      include: [{ model: Reaction }]
    });

    res.status(201).json({
      message: 'Reacción creada exitosamente',
      post
    });
  } catch (error) {
    console.error('Error al crear reacción:', error);
    res.status(500).json({ error: 'Ocurrió un error al procesar la reacción' });
  }
});

// Obtener todas las reacciones de una publicación
router.get('/:postId/reactions', async (req, res) => {
  try {
    const { postId } = req.params;
    const reactions = await Reaction.findAll({
      where: { postId },
      include: [{ model: User }]
    });
    res.status(200).json(reactions);
  } catch (error) {
    console.error('Error al obtener reacciones:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las reacciones' });
  }
});

module.exports = router;