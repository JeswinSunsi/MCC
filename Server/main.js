const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

async function readQuestionsDB() {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'questionsDB.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading database:', error);
        throw error;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

app.get('/:subject/chapters', async (req, res) => {
    try {
        const questionsDB = await readQuestionsDB();
        const { subject } = req.params;

        if (!questionsDB[subject.toLowerCase()]) {
            return res.status(404).json({ error: 'Subject not found' });
        }

        const mcqChapters = Object.keys(questionsDB[subject.toLowerCase()].mcq || {});
        const fibChapters = Object.keys(questionsDB[subject.toLowerCase()].fib || {});
        
        const allChapters = [...new Set([...mcqChapters, ...fibChapters])];
        
        const chaptersInfo = allChapters.map(chapter => ({
            chapterNumber: chapter.replace(/[^0-9]/g, ''),
            chapterName: chapter,
            hasMMCQ: mcqChapters.includes(chapter),
            hasFIB: fibChapters.includes(chapter)
        }));

        chaptersInfo.sort((a, b) => Number(a.chapterNumber) - Number(b.chapterNumber));

        res.json(chaptersInfo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/:subject/MCQ/:chapter', async (req, res) => {
    try {
        const questionsDB = await readQuestionsDB();
        const { subject, chapter } = req.params;
        
        if (!questionsDB[subject.toLowerCase()]) {
            return res.status(404).json({ error: 'Subject not found' });
        }

        if (!questionsDB[subject.toLowerCase()].mcq[chapter.toLowerCase()]) {
            return res.status(404).json({ error: 'Chapter not found' });
        }

        const questions = questionsDB[subject.toLowerCase()].mcq[chapter.toLowerCase()].map(q => ({
            ...q,
            options: shuffleArray([...q.options])
        }));

        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/:subject/FIB/:chapter', async (req, res) => {
    try {
        const questionsDB = await readQuestionsDB();
        const { subject, chapter } = req.params;
        
        if (!questionsDB[subject.toLowerCase()]) {
            return res.status(404).json({ error: 'Subject not found' });
        }

        if (!questionsDB[subject.toLowerCase()].fib[chapter.toLowerCase()]) {
            return res.status(404).json({ error: 'Chapter not found' });
        }

        const questions = questionsDB[subject.toLowerCase()].fib[chapter.toLowerCase()];
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});