export function hasClass(element, className) {
    if (element.classList) {
        return element.classList.contains(className)
    } else {
        return !!(element.className.indexOf(className) > -1)
    }
}

export function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className)
    } else if (!hasClass(element, className)) {
        element.className += ' ' + className
    }
}

export function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className)
    } else if (hasClass(element, className)) {
        let reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        element.className = element.className.replace(reg, ' ')
    }
}