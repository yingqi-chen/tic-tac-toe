import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[];
  winner: string;
  xIsNext: boolean;

  constructor() { }

  ngOnInit(): void {
    
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext? "X" : "O"
  }

  handleClick() {
    console.log('click')
  }

}
