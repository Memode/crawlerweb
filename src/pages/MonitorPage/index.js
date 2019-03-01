import React, { Component } from 'react';
import EventsOverview from './components/EventsOverview';
import TabChart from './components/TabChart';
import DataStatistics from './components/DataStatistics';
import Footer from './components/Footer';
import CardList from './components/CardList';

export default class MonitorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="monitor-page-page">
        <EventsOverview />
        <TabChart />
        <DataStatistics />
        <Footer />
        <CardList />
      </div>
    );
  }
}
