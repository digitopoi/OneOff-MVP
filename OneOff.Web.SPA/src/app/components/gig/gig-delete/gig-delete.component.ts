import { Gig } from '../../../models/Gig';
import { ActivatedRoute, Router } from '@angular/router';
import { GigsService } from '../../../services/gigs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gig-delete',
  templateUrl: './gig-delete.component.html',
  styleUrls: ['./gig-delete.component.css']
})
export class GigDeleteComponent implements OnInit {

  public gig: Gig;

  constructor(private _gigService: GigsService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._gigService.getGig(p.get('gigId')).subscribe((singleGig: Gig) => {
        this.gig = singleGig;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._gigService.deleteGig(this.gig.GigId).subscribe(() => {
      this._router.navigate(['/gigs']);
    });
  }

}
