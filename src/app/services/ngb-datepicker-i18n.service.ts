// import { TranslationWidth } from '@angular/common';
// import { Injectable } from '@angular/core';
// import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

// const WEEKDAYS_LONG = [
//   'Lundi',
//   'Mardi',
//   'Mercredi',
//   'Jeudi',
//   'Vendredi',
//   'Samedi',
//   'Dimanche',
// ];
// const MONTHS_SHORT = [
//   'Janv',
//   'Févr',
//   'Mars',
//   'Avr',
//   'Mai',
//   'Juin',
//   'Juil',
//   'Août',
//   'Sept',
//   'Oct',
//   'Nov',
//   'Déc',
// ];
// const MONTHS_FULL = [
//   'Janvier',
//   'Février',
//   'Mars',
//   'Avril',
//   'Mai',
//   'Juin',
//   'Juillet',
//   'Août',
//   'Septembre',
//   'Octobre',
//   'Novembre',
//   'Décembre',
// ];

// @Injectable()
// export class FrenchDatepickerI18n extends NgbDatepickerI18n {
//   getWeekdayLabel(weekday: number, width?: TranslationWidth): string {
//     if (width === 'short') {
//       return WEEKDAYS_LONG[weekday - 1].substring(0, 3); // Use only the first three letters for short names
//     }
//     return WEEKDAYS_LONG[weekday - 1];
//   }

//   getMonthShortName(month: number): string {
//     return MONTHS_SHORT[month - 1];
//   }

//   getMonthFullName(month: number): string {
//     return MONTHS_FULL[month - 1];
//   }

//   getDayAriaLabel(date: NgbDateStruct): string {
//     return `Le ${date.day} ${MONTHS_FULL[date.month - 1]} ${date.year}`;
//   }
// }
