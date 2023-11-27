// Tudo que eu estou colocando de entrada estou ENCAMINHANDO para um saída.
// process.stdin
//   .pipe(process.stdout)

  import { Readable } from 'node:stream'

  class OneToHundredStream extends Readable {
    index = 1
    _read() {
      const i = this.index++

      //Consigo trabalhar com esses dados antes de eles estarem completos
      setTimeout(() => {
        if(i > 100) {
          // push() => Vai fornecer informações para quem está lendo ela
          this.push(null)
        } else {
          const buf = Buffer.from(String(i))
          this.push(buf)
        }
      }, 1000)
    }
  }

  new OneToHundredStream().pipe(process.stdout)