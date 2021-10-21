/* eslint-disable no-unused-vars */
import useHashFunctions from "./useHashFunctions";

const useBlock = ({ blockList, data }) => {
  const { mineBlock } = useHashFunctions();
  const date = new Date();
  const timeStamp = date.toLocaleString();
  const index = blockList[blockList.length - 1].index + 1;
  const previousHash = blockList[blockList.length - 1].hashCode;

  const { hashCode, nonce } = mineBlock(
    index,
    previousHash,
    timeStamp,
    data,
    3
  );

  const block = { index, data, previousHash, timeStamp, hashCode, nonce };

  return block;
};

export default useBlock;
