import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/products', (req, res) => {
    res.json([
        {
            id: 1, name: 'laptop',
            price: 10.99,
            description: 'A high-performance laptop for all your computing needs.',
            imageURL: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQundzsU5ioLI3suFD0g2RWXohLebntovAeW2vwupMmMuF1RLeIQV3Xu49uKqT8jEnf-j4YetqMGOVwI-H3x1nhkjaGHmns67YYhOetasE'
        },
        {
            id: 2,
            name: 'smartphone',
            price: 19.99,
            description: 'A latest model smartphone with all the features you need.',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7NSqFfqFXhZJeDk2PYofzStd_lttqf8JAQ&s'
        },
        {
            id: 3,
            name: 'tablet',
            price: 5.99,
            description: 'A lightweight tablet for browsing and media consumption.',
            imageURL: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSXYTFWq3UHTSFYVP7WlXdHzqZffmoON-qXgZLdU22IHYTM2lTge476MR-_-vF-yHOOZ0_TvN-n384CQ19Jb4nS85_lTTkXlb_TG_-wYNaRpT3r4V0FNhoLA'
        },
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});