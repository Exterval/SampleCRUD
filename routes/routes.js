import express from 'express';
const router = express.Router();
// sample task data
const tasks = [
  { id: 1, title: 'Learn Express', done: false },
  { id: 2, title: 'Build a CRUD API', done: false },
  { id: 3, title: 'Push to GitHub', done: true }
];

router.get('/', (req, res) => {
  res.status(200).send({ "name": "Task API", "version": "1.0", "endpoints": ["/tasks"] })
})

router.get('/health', (req, res) => {
  res.status(200).send({ "status": "ok" })
})

router.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

router.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: `Task ${req.params.id} not found` });
  res.status(200).json(task);
});

// POST /tasks - Create a new task
router.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and cannot be empty' });
  }

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title.trim(),
    done: false
  };

  tasks.push(newTask);
  res.status(201).json({"title": newTask.title});
});

export default router;
