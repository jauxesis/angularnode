import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostsService {

	n:number = 0;
  	constructor(private http: Http) { }

	getAllPosts() {
	    return this.http.get('/api/posts')
	      .map(res => res.json());
  	}

  	incr(){
  		setInterval(()=>{
  			this.n = this.n + 1;
  		},2000);
  		return this.n;
  	}
}
