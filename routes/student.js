const express = require('express');

const router = express.Router();

const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

router.get("/", (req, res) => {
    const studentsName=students.map((s)=>s.name);
    const nameString=studentsName.join(", ")
    res.send(`Students : ${nameString}`);
})

router.get("/:studentId",(req,res)=>{
    const id=req.params.studentId;
    const studentName=students.find((s)=>s.id==id);
    res.send(studentName?`Student : ${studentName.name}`:'Student not found');
})

module.exports = router;