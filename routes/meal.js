const { Router } = require("express");
const { saveMeals, loadMeals } = require("../controllers/meal");
const { fetchMeals } = require("../helpers/loader");
const router = Router();

router.get("/save", fetchMeals, saveMeals);
router.get("/load", loadMeals);

module.exports = router;
