import express from "express";
const router = express.Router();
router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('http://localhost:4000');
    });
});
export {router as LogOutRouter};