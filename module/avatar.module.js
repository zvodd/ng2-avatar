import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './component/avatar.component';
// Export module's public API
export { AvatarComponent } from './component/avatar.component';
export var AvatarModule = (function () {
    function AvatarModule() {
    }
    AvatarModule.forRoot = function () {
        return {
            ngModule: AvatarModule,
            providers: []
        };
    };
    AvatarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        AvatarComponent
                    ],
                    declarations: [
                        AvatarComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    AvatarModule.ctorParameters = [];
    return AvatarModule;
}());
//# sourceMappingURL=avatar.module.js.map