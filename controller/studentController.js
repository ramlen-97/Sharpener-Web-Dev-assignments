const Student = require('../models/students');
const IdentityCard = require('../models/identitycard');
const Department=require('../models/department');
// const getAllStudents = (req, res) => {
//     const query = `SELECT * FROM students`;
//     db.execute(query, (err, result) => {
//         if (err) {
//             console.log(err.message);
//             res.status(500).send(err.message);
//             db.end();
//             return;
//         }
//         console.log("Details of all students is retrieved");
//         console.log(result);
//         res.status(201).send(`Details of all students is retrieved`)
//     })
// }

// const getStudentById = (req, res) => {
//     const{id}=req.params;
//     const query = `SELECT * FROM students WHERE id=?`;
//     db.execute(query,[id], (err, result) => {
//         if (err) {
//             console.log(err.message);
//             res.status(500).send(err.message);
//             db.end();
//             return;
//         }
//         console.log(`Details of student with id ${id} is retrieved`);
//         console.log(result);
//         res.status(201).send(`Details of student with id ${id} is retrieved`);
//     })
// }

const addEntries = async (req, res) => {
    try {
        const { email, name } = req.body;
        const student = await Student.create({ email, name });
        res.status(201).send(`User with name: ${name} is created!`)
    } catch (error) {
        res.status(500).send("Unable to make an entry.");
    }
}

const updateEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const student = await Student.findByPk(id);
        if (!student) {
            res.status(404).send("User is not found");
        }
        student.name = name;
        await student.save();
        res.status(200).send("User has been updated");
    } catch (error) {
        res.status(500).send("User cannot be updated");
    }
}

const deleteEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.destroy({ where: { id } });
        if (!student) {
            res.status(404).send("User is not found");
        }
        res.status(200).send("User is deleted");

    } catch (error) {
        console.log(error);
        res.status(500).send("Error encountered while deleting.")
    }
}
const addingValuesToStudentAndIdentityTable = async (req, res) => {
    try {
        const student = await student.create(req.body.student);
        const idCard = await IdentityCard.create({
            ...req.body.identityCard,
            StudentId: student.id
        });

        res.status(201).json({student,idCard});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports = {
    // getAllStudents,
    // getStudentById,
    addEntries,
    updateEntry,
    deleteEntry,
    addingValuesToStudentAndIdentityTable
}