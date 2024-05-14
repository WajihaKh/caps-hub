('use strict');

const Chance = require('chance');
const chance = new Chance();
const events = require('../global-event.js');

// Add to payload object:
// as the value of my value key
// add address:chance.address({short_suffix: true})
// in function emit pickup n pass in payload
// hub will alert item delivered to vendor

function pickupForStore(storename) {
  return {
    store: storename,
    orderId: chance.guid(),
    customer: chance.name(),
    address: `${chance.city()}, ${chance.state()}`,
  };
    
}

function vendorHandler(storename) {
  const order = pickupForStore(storename);
  console.log(order);
  events.emit('pickup', order);
  
  events.on('delivered', (event) => {
    if(event.payload.store === storename) {
      console.log(`VENDOR: Thank you for your order ${event.payload.customer}`);
    }
  });
}

module.exports = {vendorHandler};