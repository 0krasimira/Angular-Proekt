const router = require("express").Router()
const paintingManager = require("../managers/paintingManager")
const { isAuth, auth } = require("../middlewares/authMiddleware")
const getErrorMessage = require('../utils/errorUtils')

router.use((req, res, next) => {


    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'),
        res.header('Access-Control-Allow-Methods', '*'),
        res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");



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


// router.post('/add', isAuth, async (req,res) =>{

//   const painting = req.body
//   try {
//       const newPainting = await paintingManager.create(req.user._id, painting);
//       res.json(newPainting)
//   } catch (err) {
//       // const message = getErrorMessage(err)
//       console.log(err.message)
//   }
// })

router.get('/add', isAuth, async (req, res) => {
    res.status(405).json({ error: 'GET method not allowed for this endpoint - add' });
})




router.post('/add', isAuth, async (req, res) => {
    // Extract painting data from the request body
    const paintingData = req.body;

    try {
        // Create a new painting document with the author set to the _id of the authenticated user
        const newPainting = await paintingManager.create(req.user._id, paintingData);
        res.json(newPainting);
    } catch (error) {
        console.error('Error creating painting:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get("/:paintingId/edit", isAuth, async (req, res) => {
    if (!req.user) {
        return
    }
    try {
        const painting = await paintingManager.getOneWithDetails(req.params.paintingId).lean()
        res.json(painting)
    } catch (err) {
        res.status(404)
    }
})

// router.post("/:electronicId/edit", isAuth, async (req, res) => {
//     const electronic = req.body
//     const electronicId = req.params.electronicId

//     try{
//         const isOwnerInfo = await electronicManager.getOneWithDetails(electronicId)
//         const isOwner = isOwnerInfo.owner._id.toString() == req.user?._id
//         if(!isOwner){
//             return res.redirect(`/catalog`)
//         }
//         await electronicManager.edit(electronicId, electronic)
//             res.redirect(`/${req.params.electronicId}/details`)

//     }catch(err){
//         const message = getErrorMessage(err)
//         res.status(400).render("electronic/edit", {electronic, error: message})
//        }
// })


// router.get("/:electronicId/delete", isAuth, async (req, res) => {
//     const electronicId = req.params.electronicId
//     try{
//         const isOwnerInfo = await electronicManager.getOneWithDetails(electronicId)
//         const isOwner = isOwnerInfo.owner._id.toString() == req.user?._id

//         if(!isOwner){
//             return res.redirect(`/catalog`)
//         }
//         await electronicManager.delete(electronicId)
//         res.redirect('/')

//     }catch(err){
//         res.status(400).render('404')
//        }
// })


module.exports = router


