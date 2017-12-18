import { Component, OnInit, Input, EventEmitter, ElementRef, Renderer, Renderer2, NgZone, Output } from '@angular/core';

@Component({
    selector: 'app-shrinking-header',
    template: '<ng-content></ng-content>'
})
export class ShrinkingHeaderComponent implements OnInit {
    @Input('headerHeight') headerHeight: any;
    @Output() collapsed = new EventEmitter<boolean>();
    isCollapsed: boolean = false;
    constructor(
        private _element: ElementRef,
        private _renderer: Renderer,
        private _renderer2: Renderer2,
        private _zone: NgZone
    ) { }

    ngOnInit() {
    }
    ngOnChanges() {
        let element = document.querySelector('mat-sidenav-content');
        this._renderer2.listen(element, 'scroll', (event) => {
            this.resizeHeader(event);
        });
    }

    ngAfterViewInit() {
        this._renderer.setElementStyle(this._element.nativeElement, 'height', this.headerHeight + 'px');
    }

    resizeHeader(ev) {
        let adjustedHeight = this.headerHeight - ev.currentTarget.scrollTop;

        if (adjustedHeight <= 150) {

            if (!this.isCollapsed) {
                this.isCollapsed = true;

                this._zone.run(() => {
                    this.collapsed.emit(true);
                });
            }
        }

        if (adjustedHeight > 150) {

            if (this.isCollapsed) {
                this.isCollapsed = false;
                this._zone.run(() => {
                    this.collapsed.emit(false);
                });
            }

        }
        this._renderer.setElementStyle(this._element.nativeElement, 'height', adjustedHeight + 'px');
    }

}
