const _ = require('lodash');
const pathPrefix = '/';


export default function(url) {
    if (_.startsWith(url, '#') || _.startsWith(url, 'http://') || _.startsWith(url, 'https://')) {
        return url;
    }
    const basePath = _.trim(pathPrefix, '/');
    return '/' + _.compact([basePath, _.trimStart(url, '/')]).join('/');
}
