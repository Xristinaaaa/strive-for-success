import { Injectable } from '@angular/core';

import { Interview } from '../models/interview';
import { User } from '../models/user';

@Injectable()
export class InterviewsFactoryService {
    constructor() {}

    createInterview(title: string, imageUrl: string, user: User, category:string, content:string): Interview {
        let interview = new Interview();
        interview.title = title;
        interview.imageUrl = imageUrl;
        interview.user = user;
        interview.category = category;
        interview.content = content;
        interview.createdOn = new Date();

        return interview;
    }
}import { Interview } from '../models/interview';

export class InterviewsFactoryService {
    constructor() {}

    createInterview(title: string, questions: { title: string, answer: string}[]): Interview {
        let interview = new Interview();
        interview.title = title;
        interview.questions = questions;

        return interview;
    }
}
