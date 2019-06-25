const singles = require("../data/singles.js")

module.exports = function (app) {

    app.get("/api/singles", function (req, res) {
        return res.json(singles);
    });

    app.post("/api/singles", function (req, res) {
        
        let userProfile = req.body // Grab new user profile from express 
        let compatibilityScoresArr = [];

        for (let i = 0; i<singles.length; i++) {

            let potentialMatchAnswers = singles[i].surveyAnswers;
            let userAnswers = userProfile.surveyAnswers;
            let comparedAnswers = [];

            for (let j=0; j<userAnswers.length; j++) {
                // Compare the absolute value difference between each survey answer
                let difference = Math.abs(parseInt(userAnswers[j]) - parseInt(potentialMatchAnswers[j]))
                comparedAnswers.push(difference);
            }
            
            let compatibilityScore = comparedAnswers.reduce((a, b) => a + b, 0) // Add all numbers in the comparedAnswers array to determine compatibility score
            console.log("compatibilityScore: " + compatibilityScore + " - for " + singles[i].name)
            compatibilityScoresArr.push(compatibilityScore); // Store the score in an array for later access
        }

        // By now, a compatibility score is generated for each profile. 
        // So, now we find the index position of the lowest compatibility score (this is golf; the lower the score, the more compatible)
        // Loop through all the compatibility scores to check which is lowest
        let index = 0;
        let temp = compatibilityScoresArr[0];
        for (let k = 0; k<compatibilityScoresArr.length; k++) {
            if (compatibilityScoresArr[k] < temp) {
                temp = compatibilityScoresArr[k];
                index = k;
            }
        }

        lowestCompatibilityScore = temp;
        console.log("lowestCompatibilityScore: " + lowestCompatibilityScore);
        singles.push(userProfile); // Store new profile, AFTER checking for a match. Otherwise this will be the match
        return res.json(singles[index]) // This must be the matching profile (note this will resolve in favor of a match later in the singles array if there is a tie
        
    })

}