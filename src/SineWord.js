class SineWord {
  constructor(canvas) {
    this.canvas = canvas
    this.inputEl = document.getElementById('input')
    this.ctx = this.canvas.getContext('2d')

    this.canvasHeight = this.canvas.height
    this.canvasWidth = this.canvas.width

    this.x = 0
    this.y = 0

    this.offsetX = 0
    this.offsetY = this.canvasHeight / 2

    this.scale = 7

    this.paint()

    this.inputEl.addEventListener('input', () => {
      this.paint()
    })
  }

  paint() {
    this.clearCanvas()
    // this.fillGrid()
    this.draw()
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  }

  draw() {
    this.ctx.font = '14px monospace'
    this.ctx.fillStyle = '#1d69bb'

    this.inputValue = this.inputEl.value
    this.inputValueLength = this.inputValue.length

    for (let i = 0; i < this.inputValueLength; i++) {
      const [x, y] = this.fSin(i * this.scale)
      const letter = this.inputValue[i]
      let formattedLetter = letter === ' ' ? '_' : letter
      this.ctx.fillText(formattedLetter, x, y)
    }
  }

  fillGrid() {
    this.ctx.fillStyle = '#80bdff'
    this.ctx.fillRect(0, this.offsetY, this.canvasWidth, 1)
    this.ctx.fillRect(this.offsetX, 0, 1, this.canvasHeight)
  }

  fSin(step) {
    const amplitude = 130
    const frequency = 30
    const x = step * 2 + this.offsetX
    const y = -amplitude * Math.sin(step / frequency) + this.offsetY
    return [x, y]
  }
}

export default SineWord
