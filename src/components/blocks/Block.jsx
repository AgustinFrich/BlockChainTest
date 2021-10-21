import { Table } from "semantic-ui-react";

const Block = ({ data, previousHash, hash, timeStamp }) => {
  return (
    <Table.Row>
      <Table.Cell>
        <b>{data}</b>
      </Table.Cell>
      <Table.Cell>
        <b>{previousHash}</b>
      </Table.Cell>
      <Table.Cell>
        <b>{timeStamp}</b>
      </Table.Cell>
      <Table.Cell>
        <b>{hash}</b>
      </Table.Cell>
    </Table.Row>
  );
};

export default Block;
