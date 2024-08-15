class SVG {
    constructor(message, color) {
        this.shapeElement = ''
        this.textElement = ""
        this.textColor = color
        this.text = message
    }

    setText() {
        if (this.text.length > 3) {
            throw new Error("SVG text should be 3 characters long")
        }

        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    setShape(shapeCode){
        this.shapeElement = shapeCode
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
        ${this.shapeElement}
        
        ${this.textElement}
        
        </svg>`;
        
    }
}

module.exports = SVG;