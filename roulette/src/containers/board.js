import React, {Component} from 'react'
import './board.css'
class Board extends Component{

  state= {
    board: [[3,6,9,12,15,18,21,24,27,30,33,36,"2 to 1"],
    [2,5,8,11,14,17,20,23,26,29,32,35,"2 to 1"]
  ,[1,4,7,10,13,16,19,22,25,28,31,34,"2 to 1"],["1st 12","12nd 12","3rd 12"],
["1st 18","even","red","black","odd","2nd 18"]]
  }


  render(){
    return(
      <table>
      {this.state.board.map((row,i)=>{
        return <tr>
        {row.map((square)=>{
          if (i === 3){
           return <td colSpan={4}>{square}</td>
         } else if (i === 4) {
           return <td colSpan={2}>{square}</td>
          } else {
            return <td>{square}</td>
         }
          // return <td>
          // {square}</td>
        })}</tr>})}

      </table>
    )
  }

}

export default Board
