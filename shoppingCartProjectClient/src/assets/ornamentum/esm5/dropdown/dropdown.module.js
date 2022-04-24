/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownViewComponent } from './components/dropdown-view/dropdown-view.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { DropdownOptionsComponent } from './components/dropdown-options/dropdown-options.component';
import { DROPDOWN_CONFIG } from './services/dropdown-config.service';
import { UtilityModule } from '../utility/utility.module';
/** @type {?} */
var COMPONENTS = [DropdownComponent, DropdownViewComponent, DropdownFilterComponent, DropdownOptionsComponent];
/**
 * Module representing dropdown component.
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * Set module root configuration overrides.
     * @param dropdownConfig Dropdown configuration object.
     * @return Module with custom providers.
     */
    /**
     * Set module root configuration overrides.
     * @param {?=} dropdownConfig Dropdown configuration object.
     * @return {?} Module with custom providers.
     */
    DropdownModule.forRoot = /**
     * Set module root configuration overrides.
     * @param {?=} dropdownConfig Dropdown configuration object.
     * @return {?} Module with custom providers.
     */
    function (dropdownConfig) {
        return {
            ngModule: DropdownModule,
            providers: [
                {
                    provide: DROPDOWN_CONFIG,
                    useValue: dropdownConfig
                }
            ]
        };
    };
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, UtilityModule.forRoot()],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: [DropdownComponent],
                    entryComponents: [DropdownViewComponent]
                },] }
    ];
    return DropdownModule;
}());
export { DropdownModule };
export { DropdownComponent } from './components/dropdown/dropdown.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3JuYW1lbnR1bS8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFFcEQsVUFBVSxHQUFHLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLENBQUM7Ozs7QUFLaEg7SUFBQTtJQXVCQSxDQUFDO0lBaEJDOzs7O09BSUc7Ozs7OztJQUNJLHNCQUFPOzs7OztJQUFkLFVBQWUsY0FBK0I7UUFDNUMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDN0QsWUFBWSxtQkFBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM1QixlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDekM7O0lBa0JELHFCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FqQlksY0FBYztBQTZCM0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2Ryb3Bkb3duLWNvbmZpZy5tb2RlbCc7XG5cbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93blZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24tdmlldy9kcm9wZG93bi12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bi1maWx0ZXIvZHJvcGRvd24tZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24tb3B0aW9ucy9kcm9wZG93bi1vcHRpb25zLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERST1BET1dOX0NPTkZJRyB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24tY29uZmlnLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBVdGlsaXR5TW9kdWxlIH0gZnJvbSAnLi4vdXRpbGl0eS91dGlsaXR5Lm1vZHVsZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRHJvcGRvd25Db21wb25lbnQsIERyb3Bkb3duVmlld0NvbXBvbmVudCwgRHJvcGRvd25GaWx0ZXJDb21wb25lbnQsIERyb3Bkb3duT3B0aW9uc0NvbXBvbmVudF07XG5cbi8qKlxuICogTW9kdWxlIHJlcHJlc2VudGluZyBkcm9wZG93biBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBVdGlsaXR5TW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbRHJvcGRvd25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEcm9wZG93blZpZXdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTW9kdWxlIHtcbiAgLyoqXG4gICAqIFNldCBtb2R1bGUgcm9vdCBjb25maWd1cmF0aW9uIG92ZXJyaWRlcy5cbiAgICogQHBhcmFtIGRyb3Bkb3duQ29uZmlnIERyb3Bkb3duIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgKiBAcmV0dXJuIE1vZHVsZSB3aXRoIGN1c3RvbSBwcm92aWRlcnMuXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChkcm9wZG93bkNvbmZpZz86IERyb3Bkb3duQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEcm9wZG93bk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRFJPUERPV05fQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBkcm9wZG93bkNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBEcm9wZG93blRyYW5zbGF0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2Ryb3Bkb3duLXRyYW5zbGF0aW9ucy5tb2RlbCc7XG5leHBvcnQgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gJy4vbW9kZWxzL2Ryb3Bkb3duLW9wdGlvbi5tb2RlbCc7XG5leHBvcnQgeyBEcm9wZG93blJlcXVlc3RQYXJhbXMgfSBmcm9tICcuL21vZGVscy9kcm9wZG93bi1yZXF1ZXN0LXBhcmFtcy5tb2RlbCc7XG5leHBvcnQgeyBEcm9wZG93bkZpbHRlciB9IGZyb20gJy4vbW9kZWxzL2Ryb3Bkb3duLWZpbHRlci5tb2RlbCc7XG5leHBvcnQgeyBEcm9wZG93bkRhdGFCaW5kQ2FsbGJhY2sgfSBmcm9tICcuL21vZGVscy9kcm9wZG93bi1kYXRhLWJpbmQtY2FsbGJhY2subW9kZWwnO1xuZXhwb3J0IHsgRHJvcGRvd25RdWVyeVJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL2Ryb3Bkb3duLXF1ZXJ5LXJlc3VsdC5tb2RlbCc7XG5leHBvcnQgeyBEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2Ryb3Bkb3duLWNvbmZpZy5tb2RlbCc7XG5cbmV4cG9ydCB7IERyb3Bkb3duU2VsZWN0TW9kZSB9IGZyb20gJy4vbW9kZWxzL2Ryb3Bkb3duLXNlbGVjdC1tb2RlLm1vZGVsJztcblxuZXhwb3J0IHsgRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcbiJdfQ==