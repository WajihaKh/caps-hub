'use strict';

const events = require('./global-event.js');

events.on('pickup', (payload) => logEvent('pickup', payload));
events.on('in-transit', (payload) => logEvent('in-transit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));


function logEvent(event, payload) {
  console.log(`EVENT: {
        event: '${event}',
        time: '${new Date().toISOString()}',
        payload: ${JSON.stringify(payload, null, 2)}
    }`);
}

module.exports = logEvent;