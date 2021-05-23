import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { ToastrModule } from 'ngx-toastr';
import { SocketclientService } from 'src/socketclient.service';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule, BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), ButtonsModule,GridModule, GraphQLModule, HttpClientModule],
        providers: [SocketclientService],
})
export class AppModule {


}
