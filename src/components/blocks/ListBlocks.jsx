import { Segment, Table } from "semantic-ui-react";
import useBlock from "../../hooks/useBlock";
import useGenesisBlock from "../../hooks/useGenesisBlock";
import useHashFunctions from "../../hooks/useHashFunctions";
import Block from "./Block";

const ListBlocks = () => {
  const { blockList } = useGenesisBlock({ data: "$100 to B" });
  const { isChainValid } = useHashFunctions();
  blockList.push(useBlock({ blockList, data: "$100 to C" }));
  blockList.push(useBlock({ blockList, data: "$200 to A" }));
  blockList.push(useBlock({ blockList, data: "$150 to B" }));
  /*
  blockList[2].hashCode = "a";
  blockList[2].previousHash = "a";
  */
  const result = isChainValid(blockList);
  const square = { width: 175, height: 175 };

  const color = result ? "green" : "red";
  const text = result ? "The chain is valid!" : "The cain is not valid!";

  return (
    <>
      <div>
        <Table celled textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell content="Data" />
              <Table.HeaderCell content="Previous hashCode" />
              <Table.HeaderCell content="Time Stamp" />
              <Table.HeaderCell content="HashCode" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {blockList.map((block) => {
              return (
                <Block
                  data={block.data}
                  previousHash={block.previousHash}
                  timeStamp={block.timeStamp}
                  hash={block.hashCode}
                  key={block.index}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>
      <div className="centered">
        <Segment
          content={text}
          color={color}
          circular
          style={square}
          textAlign="center"
        />
      </div>
    </>
  );
};

export default ListBlocks;
