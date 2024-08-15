// import inquirer from 'inquirer'
// import fs from 'fs'
// import { Triangle, Square } from './lib/shapes.js'
// import SVG from './lib/svg.js'

const inquirer = require("inquirer")
const fs = require("fs")
const { Triangle, Square, Circle } = require("./lib/shapes.js")
const SVG = require("./lib/svg.js")

const questions = [

    { type: 'input', name: 'text', message: 'What is the text?' },
    { type: 'input', name: 'textColor', message: 'What is the text color?' },
    { type: 'list', name: 'shape', message: 'What is the shape?', choices: ['triangle', 'square', 'circle'] },
    { type: 'input', name: 'shapeColor', message: 'What is the shape color?' },
]
inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        let userShape;
        let userSVG;
        switch (answers.shape
        ) {
            case 'triangle':
                userShape = new Triangle()
                userShape.setColor(answers.shapeColor)
                userSVG = new SVG(answers.text, answers.textColor)
                userSVG.setText()
                userSVG.setShape(userShape.render())
                console.log(userSVG.render(),userSVG)
                svgOutput("LOGOOUTPUT.svg",userSVG.render())
                break;
            case 'square':
                userShape = new Square()
                userShape.setColor(answers.shapeColor)
                userSVG = new SVG(answers.text, answers.textColor)
                userSVG.setText()
                userSVG.setShape(userShape.render())
                console.log(userSVG.render(),userSVG)
                svgOutput("LOGOOUTPUT.svg",userSVG.render())
                break;
            case 'circle':
                userShape = new Circle()
                userShape.setColor(answers.shapeColor)
                userSVG = new SVG(answers.text, answers.textColor)
                userSVG.setText()
                userSVG.setShape(userShape.render())
                console.log(userSVG.render(),userSVG)
                svgOutput("LOGOOUTPUT.svg",userSVG.render())
                break;
        }
    })
    .catch((error) => {
        console.log(error)
    });



function svgOutput(filename, fileRender) {
    fs.writeFile(filename,fileRender, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}