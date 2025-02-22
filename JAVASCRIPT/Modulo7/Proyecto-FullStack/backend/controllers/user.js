const express = require('express');
const router = express.Router();
// const { User } = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');
const {User} = require('../models');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validación básica
    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
});

router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // Verificar si el usuario ya existe
        // const existingUser = await User.findOne({ where: { email } });
        // if (existingUser) {
        //     return res.status(400).json({ message: 'El usuario ya existe' });
        // }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const user = await User.create({ username: email, password: hashedPassword });

        // Enviar respuesta
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
});

const crypto = require('crypto');

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Buscar el usuario por email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Generar un token para restablecer la contraseña
        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 hora de expiración

        // Guardar el token en la base de datos
        await user.update({ resetToken, resetTokenExpiry });

        // Enviar el token por correo electrónico (implementar esta función)
        sendResetPasswordEmail(user.email, resetToken);

        res.status(200).json({ message: 'Correo de restablecimiento enviado' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
});

router.post('/change-password', async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;

    try {
        // Buscar el usuario por ID
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña actual
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña actual incorrecta' });
        }

        // Hashear la nueva contraseña
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Actualizar la contraseña en la base de datos
        await user.update({ password: hashedNewPassword });

        res.status(200).json({ message: 'Contraseña actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
});

router.post('/edit-profile', async (req, res) => {
    const { userId, name, email } = req.body;

    try {
        // Verificar si el nuevo email ya está en uso por otro usuario
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser && existingUser.id !== userId) {
            return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
        }

        // Actualizar el perfil del usuario
        const user = await User.findByPk(userId);
        await user.update({ name, email });

        res.status(200).json({ message: 'Perfil actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
});

router.post('/logout', (req, res) => {
    // En un sistema basado en tokens, el logout se maneja en el cliente eliminando el token.
    // No hay necesidad de hacer nada en el servidor.
    res.status(200).json({ message: 'Sesión cerrada correctamente' });
});

module.exports = router;