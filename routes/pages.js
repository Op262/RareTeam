const router = require('express').Router();
const Post = require('../models/post')
//static Page ------------------------------------------------------------
router.get('/check-password', (req, res, next)=>{
    res.render('pass');
});

router.get('/943jfdhviutgvyitedgiuehtgiuudtyihgtdouighdtiugdiytrhgiudgjouutgutdugutdugiuorhihfrehjherfhyerhfuyrefhreuhfihoerfiyorehfireuhfiuerhfiuerhiufveryuyfvhgrfuerfhreugyhtightehgyhgyt8hgy8uthg8yutrhg8urhg53573465734597934edwe7568346vvv587934dd3455657348ddddjijj658756785635783465374653486537486563845', (req, res, next) => {
    res.render('index');
});
// post -----------------------------------------------------------------------
router.get('/', (req, res, next)=>{
    res.render('post-new')
})

module.exports = router;