const express = require('express');
const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils//niceList.json');

const port = 1225;

const app = express();
app.use(express.json());

// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = 'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const { name, proof } = req.body;

  // TODO: prove that a name is in the list 
  if (verifyProof(proof, name, MERKLE_ROOT)) {
    res.status(200).send({
      success: true,
      data: {
        message: "You got a gift!!",
        gift: "Toy Robot"
      }
    });
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
