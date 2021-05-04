import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public checkClickOpenMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  show_menu() {
    if (this.checkClickOpenMenu == true) {
      $("#main_left").css("width", "20%");
      $("#mid_main").css("width", "75%");
      $(".control_menu").css("transform", "translateX(-55px)");
      $('#menu_left_content').addClass('menu_left_open');
      $('#menu_left_content').removeClass('menu_left_close');
      $('#menu_left_content').fadeIn(800, function () {
        // this.checkClickOpenMenu = true;

        $('#menu_left_content').css({
          width: "100%",
          height: "500px"
        });
      });
      setTimeout(() => {
        this.checkClickOpenMenu = false;
      }, 850);
    }
  }

  hide_menu() {
    if (this.checkClickOpenMenu == false) {
      $("#main_left").css("width", "5%");
      $("#mid_main").css("width", "90%");
      $(".control_menu").css("transform", "translateX(0px)");
      $('#menu_left_content').addClass('menu_left_close');
      $('#menu_left_content').removeClass('menu_left_open');
      $('#menu_left_content').fadeOut(800, function () {
        $('#menu_left_content').css({
          width: "0%",
          height: "0px"
        });
      });
      setTimeout(() => {
        this.checkClickOpenMenu = true;
      }, 850);
    }
  }
}
