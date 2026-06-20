const express = require('express');
const router = express.Router();

/**
 * POST /login
 */
router.post('/login', (req, res) => {
  console.log('INSIDE LOGIN API');
  const { username, password } = req.body || {};

  // TODO: replace with real authentication logic (DB check, password hash, JWT, etc.)
  res.status(200).json({
    message: 'INSIDE LOGIN API',
    received: { username, password }
  });
});

/**
 * GET /view
 */
router.get('/view', (req, res) => {
  console.log('INSIDE VIEW API');

  // TODO: replace with real "view" logic (e.g. fetch a record by id/query param)
  res.status(200).json({
    message: 'INSIDE VIEW API',
    query: req.query
  });
});

/**
 * GET /search
 */
router.get('/search', (req, res) => {
  console.log('INSIDE SEARCH API');

  // TODO: replace with real search logic (e.g. filter records by query params)
  res.status(200).json({
    message: 'INSIDE SEARCH API',
    query: req.query
  });
});

/**
 * PUT /updateprofile
 */
router.put('/updateprofile', (req, res) => {
  console.log('INSIDE UPDATE PROFILE API');

  // TODO: replace with real profile-update logic
  res.status(200).json({
    message: 'INSIDE UPDATE PROFILE API',
    received: req.body
  });
});

/**
 * DELETE /del
 */
router.delete('/del', (req, res) => {
  console.log('INSIDE DELETE API');

  // TODO: replace with real delete logic
  res.status(200).json({
    message: 'INSIDE DELETE API'
  });
});

module.exports = router;
