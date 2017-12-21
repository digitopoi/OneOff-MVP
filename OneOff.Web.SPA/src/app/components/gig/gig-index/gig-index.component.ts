import { Gig } from '../../../models/Gig';
import { Component, OnInit } from '@angular/core';
import { GigsService } from '../../../services/gigs.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-gig-index',
  templateUrl: './gig-index.component.html',
  styleUrls: ['./gig-index.component.css']
})
export class GigIndexComponent implements OnInit {

  gigs: Gig[];
  columnNames = ['Date', 'Venue', 'City', 'State', 'Zip', 'buttons'];
  dataSource: GigDataSource | null;

  constructor(private _gigService: GigsService) { }

  ngOnInit() {
    this._gigService.getGigs().subscribe((gigs: Gig[]) => {
      this.dataSource = new GigDataSource(gigs);
    });
  }

}

export class GigDataSource extends DataSource<any> {

  constructor(private gigsData: Gig[]) {
    super();
  }

  connect(): Observable<Gig[]> {
    return Observable.of(this.gigsData);
  }

  disconnect() { }
}
