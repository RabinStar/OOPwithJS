console.log('Hello OOP!!!')

class Shoe {
    // Props
    constructor(name,type,size,price,quality){
        this.propsList =[
          this.name = name,
          this.type = type,
          this.size = size,
          this.price = price,
          this.quality = quality
        ]
        this.props = {
            "Brand Name": this.name,
            "Gender": this.type,
            "Size": this.size,
            "Price": this.price,
            "Quality": this.quality,
        }
    //    this.propsList = propsList
    }

    // Methods:
    disPlayShoeInfo(){
        // console.log(propsList)
        console.log(this.propsList)
        console.log(this.props)

        // From Array
        this.propsList.forEach(prop=>console.log(prop))

        // From Object
            // Way_1:
            console.log('\nThis result by for...in()')
            for (let k in this.props){
                console.log(`${k}:${this.props[k]}`)
            }
            // Way_2
            console.log('\nThis result by forEach()')
            Object.entries(this.props).forEach(([k,v])=>{
                console.log(`${k}:${v}`)
            })
    }
}

// Object Creation:
shoe_1 = new Shoe('Dior','Female','7','550Tk.','Primeum')
shoe_2 = new Shoe('Dior','Female','7','450Tk.','Standard')

// Object Calling
shoe_1.disPlayShoeInfo()
shoe_2.disPlayShoeInfo()