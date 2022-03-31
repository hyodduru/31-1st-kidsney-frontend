import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <section className="mainEvent">
        <a href="/">
          <img
            src="https://i.ibb.co/K6MSKvW/main-event-toys-png.png"
            alt="main event"
          />
        </a>
      </section>
      <section className="subEvent">
        <a href="/">
          <img
            src="https://i.ibb.co/ngW27ZG/sub-event-toys.png"
            alt="sub event"
          />
        </a>
      </section>
      {/* <section className=""></section> */}
    </main>
  );
};

export default Main;
