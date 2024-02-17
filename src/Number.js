class Number {

    coordinates = ['0-2', '0-3', '0-4',
        '1-1','1-5',
        '2-1','2-5',
        '3-1','3-5',
        '4-1','4-5',
        '5-1','5-5',
        '6-2','6-3','6-4']

    getCoordinates () {
        console.log(this.coordinates);
        return this.coordinates;
    }
}

export { Number }