import { Card, Col, Row, Input } from "antd";
import millify from "millify";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [coins, setCoins] = React.useState(cryptoList?.data?.coins);
  const [key, setKey] = React.useState("");
  React.useEffect(() => {
    const updatedList = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(key.toLowerCase())
    );
    setCoins(updatedList);
  }, [key, cryptoList]);

  if (isFetching) return <div>Loading...</div>;
  // const coins = cryptoList?.data?.coins;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search For Crypto"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((coin) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={6}
            xxl={6}
            key={coin.id}
            className="crypto-card"
          >
            <Card
              title={`${coin.rank}. ${coin.name}`}
              extra={
                <img
                  className="crypto-image"
                  src={coin.iconUrl}
                  alt="coin icon"
                />
              }
              hoverable
            >
              <p>Price : {millify(coin.price)}</p>
              <p>Market Cap : {millify(coin.marketCap)}</p>
              <p>Daily Change : {millify(coin.change)}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
