const { invalidMessage } = require("./lib/core")

const TYPE_VALIDATOR = {
    NUMBER: {
        name: 'NUMBER',
        attribute: '',
        property: {
            message: 'The {attribute} must a number!',
        },
        action: (data) => {
            if (typeof (data.value) == 'number') {
                return;
            } else {
                return invalidMessage(data);
            }
        }
    },
    STRING: {
        name: 'STRING',
        attribute: '',
        property: {
            message: 'The {attribute} must a string!',
        },
        action: (data) => {
            if (typeof (data.value) == 'string') {
                return;
            } else {
                return invalidMessage(data);
            }
        }
    },
    BOOLEAN: {
        name: 'BOOLEAN',
        attribute: '',
        property: {
            message: 'The {attribute} must a boolean!',
        },
        action: (data) => {
            if (typeof (data.value) == 'boolean') {
                return;
            } else {
                return invalidMessage(data);
            }
        }
    },
    OBJECT: {
        name: 'OBJECT',
        attribute: '',
        property: {
            message: 'The {attribute} must a object!',
        },
        action: (data) => {
            if (typeof data.value === 'object') {
                return;
            }
            return invalidMessage(data);
        }
    },
    ARRAY: {
        name: 'ARRAY',
        attribute: '',
        property: {
            message: 'The {attribute} must a object!',
        },
        action: (data) => {
            if (typeof data.value === 'object') {
                hasLength = data.value.length;
                if (hasLength !== undefined) return;
            }
            return invalidMessage(data);
        }
    },
    REQUIRED: {
        name: 'REQUIRED',
        attribute: '',
        property: {
            message: 'The {attribute} is required.',
        },
        action: (data) => {
            if (data.value === undefined || data.value === null) {
                return invalidMessage(data);
            }
            return;
        }
    },
    START_WITH: {
        name: 'START_WITH',
        attribute: '',
        property: {
            value: "",
            message: `The {attribute} must started with "{property.value}"`,
        },
        action: (data) => {
            try {
                value = data.value.split(" ");
                if (value[0] == data.property.value) {
                    return;
                }
                return invalidMessage(data);
            } catch (e) {
                return invalidMessage(data);
            }
        }
    },
    EQUAL_WITH: {
        name: 'EQUAL_WITH',
        attribute: '',
        property: {
            targetAttribute: '',
            message: 'The {attribute} must equal with {property.targetAttribute}',
        },
        action: (data) => {
            if (data.value === data.property.targetAttributeValue) {
                return;
            }
            return invalidMessage(data);
        }
    },
    GREATER_THAN: {
        ATTRIBUTE : {
            name: 'GREATER_THAN.ATTRIBUTE',
            attribute: '',
            property: {
                targetAttribute: '',
                targetAttributeValue: '',
                message: 'The {attribute} must greather than {property.targetAttribute}',
            },
            action: (data) => {
                try {
                    if (typeof data.value === 'number' && typeof data.property.targetAttributeValue === 'number') {
                        if (data.value > data.property.targetAttributeValue) {
                            return;
                        }
                    }
                    return invalidMessage(data);
                } catch (error) {
                    return invalidMessage(error);
                }
            }
        }
    },
};

module.exports = TYPE_VALIDATOR;