const express = require('express');
const app = express();

app.use(express.json());

const cursos = ["Html", "Css", "JavaScript", "Full-Stack"];


// Retornar um Curso
app.get("/cursos/:index", (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

// Retornar todos os Cursos
app.get("/cursos", (req, res) => {
    return res.json(cursos);
});

// Adicionar um novo curso
app.post("/cursos", (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// Atualizar Cursos
app.put("/cursos/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Deletar um Curso
app.delete("/cursos/:index", (req, res) => {
    const {index} = req.params
    
    cursos.splice(index, 1);
    return res.json({ message: "O curso foi Deletado" });
});


app.listen(3333, (req, res) => {
    console.log("Server is Running");
});