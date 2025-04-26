const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        passwordHash: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        acceptTerms: { type: DataTypes.BOOLEAN },
        role: { type: DataTypes.STRING, allowNull: false },
        verificationToken: { type: DataTypes.STRING },
        verified: { type: DataTypes.DATE },
        resetToken: { type: DataTypes.STRING },
        resetTokenExpires: { type: DataTypes.DATE },
        passwordReset: { type: DataTypes.DATE },
        created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated: { type: DataTypes.DATE },
        status: {
            type: DataTypes.ENUM('Active', 'Inactive'),
            allowNull: false,
            defaultValue: 'Active'
        },
        isVerified: {
            type: DataTypes.VIRTUAL,
            get() { return !!(this.verified || this.passwordReset); }
        },
        isActive: {
            type: DataTypes.VIRTUAL,
            get() { return this.status === 'Active'; }
        }
    };

    const options = {
        timestamps: false,
        defaultScope: {
            attributes: { exclude: ['passwordHash'] },
            where: { status: 'Active' } // Only active accounts by default
        },
        scopes: {
            withHash: { attributes: {} },
            inactive: { where: { status: 'Inactive' } },
            all: { where: {} } // Scope to get all accounts regardless of status
        }
    };

    return sequelize.define('account', attributes, options);
}