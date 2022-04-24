import {
  Component,
  OnInit
} from '@angular/core';
import {
  GetDataService
} from './get-data.service';

@Component({
  selector: 'app-rick-n-morty',
  templateUrl: './rick-n-morty.component.html',
  styleUrls: ['./rick-n-morty.component.scss']
})
export class RickNMortyComponent implements OnInit {
  allSeasons: [] = [];
  allCharacters: any[] = [];

  dataFromServ: any;
  listOfEpisodes!: [];
  isListVisible = false;
  lastClickedNavId!: number;

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.apiData();
    this.getAllSeasons();
    this.getAllCharacters();
  }

  getAllSeasons() {
    this.getData.getAllSeasons().subscribe((data) => {
      this.allSeasons = data;
      // console.log(this.allSeasons)
    })
  }

  getAllCharacters() {
    this.getData.getAllCharacters().subscribe((data) => {
      this.allCharacters = data;
      // console.log(this.allCharacters)
    })
  }

  getSpecificSeason(index: number) {
    if(!this.isListVisible) {
      this.isListVisible = true;
    } else if(this.isListVisible && this.lastClickedNavId === index) {
      this.isListVisible = false;
    }

    this.getData.getSeason(index).subscribe((data) => {
      this.listOfEpisodes = data;
    });
    this.lastClickedNavId = index;
    console.log(this.listOfEpisodes);
  }

  getCharactersForListOfEpisodes() {

  }

  apiData() {
    let arr: any[] = [];
    this.getData.getData().subscribe(val => {
      this.dataFromServ = val;
      for (let i = 0; i < 11; i++) {
        arr.push(this.dataFromServ.results[i])
      }
    });
  }
}
