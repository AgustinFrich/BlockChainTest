import useHashFunctions from "./useHashFunctions";

const useGenesisBlock = ({ data }) => {
  const { mineBlock } = useHashFunctions();
  const index = 0;
  const previousHash = "";

  const date = new Date();
  const timeStamp = date.toLocaleString();

  const { hashCode, nonce } = mineBlock(
    index,
    previousHash,
    timeStamp,
    data,
    3
  );

  const block = { index, data, previousHash, timeStamp, hashCode, nonce };

  const blockList = [block];

  return { blockList };
};

export default useGenesisBlock;
