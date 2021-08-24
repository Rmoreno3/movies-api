/* eslint-disable no-unreachable */
function buildsMessage(entity, action) {
  switch (action) {
    case 'create':
      return `${entity} ${action}d`;
      break;

    case 'list':
      return `${entity}s ${action}ed`;
      break;

    default:
      break;
  }
}

module.exports = buildsMessage;
