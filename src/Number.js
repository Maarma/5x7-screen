
class Number {
    
    coordinates = []
    
    getCoordinates ()
    {
        var dict = {
            0: [14, 17, 17, 17, 17, 17, 14],
            1: [4, 12, 4, 4, 4, 4, 14],
            2: [14, 17, 1, 2, 4, 8, 31],
            3: [14, 1, 1, 14, 1, 1, 14],
            4: [17, 17, 17, 14, 1 , 1 ,1],
            5: [31, 16, 16, 30, 1, 1, 30],
            6: [14, 16, 16, 30, 17, 17, 14],
            7: [31, 1, 1, 2, 4, 4, 4],
            8: [14, 17, 17, 14, 17, 17, 14],
            9: [14, 17, 17, 15, 1, 17, 14]
        }

        // siit vahelt kätte saada skoor kuidagi
        var hScore = 0;
        const homeScore = document.getElementById("homeScore");
        setInterval(function()
        {
            hScore = homeScore.innerHTML;
            //console.log(hScore);
            let one = hScore % 10;
            let ten = Math.floor(hScore /10 ) % 10;
            console.log(ten);
            console.log(one);
        }, 1000);
        
        const coordinates = [];

        // ja siis panna zero vöörtusesse dictionarist vastava nr väärtus
        let hTens = [14, 17, 1, 2, 4, 8, 31];
        let hOnes = [14, 1, 1, 14, 1, 1, 14];
        let testNumbers = [16, 8, 4, 2, 1]
        // kymneliste kuvamine
        for (let i = 0; i < 7; i++)
        {
            let x = hTens[i];
            for (let j = 0; j < 5; j++)
            {
                if (x >= testNumbers[j])
                {
                    x = x - testNumbers[j];
                    coordinates.push(i + '-' + j);
                }
            }
        }
        // yheliste kuvamine
        for (let i = 0; i < 7; i++)
        {
            let x = hOnes[i];
            for (let j = 0; j < 5; j++)
            {
                if (x >= testNumbers[j])
                {
                    x = x - testNumbers[j];
                    coordinates.push(i + '-' + (j+6));
                }
            }
        }

        return coordinates;
        //console.log(this.coordinates)
        //return this.coordinates;
    }
    
}

export { Number }