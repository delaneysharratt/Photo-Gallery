const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  const sqlQuery = `UPDATE "gallery"
            SET "likes" = ("likes" + 1)
            WHERE "id" = $1;`;
  pool
    .query(sqlQuery, [galleryId])
    .then(result => {
      console.log('Successfully added like to photo!');
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(`Error in PUT route: ${error}`);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "gallery"
    ORDER BY "id"`;
  pool
    .query(sqlText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
