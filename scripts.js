let computerMove ='';
    let result='';
    let score = JSON.parse(localStorage.getItem('score'));
function cmptMove()
    {
        const randomNumber = Math.random();
        if(randomNumber>=0 && randomNumber<1/3)
        {
            computerMove='Rock';
        }
        else if(randomNumber >= 1/3 && randomNumber <2/3)
        {
            computerMove ='Paper';
        }
        else if(randomNumber >= 2/3 && randomNumber <1)
        {
            computerMove ='Scissors';
        }
        return computerMove;
    }
    
    function playgame(playermove)
    {
        
        cmptMove()
        if(playermove === 'Scissors')
        {
            if(computerMove === 'Rock')
            {
                result='Loss';
            } 
            else if(computerMove === 'Paper')
            {
                result='Win';
            }
            else if(computerMove === 'Scissors')
            {
                result='Tie'
            }
        }
        else if(playermove === 'Paper')
        {
        if(computerMove === 'Rock')
            {
                result='Win';
            } 
            else if(computerMove === 'Paper')
            {
                result='Tie';
            }
            else if(computerMove === 'Scissors')
            {
                result='Loss'
            }
        }
        else if(playermove === 'Rock')
        {
            if(computerMove === 'Rock')
            {
                result='Tie';
            } 
            else if(computerMove === 'Paper')
            {
                result='Loss';
            }
            else if(computerMove === 'Scissors')
            {
                result='Win'
            }
        } 
        if (result === 'Win')
        {
            score.win +=1;
        }
        else if( result === 'Loss')
        {
            score.loss +=1;
        }
        else if(result === 'Tie')
        {
            score.tie +=1;
        }
        localStorage.setItem('score',JSON.stringify(score))
  
    alert(`You picked ${playermove},computer Picked ${computerMove},
    win:${score.win}  loss:${score.loss} tie:${score.tie}`);
    }
function resetScore() {
    score = { win: 0, loss: 0, tie: 0 };
    localStorage.removeItem('score');
    alert("Score reset!");
}
