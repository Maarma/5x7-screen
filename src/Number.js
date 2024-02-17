class Number {

    coordinates = []
    
    getCoordinates ()
    {

        const coordinates = []
        let zero = [14, 17, 17, 17, 17, 17, 14];
        let testNumbers = [16, 8, 4, 2, 1]

        for (let i = 0; i < 7; i++)
        {
            let x = zero[i];
            for (let j = 0; j < 5; j++)
            {
                if (x >= testNumbers[j])
                {
                    x = x - testNumbers[j];
                    coordinates.push(i + '-' + j);
                }
            }
        }
        return coordinates;
        //console.log(this.coordinates)
        //return this.coordinates;
    }
}

export { Number }