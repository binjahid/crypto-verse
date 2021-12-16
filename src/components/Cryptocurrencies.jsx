import { Card, Col, Row } from "antd";
import millify from "millify";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = () => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  if (isFetching) return <div>Loading...</div>;
  const coins = cryptoList?.data?.coins;
  console.log(coins);
  return (
    <>
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
