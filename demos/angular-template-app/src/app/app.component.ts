import { NgModule, Component, ViewChild, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { List, Service } from "./app.service";
import {
  DxDrawerComponent,
  DxDrawerModule,
  DxListModule,
  DxRadioGroupModule,
  DxToolbarModule
} from "devextreme-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service],
  preserveWhitespaces: true
})
export class AppComponent {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  navigation: List[];
  text: string;
  elementAttr: any;

  constructor(service: Service) {
    this.text = service.getContent();
    this.navigation = service.getNavigationList();
  }

  toolbarContent = [
    {
      widget: "dxButton",
      location: "before",
      options: {
        icon: "menu",
        onClick: () => this.drawer.instance.toggle()
      }
    }
  ];
}

@NgModule({
  imports: [
    BrowserModule,
    DxDrawerModule,
    DxListModule,
    DxRadioGroupModule,
    DxToolbarModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
