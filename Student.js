class Student {
    name
    weight
    hight
    age     

    constructor(a, b,c,d ) {
        this.hight = a
        this.weight = b
        this.age = c
        this.name = d
    }
}

const newStudent = new Student(180,100,18,'Maks')
console.log(newStudent)
