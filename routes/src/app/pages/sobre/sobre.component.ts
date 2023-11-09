import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      res => console.log(res['id'], res['username'])
    )

    this.activateRoute.queryParams.subscribe(
      res => console.log(res)
    )

    // setInterval(() => {
    //   this.router.navigate(['404']);
    //   // Ou use navigateByUrl
    //   // this.router.navigateByUrl('/destino');
    // }, 5000);
  }
}
