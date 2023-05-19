import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-details-part',
  templateUrl: './details-part.component.html',
  styleUrls: ['./details-part.component.sass']
})
export class DetailsPartComponent implements OnInit {
  data: any;
  id: any;

  constructor(private route: ActivatedRoute, private api: ServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne() {
    this.api.getOne(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

}