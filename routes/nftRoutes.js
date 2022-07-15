const { default: axios } = require("axios");
const express = require("express");

const router = express.Router();
router.use(session({secret: 'cats'}));
router.use(passport.initialize());
router.use(passport.session());

const Moralis = require("moralis/node");
const { getAllNft, getNameNft, getPayment } = require("../controllers/nftGetController");
const {getNftsComplete, getNftId} = require('../controllers/pruebaController')
const serverUrl = "https://hzgmh0bhktiz.usemoralis.com:2053/server";
const appId = "TvlbElMKEQ3ozadXOqUAthnvVYSIKgNIIrllWHBi";
const masterKey = "bJ7z3DlllOjtYp1fRdf4ITSOXh6ewwvZEyR1nOQB";
Moralis.start({ serverUrl, appId, masterKey });

const createNft = require("../controllers/nftPostController");

// GET all nfts
router.get("/nfts/:name", getAllNft);
router.get("/nfts/", getNameNft);
router.get('/tests', getNftsComplete);
router.get('/tests/nftid', getNftId);
router.post("/nft", createNft);
router.get('/payment', getPayment);







module.exports = router;
