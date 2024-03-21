const router = require("express").Router()
const paintingManager = require("../managers/paintingManager")
const { isAuth } = require("../middlewares/authMiddleware")
const getErrorMessage = require('../utils/errorUtils')

router.use((req, res, next) => {

    
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'),
    res.header('Access-Control-Allow-Methods', '*'),
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

//     res.setHeader("Access-Control-Allow-Origin", "*");
// res.setHeader("Access-Control-Allow-Credentials", "true");
// res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

    next()
})

router.get('/paintings', async (req, res) => {
    try {
        const allPaintings = await paintingManager.getAll();
        res.json(allPaintings);
    } catch (error) {
        console.error('Error fetching paintings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/paintings/:paintingId', async (req, res) => {
    const paintingId = req.params.paintingId;
    console.log('Requested painting ID:', paintingId);
    try {
        const onePainting = await paintingManager.getOneWithDetails(paintingId); 
        console.log(onePainting);
        if (!onePainting) {
            return res.status(404).json({ message: 'Painting not found' });
        }
        return res.json(onePainting);
    } catch (error) {
        console.error('Error fetching one painting:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.post('/add', async (req,res) =>{
    const painting = req.body
    try {
        const newPainting = await paintingManager.create(painting);
        res.json(newPainting)
    } catch (err) {
        // const message = getErrorMessage(err)
        console.log(err.message)
    }
})





module.exports = router


/*router.get('/paintings', (req, res) => {
    res.json([
        {
            "title": "Wild roses",
            "year": "2023",
            "technique": "Watercolor",
            "description": "made on 20x30 cm canvas, inspired by a boquet of flowers",
            "imageUrl": "https://i.pinimg.com/564x/dc/ef/43/dcef43eb1caf2816010d14839954d110.jpg",
            "price": "120",
            "author": "Jane Doe",
            "paintingId": "hflsdfkskgdjf"
        },
    {
            "title": "Summer breeze",
            "year": "2020",
            "technique": "Acryllic",
            "description": "made on 50x50 cm canvas",
            "imageUrl": "https://i.pinimg.com/564x/03/02/ec/0302ecbf60a7e5c93313a6c10119ed81.jpg",
            "price": "200",
            "author": "John Doe",
            "paintingId": "bfvcepregiut"
        },
        {
            "title": "The taste of summer",
            "year": "2013",
            "technique": "Oil on canvas",
            "description": "Perfect to hang in your kitchen",
            "imageUrl": "https://i.pinimg.com/564x/12/3a/03/123a03b9bbfc7f7a5c4aad6b72b570c5.jpg",
            "price": "330",
            "author": "Krasimira Stoyanova",
            "paintingId": "jtrikdfvmxcvnds"
        },
        {
            "title": "The taste of summer",
            "year": "2013",
            "technique": "Oil on canvas",
            "description": "Perfect to hang in your kitchen",
            "imageUrl": "https://i.pinimg.com/736x/3e/00/18/3e0018eacff7626cc114d39cf622c9f2.jpg",
            "price": "190",
            "author": "Krasimira Stoyanova",
            "paintingId": "dsdkjfhesihfd"
        },
    ])
})*/