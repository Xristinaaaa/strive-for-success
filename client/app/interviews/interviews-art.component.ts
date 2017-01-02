import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { InterviewsService } from '../../core/services';

import { Interview } from '../../core/models/interview';

@Component({
    selector: 'app-interviews-art',
    templateUrl: './interviews-art.component.html'
})

export class InterviewsArtComponent implements OnInit{
    public interviews: Interview[];

    constructor(private interviewService: InterviewsService) {
        this.interviews=[];
    }

    ngOnInit() {
        this.interviewService.getInterviews()
            .subscribe(interviews=> this.interviews=interviews);
    }
}