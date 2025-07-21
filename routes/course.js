const express = require('express');

const router = express.Router();

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

router.get("/", (req, res) => {
    const courseName = courses.map((c) => c.name);
    const courseString = courseName.join(", ")
    res.send(`Courses : ${courseString}`);
})

router.get("/:courseId", (req, res) => {
    const id = req.params.courseId;
    const courseDetail = courses.find((c) => c.id == id);
    res.send(courseDetail ? `Course:${courseDetail.name}, Description:${courseDetail.description}` : `Course not found`);
})

module.exports = router;
