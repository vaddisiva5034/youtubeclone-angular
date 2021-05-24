import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videos: any;
  selectedVideo: any;
  totalVideos: any;
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {}
  getSerachTerm(serch: any) {
    this.youtubeService.getYoutubeList(serch).subscribe((data: any) => {
      this.totalVideos = data.items;
      this.selectedVideo = data.items[0];
      this.videos = this.totalVideos.filter(
        (video: any) => video !== this.selectedVideo
      );
    });
  }
  onVideoSelect(video: any) {
    this.selectedVideo = video;
    this.videos = this.totalVideos.filter(
      (video: any) => video !== this.selectedVideo
    );
  }
}
