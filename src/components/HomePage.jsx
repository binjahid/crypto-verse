import React from "react";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
const HomePage = () => {
  const { Title } = Typography;
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  const globalStats = data?.data?.stats;
  console.log(globalStats);
  if (isFetching) return <div>Loading...</div>;
  return (
    <>
      <Title>Welcome to World of Crypto Verse</Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.total}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          ></Statistic>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="home-more">
          <Link to="/currencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified></Cryptocurrencies>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="home-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified></News>
    </>
  );
};

export default HomePage;
