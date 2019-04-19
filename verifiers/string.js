function maxLength(len) {
    return field => field.length > len ? `{field} field is too long.  '${field}' is ${field.length} ${field.length === 1 ? 'character' : 'characters'} long but should be shorter than ${len + 1} ${len === 1 ? 'character' : 'characters'}` : undefined
}

function minLength(len) {
    return field => field.length < len ? `{field} field is too short.  '${field}' is ${field.length} ${field.length === 1 ? 'character' : 'characters'} long but should be longer than ${len + 1} ${len === 1 ? 'character' : 'characters'}` : undefined
}

module.exports = {
    minLength, maxLength
}