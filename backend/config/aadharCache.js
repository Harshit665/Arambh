// In-Memory Registration Cache - Reduces DB queries for duplicate checks
// Caches Aadhar and Email for O(1) lookups

const Registration = require('../models/Registration');

// In-memory Sets for O(1) lookup
const aadharCache = new Set();
const emailCache = new Set();

// Load all registered Aadhars and Emails on server start
const loadRegistrationCache = async () => {
    try {
        const registrations = await Registration.find({}, 'aadharNo email').lean();
        registrations.forEach(reg => {
            if (reg.aadharNo) aadharCache.add(reg.aadharNo);
            if (reg.email) emailCache.add(reg.email.toLowerCase());
        });
        console.log(`Registration cache loaded: ${aadharCache.size} Aadhars, ${emailCache.size} Emails`);
    } catch (error) {
        console.error('Failed to load registration cache:', error.message);
    }
};

// Check if Aadhar exists (O(1) lookup)
const isAadharRegistered = (aadharNo) => {
    return aadharCache.has(aadharNo);
};

// Check if Email exists (O(1) lookup)
const isEmailRegistered = (email) => {
    return emailCache.has(email?.toLowerCase());
};

// Check both Aadhar and Email - returns which one is duplicate
const checkDuplicate = (aadharNo, email) => {
    if (aadharCache.has(aadharNo)) {
        return { isDuplicate: true, field: 'aadhar', message: 'This Aadhar is already registered!' };
    }
    if (emailCache.has(email?.toLowerCase())) {
        return { isDuplicate: true, field: 'email', message: 'This Email is already registered!' };
    }
    return { isDuplicate: false };
};

// Add new registration to cache
const addToCache = (aadharNo, email) => {
    if (aadharNo) aadharCache.add(aadharNo);
    if (email) emailCache.add(email.toLowerCase());
};

// Legacy exports for backward compatibility
const loadAadharCache = loadRegistrationCache;
const addToAadharCache = (aadharNo) => aadharCache.add(aadharNo);

module.exports = {
    loadRegistrationCache,
    loadAadharCache, // backward compatible
    isAadharRegistered,
    isEmailRegistered,
    checkDuplicate,
    addToCache,
    addToAadharCache, // backward compatible
};
