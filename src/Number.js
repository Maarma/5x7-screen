class Number {

    
    
    coordinates = [];
    

    getCoordinates () {
       
        let zero = [0,1,2,3,4,5]
        for (let i = 0; i < 6; i++){
            let x = zero[i];
            coordinates.push(i,'-',x);
        }
        return this.coordinates;
    }
}

export { Number }