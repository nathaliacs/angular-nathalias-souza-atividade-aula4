import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { ParouimparComponent } from "./parouimpar/parouimpar.component";
import { TabuadaComponent } from "./tabuada/tabuada.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "tabuada", component: TabuadaComponent },
      { path: "parouimpar", component: ParouimparComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    ParouimparComponent,
    TabuadaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
