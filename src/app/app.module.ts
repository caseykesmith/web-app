/** Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

/** Environment Configuration */

/** Main Component */
import { WebAppComponent } from './web-app.component';

/** Not Found Component */
import { NotFoundComponent } from './not-found/not-found.component';

/** Custom Modules */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SettingsModule } from './settings/settings.module';
import { NavigationModule } from './navigation/navigation.module';
import { ClientsModule } from './clients/clients.module';
import { GroupsModule } from './groups/groups.module';
import { CentersModule } from './centers/centers.module';
import { AccountingModule } from './accounting/accounting.module';
import { SystemModule } from './system/system.module';
import { ProductsModule } from './products/products.module';
import { OrganizationModule } from './organization/organization.module';
import { TemplatesModule } from './templates/templates.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { SearchModule } from './search/search.module';
import { NotificationsModule } from './notifications/notifications.module';
import { CollectionsModule } from './collections/collections.module';
import { ProfileModule } from './profile/profile.module';
import { TasksModule } from './tasks/tasks.module';
import { ConfigurationWizardModule } from './configuration-wizard/configuration-wizard.module';
import { PortalModule } from '@angular/cdk/portal';

/** Main Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { TranslateModule, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    // Remove the 'labels.catalogs.' prefix and return the fallback value
    return params.key.replace('labels.catalogs.', '');
  }
}

/**
 * App Module
 *
 * Core module and all feature modules should be imported here in proper order.
 */

@NgModule({
  declarations: [
    WebAppComponent,
    NotFoundComponent
  ],
  bootstrap: [WebAppComponent],
  imports: [
    TranslateModule.forRoot({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule,
    CoreModule,
    HomeModule,
    LoginModule,
    ProfileModule,
    SettingsModule,
    NavigationModule,
    ClientsModule,
    ReportsModule,
    GroupsModule,
    CentersModule,
    AccountingModule,
    SystemModule,
    ProductsModule,
    OrganizationModule,
    TemplatesModule,
    UsersModule,
    NotificationsModule,
    SearchModule,
    CollectionsModule,
    TasksModule,
    ConfigurationWizardModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe,
    provideHttpClient(withInterceptorsFromDi()),
    provideTranslateHttpLoader({ prefix: '/assets/translations/', suffix: '.json', useHttpBackend: true })
  ]
})
export class AppModule {}
