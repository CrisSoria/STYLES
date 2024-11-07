import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-de-estrellas',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './campo-de-estrellas.component.html',
  styleUrl: './campo-de-estrellas.component.css',
})
export class CampoDeEstrellasComponent implements OnInit {
  space1Styles: Record<string, string> = {};
  space2Styles: Record<string, string> = {};
  space3Styles: Record<string, string> = {};
  COLORS = ['#fff2', '#fff4', '#fff7', '#fffc'];

  duration = {
    space1: '50s',
    space2: '50s',
    space3: '50s',
  };

  generateSpaceLayer(totalStars: number, size: number) {
    const layer = [];
    for (let i = 0; i < totalStars; i++) {
      const color = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 white`);
    }

    return {
      width: size + 'px',
      height: size + 'px',
      'box-shadow': layer.join(','),
    };
  }

  ngOnInit(): void {
    this.space1Styles = this.generateSpaceLayer(200, 1);
    this.duration.space1 = '25s';
    this.space2Styles = this.generateSpaceLayer(100, 2);
    this.duration.space2 = '20s';
    this.space3Styles = this.generateSpaceLayer(25, 4);
    this.duration.space3 = '15s';
  }
}
