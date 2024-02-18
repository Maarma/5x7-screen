
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
        var score = 0;
        const homeScore = document.getElementById("homeScore");
        setInterval(function()
        {
            score = homeScore.innerHTML;
            console.log(score);
        }, 1000);
        
        const coordinates = [];

        // ja siis panna zero vöörtusesse dictionarist vastava nr väärtus
        let zero = [14, 17, 17, 15, 1, 17, 14];
       
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