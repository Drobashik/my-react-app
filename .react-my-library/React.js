export class React {
    constructor(pageBody, innerBody) {
        this.pageBody = pageBody;
        this.innerBody = innerBody;
    }

    render() {
        if (this.innerBody()) {
            this.pageBody.innerHTML = this.innerBody();
        }
    }

    static event(element, event, callback) {
        element.addEventListener(event, callback)
    }
    
    static createAsyncEvent(event) {
        const promise = new Promise((resolve, reject) => {
            resolve(event);
            reject("Some errors occured");
        });

        return promise;
    }

}