class Number {

    coordinates = []
    
    getCoordinates ()
    {

        const coordinates = []
        let zero = [14, 17, 17, 17, 17, 17, 14];
        let one = [4, 12, 4, 4, 4, 4, 14];
        let two = [14, 17, 1, 2, 4, 8, 31];
        let tree = [14, 1, 1, 14, 1, 1, 14];
        let four = [17, 17, 17, 14, 1 , 1 ,1];
        let five = [31, 16, 16, 30, 1, 1, 30];
        let six = [14, 16, 16, 30, 17, 17, 14];
        let seven = [31, 1, 1, 2, 4, 4, 4];
        let eight = [14, 17, 17, 14, 17, 17, 14];
        let nine = [14, 17, 17, 15, 1, 17, 14];
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