const { DataTypes } = require('sequelize');

// This module defines the RefreshToken model for the database using Sequelize ORM.
module.exports = model;

function model(sequelize) {
    // It includes various attributes such as token, expires, created, createdByIp, revoked, revokedByIp, replacedByToken, isExpired, and isActive.
    const attributes = {
        token: { type: DataTypes.STRING },
        expires: { type: DataTypes.DATE },
        created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        createdByIp: { type: DataTypes.STRING },
        revoked: { type: DataTypes.DATE },
        revokedByIp: { type: DataTypes.STRING },
        replacedByToken: { type: DataTypes.STRING },
        isExpired: {
            type: DataTypes.VIRTUAL,
            get() { return Date.now() >= this.expires; }
        },
        isActive: {
            type: DataTypes.VIRTUAL,
            get() { return !this.revoked && !this.isExpired; }
        }
    };

    const options = {
        timestamps: false
    };

    return sequelize.define('refreshToken', attributes, options);
}