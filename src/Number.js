class Number {

    coordinates = []
    
    getCoordinates () {

        const coordinates = []
        let zero = [0,1,2,3,4,5];

        for (let i = 0; i < 6; i++){
            let x = zero[i];
            console.log(x);
            console.log(i + '-' + x);
            console.log(coordinates)
            coordinates.push(i + '-' + x);
        }
        console.log(coordinates)
        return this.coordinates;
    }
}

export { Number }