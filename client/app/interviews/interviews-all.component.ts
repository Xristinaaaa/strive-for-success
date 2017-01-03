import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { InterviewsService } from '../../core/services';
import { InterviewsFilterPipe } from '../../core/pipes'

import { Interview } from '../../core/models/interview';

@Component({
    selector: 'app-interviews-all',
    templateUrl: './interviews-all.component.html',
    styleUrls:['interviews-all.component.css']
})

export class InterviewsAllComponent implements OnInit{
    public interviews: Interview[];

    constructor(private interviewService: InterviewsService, private filterPipe: InterviewsFilterPipe) {
        this.interviews=[];
    }

    ngOnInit() {
        this.interviewService.getInterviews()
            .subscribe(interviews=> this.interviews=interviews);
    }

    onSearch(option: string){
        this.filterPipe.transform(this.interviews, option)
    }
}

