const fs = require('fs')

function contains(arr, element) {
    var flag = false
    arr.forEach(_element => {
        if(_element===element){
            flag = true
            return
        }
    })
    return flag
}

export function command(command, options) {
    
}