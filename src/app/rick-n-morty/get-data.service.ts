import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  forkJoin,
  switchMap
} from 'rxjs';
import { Character, Episode } from './types';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  chars!: any;
  result: {name: string, image: string}[] = [];

  constructor(private http: HttpClient) {}

  getAllSeasons() {
    return this.http.get < Episode[] > ('https://rickandmortyapi.com/api/episode/2,3,4,5,6')
  }

  getSeason(index: number) {
    // return this.http.get<any>('' + index)
    return this.http.get < Episode[] > ('https://rickandmortyapi.com/api/episode/12,13,14')
  }

  getSeasonsCharactersNames() {
    let linksArr: string[] = [];
    let newArr: any[] = [];
    this.http.get <Episode> (`https://rickandmortyapi.com/api/episode/2`).subscribe(res => {
      res.characters.map((charLink: string) => {
        linksArr.push(charLink);
      });
      linksArr.map((link: string) => {
        this.http.get<Character>(link).subscribe((y: Character) => {
          newArr.push({name: y['name'], image: y['image']})
        })
        this.result = newArr;
      })
    });
    return this.result;
  }

  // getSeasonsCharactersNames(id: number) {
  //   let charactersArr: any[] = [];
  //   let odpo = '';
  //   this.http.get < any > (`https://rickandmortyapi.com/api/episode/2`).subscribe(res => {
  //     res.characters.map((oneLink: any) => odpo = oneLink);
  //       this.http.get < any > (odpo).subscribe((res2: any) => {
  //         charactersArr.push(res2.name);
  //       })
  //   });
  //   return charactersArr;
  // }
}
