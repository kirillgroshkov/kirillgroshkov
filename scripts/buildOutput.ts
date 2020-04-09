/*

yarn tsn buildOutput

 */

import * as boxen from 'boxen'
import * as c from 'chalk'
import * as fs from 'fs-extra'
import { outputTxtPath } from '../src/paths.cnst'

const blocks: Record<string, string>[] = [
  {
    Work: 'https://naturalcycles.com',
    'Open Source': 'https://github.com/NaturalCycles',
  },
  {
    GitHub: 'https://github.com/kirillgroshkov',
    npm: 'https://npmjs.com/org/naturalcycles',
    Twitter: 'https://twitter.com/kirillgroshkov',
    LinkedIn: 'https://linkedin.com/in/kirill-groshkov-2a57437',
  },
  {
    Card: 'npx kirillgroshkov',
  },
]

const lines = _flatten(
  blocks.map(block => {
    return Object.entries(block)
      .map(([k, v]) => {
        const left = c.bold.whiteBright(k.padStart(11))

        const right = v.includes('http') ? c.cyan(v) : c.white(v)

        return [left, right].join(':  ')
      })
      .concat('')
  }),
)

const text = [c.white('Kirill Groshkov'.padStart(29)), '', ...lines.slice(0, -1)].join('\n')

const output = boxen(text, {
  margin: 1,
  padding: 1,
  borderStyle: 'double' as any,
  // borderStyle: 'double' as any,
  borderColor: 'cyan',
  dimBorder: true,
  float: 'left',
  // backgroundColor: 'green',
  align: 'left',
})

fs.ensureFileSync(outputTxtPath)
fs.writeFileSync(outputTxtPath, output, 'utf8')
console.log(`created ${outputTxtPath}`)

function _flatten<T>(arrays: T[][]): T[] {
  // to flat single level array
  return ([] as T[]).concat(...arrays)
}
