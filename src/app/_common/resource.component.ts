import { Input, Output, EventEmitter } from "@angular/core";

export abstract class Resource {
    /**
   * data object to be displayed
   */
    @Input()
    data: any = {};

    /**
     * type of resource to be handle in LikeList screen
     */
    type: String = '';
    /**
     * resource to be handle in LikeList screen
     */
    resource: String = '';

    @Output()
    likeChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

    constructor() {
        this.setType();
        this.setResource();
    }

    ngOnInit() {
    }

    /**
     *  Method to be implemented to force resource type definition
     *  Ex.: this.type = 'SOME_VALUE';
     */
    abstract setType();

    /**
     *  Method to be implemented to force resource definition
     *  Ex.: this.resource = 'SOME_VALUE';
     */
    abstract setResource();

    onLikeChange() {
        this.likeChange.emit(true);
    }
}