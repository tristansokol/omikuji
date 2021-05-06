const {Command, flags} = require('@oclif/command')

class OmikujiCommand extends Command {
  async run() {
    const {flags} = this.parse(OmikujiCommand)
    const blessings = ['大吉', '中吉', '小吉', '吉', '半吉', '末吉', '小吉', '凶', '小凶', '半凶', '末凶', '大凶']
    const descriptions = ['Great blessing',
      'Middle blessing',
      'Small blessing',
      'Blessing',
      'Half-blessing',
      'Ending blessing',
      'Ending small blessing',
      'Curse',
      'Small curse',
      'Half-curse',
      'Ending curse',
      'Great curse']
    const name = flags.name || 'world'
    const rand = Math.floor(Math.random() * blessings.length)
    this.log(`${blessings[rand]} (${descriptions[rand]})`)
  }
}

OmikujiCommand.description = `Describe the command here
...
Extra documentation goes here
`

OmikujiCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = OmikujiCommand
