// Razorpay Configuration
const Razorpay = require('razorpay');

let cachedInstance = null;

const getRazorpayInstance = () => {
    const key_id = process.env.RAZORPAY_KEY || process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_SECRET || process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
        return null;
    }

    if (!cachedInstance) {
        cachedInstance = new Razorpay({ key_id, key_secret });
    }

    return cachedInstance;
};

module.exports = {
    getRazorpayInstance,
};
