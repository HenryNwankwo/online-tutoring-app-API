const router = require('express').Router();
const {getCategory, postCategory, createSubject} = require('../controllers/auth');

//Handling GET requests
router.get('/', (req, res)=>{
    res.send('The basic route is good');

});

router.get('/api/v1/categories', getCategory);
router.get('/api/v1/categories/:id/subjects', (req, res) => {
    res.send('subject route is working ');

});
router.get('/api/v1/categories/:id/subjects/:id/users?userRole=tutor', (req, res) => {
    res.send('user role route is working ');

});
router.get('/api/v1/categories/:id/subjects/users?userRole=tutor', (req, res) => {
    res.send('user role route is working ');

});

router.get('/api/v1/categories/:id/subjects/:id/', (req, res) => {
    res.send('subject id route is working ');

});
router.get('/api/v1/categories/:id/subjects?search={subjectName}&sort=subjectName&order=asc', (req, res) => {
    res.send('searching subject and sorting route is working ');

});
router.get('/api/v1/users?userRole=tutor&sort=firstName&order=asc', (req, res) => {
    res.send('searching for tutor and sorting by firstName route is working ');

});
router.get('/api/v1/users?search=firstName&userRole=tutor&sort=firstName&order=asc', (req, res) => {
    res.send('searching for tutor by firstName and sorting by firstName route is working ');

});
router.get('/api/v1/users?userRole=tutor&id={tutorID}', (req, res) => {
    res.send('getting tutor by id ');

});

router.get('/api/v1/lessons', (req, res) => {
    res.send('GET lessons route is working ');

});
router.get('/api/v1/lessons/:id/', (req, res) => {
    res.send('GET lessons by id route is working ');

});


//handling POST requests

router.post('/api/v1/users/signUp', (req, res) => {
    res.send('User SignUp route is working ');

});
router.post('/api/v1/users/signIn', (req, res) => {
    res.send('User SignIn route is working ');

});
router.post('/api/v1/lessons', (req, res) => {
    res.send('Lesson route is working ');

});
router.post('/api/v1/categories/:categoryId/subjects/:subjectId/');
router.post('/api/v1/categories/', postCategory);

router.post('/api/v1/categories/:categoryId/subjects/', createSubject);

router.post('/api/v1/lessons', (req, res) => {
    res.send('POST lessons route is working ');

});


//handling PUT requests
router.put('/api/v1/categories/:id/subjects/:id/', (req, res) => {
    res.send('PUT subject by id route is working ');

});

router.put('/api/v1/categories/:id/', (req, res) => {
    res.send('PUT categories by id route is working ');

});

router.put('/api/v1/lessons/:id/', (req, res) => {
    res.send('PUT lessons by id route is working ');

});

//handling DELETE requests

router.delete('/api/v1/categories/:id/subjects/:id/', (req, res) => {
    res.send('Deleting subject id route is working ');

});
router.delete('/api/v1/categories/:id/', (req, res) => {
    res.send('DELETE categories by id route is working ');

});

router.delete('/api/v1/lessons/:id/', (req, res) => {
    res.send('DELETE lessons by id route is working ');

});
router.delete('/api/v1/users?userRole=tutor&id={tutorID}', (req, res) => {
    res.send('DELETE tutor by id ');

});



module.exports = router;