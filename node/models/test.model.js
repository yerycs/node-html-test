const Promise = require('bluebird');
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import ApiError from '../helpers/apierror';

/**
 * User Schema
 */
const TestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
/**
 * Methods
 */
TestSchema.method({
});

/**
 * Statics
 */
TestSchema.statics = {

    getItemById(id) {
        return this.findById(id)
            .exec()
            .then((item) => {
                if (item) {
                    return item;
                }
                const err = new ApiError('No such item exists!', httpStatus.NOT_FOUND);
                return Promise.reject(err);
            });
    },

    getItems() {
        return this.find()
    }
};

/**
 * @typedef Test
 */


export default mongoose.model('Test', TestSchema, 'test');
