const connection = require('../utils/db-connection');
const db = require('../utils/db-connection');

const getAllStudents = (req, res) => {
    const query = `SELECT * FROM students`;
    db.execute(query, (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Details of all students is retrieved");
        console.log(result);
        res.status(201).send(`Details of all students is retrieved`)
    })
}

const getStudentById = (req, res) => {
    const{id}=req.params;
    const query = `SELECT * FROM students WHERE id=?`;
    db.execute(query,[id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log(`Details of student with id ${id} is retrieved`);
        console.log(result);
        res.status(201).send(`Details of student with id ${id} is retrieved`);
    })
}

const addEntries = (req, res) => {
    const { email, name } = req.body;
    const insertQuery = `INSERT INTO students(email,name) VALUES (?,?)`;
    db.execute(insertQuery, [email, name], (err) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Value has been inserted");
        res.status(201).send(`Student with ${name} successfully added`)
    })
}

const updateEntry = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateQuery = `UPDATE students set name=?,email=? WHERE id=?`;
    db.execute(updateQuery, [name, email, id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send("Student is not found");
            return;
        }
        console.log(result);
        res.status(200).send("Student has been updated");
    })
}

const deleteEntry = (req, res) => {
    const { id } = req.params;
    const deleteQuery = `DELETE FROM students WHERE id=?`;
    db.execute(deleteQuery, [id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send("Student is not found");
            return;
        }
        console.log(result);
        res.status(200).send(`Student with id ${id} is deleted`);
    })
}

module.exports = {
    getAllStudents,
    getStudentById,
    addEntries,
    updateEntry,
    deleteEntry
}