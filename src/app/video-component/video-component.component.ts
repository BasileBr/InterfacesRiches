import { Component, OnInit, OnDestroy} from '@angular/core';
import { UnServiceService } from '../un-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css']
})
export class VideoComponentComponent implements OnInit, OnDestroy {

  messages: Subscription;

	url_mp4 = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream_512kb.mp4"
	url_ogg = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream.ogv"
	time = 0

  constructor(private service:UnServiceService) { }

  ngOnInit() {
    this.messages = this.service.messages.subscribe(
      message => {
        //on consomme le message
        console.log(message);
    });
  }

  ngOnDestroy(){
    this.messages.unsubscribe()
  }


  onTimeUpdate(player) {
    console.log(player.currentTime)
  }

  onChapterChange(pos:number){
	console.log(pos);
	this.time = pos
	}
}
