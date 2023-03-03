import Zip from 'jszip'
import fs from 'fs'

function add(zip: Zip, path: string) {
  if (fs.statSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(sub => {
      add(zip, `${path}/${sub}`)
    })
  } else {
    zip.file(path, fs.readFileSync(path))
  }
}

const zip = Zip()

add(zip, 'index.js')
add(zip, 'www')

zip
  .generateNodeStream({
    compression: 'DEFLATE',
  })
  .pipe(fs.createWriteStream('server.zip'))
