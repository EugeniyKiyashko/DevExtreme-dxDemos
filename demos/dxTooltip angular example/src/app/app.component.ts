// import { Inject } from "@angular/core";
// import { DOCUMENT } from "@angular/common";
import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DxTooltipModule, DxTemplateModule } from "devextreme-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  defaultVisible = false;
  withTemplateVisible = false;
  withAnimationVisible = false;
  container = undefined;

  constructor() {
    this.container = document.getElementsByClassName("console");
  }

  toggleDefault() {
    this.defaultVisible = !this.defaultVisible;
  }

  toggleWithTemplate() {
    this.withTemplateVisible = !this.withTemplateVisible;
  }

  toggleWithAnimation() {
    this.withAnimationVisible = !this.withAnimationVisible;
  }

  mouseleave(event) {
    this.container[0].innerText = this.container[0].innerText + "mouseleave  ";
    console.log("mouseleave");
  }

  mouseenter(event) {
    console.log("mouseenter");
    this.container[0].innerText = this.container[0].innerText + "mouseenter  ";
  }

  mouseover(event) {
    console.log("mouseover");
    this.container[0].innerText = this.container[0].innerText + "mouseover  ";
  }

  mouseout(event) {
    console.log("mouseout");
    this.container[0].innerText = this.container[0].innerText + "mouseout  ";
  }
}

@NgModule({
  imports: [BrowserModule, DxTooltipModule, DxTemplateModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
