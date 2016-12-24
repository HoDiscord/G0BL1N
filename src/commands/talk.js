
const {prefix} = require('../../config.json');

module.exports = {
  name: ':lips: Общение',
  commands: [
    {
      prefix: '',
      variants: ['/o/', '\\o\\'],
      description: '/o/ \\o\\ /o/ \\o\\',
      usage: '/o/',
      async action(message, args, variant) {
        if(variant === '/o/')
          message.channel.sendMessage('\\o\\');
        else
          message.channel.sendMessage('/o/');
      }
    },
  ],
};
