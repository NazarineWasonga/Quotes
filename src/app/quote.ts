export class Quote {
    showDetails: boolean;
    constructor(public id: number, public name: string, public author: string, public postedBy: string, public postedOn: Date, public thumbsUp: number, public thumbsDown: number) {
        this.showDetails = false;
    }
}


