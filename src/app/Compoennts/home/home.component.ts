import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userNameKey } from 'src/app/constats/application.constants';
import { SessionService } from 'src/app/services/session.service';
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
  constructor(
    private youtubeService: YoutubeService,
    private router: Router,
    private session: SessionService
  ) {}

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

  handleLogout() {
    this.session.removeFromoSession(userNameKey);
    this.router.navigate(['/login']);
  }
}
