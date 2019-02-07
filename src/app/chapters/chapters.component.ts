import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})

export class ChaptersComponent implements OnInit {

  chapters:JSON //CHAPITRES
  @Output() onChapter = new EventEmitter<number>()

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/chapters.json',{responseType:'json'}).subscribe(data => {
      console.log(data['Chapters']);
      this.chapters = data['Chapters'];
    });
  }

  onSelect(chapter){
    this.onChapter.emit(chapter.pos)
  }

}
