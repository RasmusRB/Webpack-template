new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        inputString: "",
        outputString: ""
    },
    methods: {
        toUpper() {
            console.log(this.inputString)
            this.outputString = this.inputString.toUpperCase()
        },
        toLower(){
            console.log(this.inputString)
            this.outputString = this.inputString.toLowerCase()
        },
        stringLength(){
            console.log(this.inputString)
            this.outputString = this.inputString.length
        },
        clear(){
            console.log(this.inputString)
            this.outputString = ""
        }
    }
})