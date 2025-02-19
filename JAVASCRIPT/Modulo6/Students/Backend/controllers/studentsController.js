const Student = require('../models/studentsModels');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.getAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.getById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const newStudentId = await Student.create(req.body);
        res.status(201).json({ id: newStudentId, ...req.body });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        await Student.update(req.params.id, req.body);
        res.json({ message: 'Estudiante actualizado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await Student.delete(req.params.id);
        res.json({ message: 'Estudiante eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};