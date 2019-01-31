import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css']
})
export class VideoComponentComponent implements OnInit {
	url_mp4 = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream_512kb.mp4"
	url_ogg = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream.ogv"

  constructor() { }

  ngOnInit() {
  }

}