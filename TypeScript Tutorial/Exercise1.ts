class person {
    private firstName: string = "Kombe";
    private lastName: string = "Molinga";
    private Telephone: number = 671248988;
    private isMarried: boolean = false;

    private value1: number;
    private value2: number;

    add () {
        this.value1 + this.value2;
    }

    substract () {
        this.value1 - this.value2;
    }

    divide () {
        this.value1 / this.value2;
    }

    multiply () {
        this.value1 * this.value2;
    }
}

 class operator extends person {
     constructor() {
         super()
         this.add;
         this.substract;
         this.divide;
         this.multiply;
     }
 }
