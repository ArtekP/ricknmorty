import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  GetDataService
} from './get-data.service';
import { Episode } from './types';

@Component({
  selector: 'app-rick-n-morty',
  templateUrl: './rick-n-morty.component.html',
  styleUrls: ['./rick-n-morty.component.scss']
})
export class RickNMortyComponent implements OnInit {
  @Input() spanId: any;

  allSeasons: Episode[] = [];
  listOfEpisodes!: Episode[];
  isListVisible = false;
  lastClickedNavId!: number;
  episodeCharacters!: any[];

  constructor(private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.getAllSeasons();
  }

  getAllSeasons() {
    this.getData.getAllSeasons().subscribe((data) => {
      this.allSeasons = data;
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

    this.getSpecificCharacters()
  }

  getSpecificCharacters() {
    this.episodeCharacters = this.getData.getSeasonsCharactersNames();
  }

}
