'use strict';
// in-transit and I picked up the order

//set time-out of 3000, console driver delivered item

const events = require('../global-event.js');
events.on('pickup', (payload) => {

  console.log('Payload received in pickup event:', payload);
  console.log(`DRIVER: picked up ${payload.orderId}`);
  events.emit('in-transit', payload);

  setTimeout(() => {
    console.log(`DRIVER: delivered ${payload.orderId}`);
    events.emit('delivered', { type: 'delivered', payload });
  }, 3000);

});

module.exports = {};

