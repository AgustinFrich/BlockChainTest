import { SHA256 } from "crypto-js";

const useHashFunctions = () => {
  const calculateHashCode = (index, previousHash, timeStamp, data, nonce) => {
    return SHA256(index + previousHash + timeStamp + data + nonce).toString();
  };

  const isChainValid = (blockList) => {
    const { length } = blockList;
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < length; i++) {
      const block = blockList[i];
      const previousBlock = blockList[i - 1];
      console.log(block.nonce);

      if (
        block.hashCode !==
        calculateHashCode(
          block.index,
          block.previousHash,
          block.timeStamp,
          block.data,
          block.nonce
        )
      ) {
        return false;
      }

      if (
        previousBlock.hashCode !==
        calculateHashCode(
          previousBlock.index,
          previousBlock.previousHash,
          previousBlock.timeStamp,
          previousBlock.data,
          previousBlock.nonce
        )
      ) {
        return false;
      }
    }
    return true;
  };

  const mineBlock = (index, previousHash, timeStamp, data, difficulty) => {
    let hashCode = "";
    let nonce = 0;
    while (
      hashCode.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      nonce += 1;
      hashCode = calculateHashCode(index, previousHash, timeStamp, data, nonce);
    }
    return { hashCode, nonce };
  };

  return { isChainValid, calculateHashCode, mineBlock };
};

export default useHashFunctions;
