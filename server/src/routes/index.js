const express = require("express");

const router = express.Router();
const {auth} = require('../middlewares/auth')
const {addProduct, getAllProduct, getProductDetail, updateProduct, deleteProduct} = require("../controllers/product");
const {addCategory, getAllCategory, getCategoryDetail, updateCategory, deleteCategory} = require("../controllers/category");
const {addTransaction, getAllTransaction} = require("../controllers/transaction");
const {register, login, checkAuth} = require("../controllers/auth");
const {uploadFile} = require("../middlewares/uploadFile");
const {addUsers, getUsers, getUser, updateUser, deleteUser} = require("../controllers/user");

// Route Register
router.post("/register", register);

// Route Login
router.post("/login", login);

// Route User
router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// Route Product
router.post("/product", auth, uploadFile('image'), addProduct);
router.get("/products", getAllProduct);
router.get("/product/:id", getProductDetail);
router.patch("/product/:id", auth,uploadFile('image'), updateProduct);
router.delete("/product/:id", auth, deleteProduct);

// Route Category
router.post("/category", auth, addCategory);
router.get("/categories", getAllCategory);
router.get("/category/:id", getCategoryDetail);
router.patch("/category/:id", auth, updateCategory);
router.delete("/category/:id", auth, deleteCategory);

// Route transaction

router.post("/transaction", auth, addTransaction);
router.get("/transactions", auth, getAllTransaction);
router.get("/check-auth", auth, checkAuth);

module.exports = router;