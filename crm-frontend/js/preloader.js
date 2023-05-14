// IMPORT // "svg (Icons)"
import { svgIcons } from './svg.js'

export const newPreloader = () => {
    const preloaderBlock = document.createElement('div')
    const preloaderBlockCircle = document.createElement('span')

    preloaderBlock.classList.add('clients__preloader')
    // preloaderBlockCircle.classList.add('preloader__spinner')
    preloaderBlockCircle.id = 'preloader'
    preloaderBlockCircle.innerHTML = svgIcons.tableSpinnerIcon

    preloaderBlock.append(preloaderBlockCircle)

    return preloaderBlock
}