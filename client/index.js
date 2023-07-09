const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {

  const MERKLE_ROOT = new MerkleTree(niceList);
  // const root = MERKLE_ROOT.getRoot();
  const index = niceList.findIndex(n => n === name);
  const proof = MERKLE_ROOT.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
      name: "Vinayak Singh",
      proof: proof
  });

  console.log({ gift });
}

main();