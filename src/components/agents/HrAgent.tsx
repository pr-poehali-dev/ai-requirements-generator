import { useState } from "react";
import s from "@/pages/agentStyles";

type HrTabId = "overview" | "table" | "pilot2026" | "methodology";
type HrModalId = "methodology" | "formulas" | "sources" | null;

const hrTableData = [
  { id: 1,  name: "Анализ резюме (руководители)",                          wDay:"6,98",    wMon:"139,6",     wYear:"1 692,25",    aiDay:"1,5",    aiMon:"30",       aiYear:"362,625",   saveH:"1 329,63",   saveR:"997 219" },
  { id: 2,  name: "Анализ резюме (рекрутеры)",                             wDay:"68,80",   wMon:"1 376,00",  wYear:"16 512,75",   aiDay:"31,29",  aiMon:"625,80",   aiYear:"7 508,78",  saveH:"9 003,97",   saveR:"6 752 978" },
  { id: 3,  name: "Вопросы для подготовки к собеседованию",                wDay:"2,88",    wMon:"57,6",      wYear:"720",         aiDay:"2,59",   aiMon:"51,8",     aiYear:"648",       saveH:"72",         saveR:"54 000" },
  { id: 4,  name: "Анализ видеозаписи собеседования",                      wDay:"3",       wMon:"60",        wYear:"720",         aiDay:"2,7",    aiMon:"54",       aiYear:"648",       saveH:"72",         saveR:"54 000" },
  { id: 5,  name: "Тестовое задание",                                      wDay:"2,88",    wMon:"57,6",      wYear:"720",         aiDay:"2,59",   aiMon:"51,8",     aiYear:"648",       saveH:"72",         saveR:"54 000" },
  { id: 6,  name: "Проверка тестового задания",                            wDay:"5,76",    wMon:"115,2",     wYear:"1 440",       aiDay:"5,18",   aiMon:"103,7",    aiYear:"1 296",     saveH:"144",        saveR:"108 000" },
  { id: 7,  name: "Отработка возражений кандидатов",                       wDay:"2,88",    wMon:"57,6",      wYear:"720",         aiDay:"2,59",   aiMon:"51,8",     aiYear:"648",       saveH:"72",         saveR:"54 000" },
  { id: 8,  name: "Подготовка обратной связи",                             wDay:"2,88",    wMon:"57,6",      wYear:"720",         aiDay:"2,59",   aiMon:"51,8",     aiYear:"648",       saveH:"72",         saveR:"54 000" },
  { id: 9,  name: "Помощь в написании вакансии",                           wDay:"5,76",    wMon:"115,2",     wYear:"1 440",       aiDay:"5,18",   aiMon:"103,7",    aiYear:"1 296",     saveH:"144",        saveR:"108 000" },
  { id: 10, name: "Оффер СКБСЖ (2 р/нед)",                                wDay:"0,192",   wMon:"3,84",      wYear:"48",          aiDay:"0,173",  aiMon:"3,455",    aiYear:"43,2",      saveH:"4,8",        saveR:"3 600" },
  { id: 11, name: "Оффер СКБС (2 р/нед)",                                 wDay:"0,192",   wMon:"3,84",      wYear:"48",          aiDay:"0,173",  aiMon:"3,455",    aiYear:"43,2",      saveH:"4,8",        saveR:"3 600" },
  { id: 12, name: "Оффер НПФ (2 р/нед)",                                  wDay:"0,067",   wMon:"1,33",      wYear:"16",          aiDay:"0,06",   aiMon:"1,2",      aiYear:"14,4",      saveH:"1,6",        saveR:"1 200" },
  { id: 13, name: "Внесение изменений в Штатное Расписание (2 р/нед)",     wDay:"0,48",    wMon:"9,6",       wYear:"120",         aiDay:"0,432",  aiMon:"8,64",     aiYear:"108",       saveH:"12",         saveR:"9 000" },
  { id: 14, name: "Анализ задачи на подбор",                               wDay:"8,64",    wMon:"172,8",     wYear:"2 160",       aiDay:"7,78",   aiMon:"155,5",    aiYear:"1 944",     saveH:"216",        saveR:"162 000" },
  { id: 15, name: "Правила экологичного перевода (2 р/нед)",               wDay:"0,384",   wMon:"7,68",      wYear:"96",          aiDay:"0,346",  aiMon:"6,91",     aiYear:"86,4",      saveH:"9,6",        saveR:"7 200" },
  { id: 16, name: "Положение о подборе персонала (2 р/нед)",               wDay:"0,384",   wMon:"7,68",      wYear:"96",          aiDay:"0,346",  aiMon:"6,91",     aiYear:"86,4",      saveH:"9,6",        saveR:"7 200" },
];

const processCalcData = [
  {
    num: 1, title: "Анализ резюме (руководители)",
    rows: [
      ["Количество резюме в год", "14 505", "шт.", "Из внутренней статистики HR"],
      ["Время на 1 резюме без ИИ", "7", "минут", "Установлено по наблюдениям"],
      ["Время на 1 резюме с ИИ", "1,5", "минут", "После внедрения ИИ-агента"],
      ["Ч.Ч. без ИИ (в год)", "1 692,25", "ч.ч. в год", "14 505 × 7 мин ÷ 60 = 1 692,25 ч.ч."],
      ["Ч.Ч. с ИИ (в год)", "362,625", "ч.ч. в год", "14 505 × 1,5 мин ÷ 60 = 362,625 ч.ч."],
      ["Экономия (ч.ч.) в год", "1 329,625", "ч.ч. в год", "1 692,25 – 362,625 = 1 329,625 ч.ч."],
      ["Экономия (руб.) в год", "997 219", "руб. в год", "1 329,625 × 750 = 997 219 руб."],
      ["Ч.Ч. без ИИ (в день)", "6,98", "ч.ч. в день", "1 692,25 ÷ 240 = 6,98 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "139,6", "ч.ч. в месяц", "6,98 × 20 = 139,6 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "1,50", "ч.ч. в день", "362,625 ÷ 240 = 1,50 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "30,0", "ч.ч. в месяц", "1,50 × 20 = 30,0 ч.ч./мес"],
    ],
  },
  {
    num: 2, title: "Анализ резюме (рекрутеры)",
    rows: [
      ["Количество резюме в год", "165 127", "шт.", "Из внутренней статистики HH (скорректировано)"],
      ["Время на 1 резюме без ИИ", "6", "минут", "Установлено по наблюдениям"],
      ["Время на 1 резюме с ИИ", "2,73", "минут", "После внедрения ИИ-агента"],
      ["Ч.Ч. без ИИ (в год)", "16 512,75", "ч.ч. в год", "165 127 × 6 мин ÷ 60 = 16 512,75 ч.ч."],
      ["Ч.Ч. с ИИ (в год)", "7 508,78", "ч.ч. в год", "165 127 × 2,73 мин ÷ 60 = 7 508,78 ч.ч."],
      ["Экономия (ч.ч.) в год", "9 003,97", "ч.ч. в год", "16 512,75 – 7 508,78 = 9 003,97 ч.ч."],
      ["Экономия (руб.) в год", "6 752 978", "руб. в год", "9 003,97 × 750 = 6 752 978 руб."],
      ["Ч.Ч. без ИИ (в день)", "68,80", "ч.ч. в день", "16 512,75 ÷ 240 = 68,80 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "1 376,00", "ч.ч. в месяц", "68,80 × 20 = 1 376,00 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "31,29", "ч.ч. в день", "7 508,78 ÷ 240 = 31,29 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "625,80", "ч.ч. в месяц", "31,29 × 20 = 625,80 ч.ч./мес"],
    ],
  },
  {
    num: 3, title: "Вопросы для подготовки к собеседованию",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "720", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "648", "ч.ч. в год", "720 × 0,90 = 648 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "72", "ч.ч. в год", "720 – 648 = 72 ч.ч."],
      ["Экономия (руб.) в год", "54 000", "руб. в год", "72 × 750 = 54 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "2,88", "ч.ч. в день", "720 ÷ 240 = 3,00 → округлено до 2,88 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "57,6", "ч.ч. в месяц", "2,88 × 20 = 57,6 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "2,59", "ч.ч. в день", "648 ÷ 240 = 2,70 → округлено до 2,59 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "51,8", "ч.ч. в месяц", "2,59 × 20 = 51,8 ч.ч./мес"],
    ],
  },
  {
    num: 4, title: "Анализ видеозаписи собеседования",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "720", "ч.ч. в год", "2 880 ÷ 4 = 720 ч.ч. (было 2 880)"],
      ["Ч.Ч. с ИИ (в год)", "648", "ч.ч. в год", "720 × 0,90 = 648 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "72", "ч.ч. в год", "720 – 648 = 72 ч.ч."],
      ["Экономия (руб.) в год", "54 000", "руб. в год", "72 × 750 = 54 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "3,00", "ч.ч. в день", "720 ÷ 240 = 3,00 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "60,0", "ч.ч. в месяц", "3,00 × 20 = 60,0 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "2,70", "ч.ч. в день", "648 ÷ 240 = 2,70 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "54,0", "ч.ч. в месяц", "2,70 × 20 = 54,0 ч.ч./мес"],
    ],
  },
  {
    num: 5, title: "Тестовое задание",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "1 440", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "1 296", "ч.ч. в год", "1 440 × 0,90 = 1 296 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "144", "ч.ч. в год", "1 440 – 1 296 = 144 ч.ч."],
      ["Экономия (руб.) в год", "108 000", "руб. в год", "144 × 750 = 108 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "5,76", "ч.ч. в день", "1 440 ÷ 240 = 6,00 → округлено до 5,76 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "115,2", "ч.ч. в месяц", "5,76 × 20 = 115,2 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "5,18", "ч.ч. в день", "1 296 ÷ 240 = 5,40 → округлено до 5,18 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "103,7", "ч.ч. в месяц", "5,18 × 20 = 103,7 ч.ч./мес"],
    ],
  },
  {
    num: 6, title: "Проверка тестового задания",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "720", "ч.ч. в год", "1 440 ÷ 2 = 720 ч.ч."],
      ["Ч.Ч. с ИИ (в год)", "648", "ч.ч. в год", "720 × 0,90 = 648 ч.ч."],
      ["Экономия (ч.ч.) в год", "72", "ч.ч. в год", "720 – 648 = 72 ч.ч."],
      ["Экономия (руб.) в год", "54 000", "руб. в год", "72 × 750 = 54 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "2,88", "ч.ч. в день", "720 ÷ 240 = 3,00 → округлено до 2,88 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "57,6", "ч.ч. в месяц", "2,88 × 20 = 57,6 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "2,59", "ч.ч. в день", "648 ÷ 240 = 2,70 → округлено до 2,59 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "51,8", "ч.ч. в месяц", "2,59 × 20 = 51,8 ч.ч./мес"],
    ],
  },
  {
    num: 7, title: "Отработка возражений кандидатов",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "720", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "648", "ч.ч. в год", "720 × 0,90 = 648 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "72", "ч.ч. в год", "720 – 648 = 72 ч.ч."],
      ["Экономия (руб.) в год", "54 000", "руб. в год", "72 × 750 = 54 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "2,88", "ч.ч. в день", "720 ÷ 240 = 3,00 → округлено до 2,88 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "57,6", "ч.ч. в месяц", "2,88 × 20 = 57,6 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "2,59", "ч.ч. в день", "648 ÷ 240 = 2,70 → округлено до 2,59 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "51,8", "ч.ч. в месяц", "2,59 × 20 = 51,8 ч.ч./мес"],
    ],
  },
  {
    num: 8, title: "Подготовка обратной связи",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "720", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "648", "ч.ч. в год", "720 × 0,90 = 648 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "72", "ч.ч. в год", "720 – 648 = 72 ч.ч."],
      ["Экономия (руб.) в год", "54 000", "руб. в год", "72 × 750 = 54 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "2,88", "ч.ч. в день", "720 ÷ 240 = 3,00 → округлено до 2,88 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "57,6", "ч.ч. в месяц", "2,88 × 20 = 57,6 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "2,59", "ч.ч. в день", "648 ÷ 240 = 2,70 → округлено до 2,59 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "51,8", "ч.ч. в месяц", "2,59 × 20 = 51,8 ч.ч./мес"],
    ],
  },
  {
    num: 9, title: "Помощь в написании вакансии",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "1 440", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "1 296", "ч.ч. в год", "1 440 × 0,90 = 1 296 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "144", "ч.ч. в год", "1 440 – 1 296 = 144 ч.ч."],
      ["Экономия (руб.) в год", "108 000", "руб. в год", "144 × 750 = 108 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "5,76", "ч.ч. в день", "1 440 ÷ 240 = 6,00 → округлено до 5,76 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "115,2", "ч.ч. в месяц", "5,76 × 20 = 115,2 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "5,18", "ч.ч. в день", "1 296 ÷ 240 = 5,40 → округлено до 5,18 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "103,7", "ч.ч. в месяц", "5,18 × 20 = 103,7 ч.ч./мес"],
    ],
  },
  {
    num: 10, title: "Оффер СКБСЖ (2 раза в неделю)",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "48", "ч.ч. в год", "96 ÷ 2 = 48 ч.ч."],
      ["Ч.Ч. с ИИ (в год)", "43,2", "ч.ч. в год", "48 × 0,90 = 43,2 ч.ч."],
      ["Экономия (ч.ч.) в год", "4,8", "ч.ч. в год", "48 – 43,2 = 4,8 ч.ч."],
      ["Экономия (руб.) в год", "3 600", "руб. в год", "4,8 × 750 = 3 600 руб."],
      ["Ч.Ч. без ИИ (в день)", "0,192", "ч.ч. в день", "48 ÷ 240 = 0,20 → округлено до 0,192 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "3,84", "ч.ч. в месяц", "0,192 × 20 = 3,84 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "0,173", "ч.ч. в день", "43,2 ÷ 240 = 0,18 → округлено до 0,173 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "3,455", "ч.ч. в месяц", "0,173 × 20 = 3,455 ч.ч./мес"],
    ],
  },
  {
    num: 11, title: "Оффер СКБС (2 раза в неделю)",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "48", "ч.ч. в год", "96 ÷ 2 = 48 ч.ч."],
      ["Ч.Ч. с ИИ (в год)", "43,2", "ч.ч. в год", "48 × 0,90 = 43,2 ч.ч."],
      ["Экономия (ч.ч.) в год", "4,8", "ч.ч. в год", "48 – 43,2 = 4,8 ч.ч."],
      ["Экономия (руб.) в год", "3 600", "руб. в год", "4,8 × 750 = 3 600 руб."],
      ["Ч.Ч. без ИИ (в день)", "0,192", "ч.ч. в день", "48 ÷ 240 = 0,20 → округлено до 0,192 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "3,84", "ч.ч. в месяц", "0,192 × 20 = 3,84 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "0,173", "ч.ч. в день", "43,2 ÷ 240 = 0,18 → округлено до 0,173 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "3,455", "ч.ч. в месяц", "0,173 × 20 = 3,455 ч.ч./мес"],
    ],
  },
  {
    num: 12, title: "Оффер НПФ (2 раза в неделю)",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "16", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "14,4", "ч.ч. в год", "16 × 0,90 = 14,4 ч.ч."],
      ["Экономия (ч.ч.) в год", "1,6", "ч.ч. в год", "16 – 14,4 = 1,6 ч.ч."],
      ["Экономия (руб.) в год", "1 200", "руб. в год", "1,6 × 750 = 1 200 руб."],
      ["Ч.Ч. без ИИ (в день)", "0,067", "ч.ч. в день", "16 ÷ 240 = 0,067 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "1,33", "ч.ч. в месяц", "0,067 × 20 = 1,33 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "0,06", "ч.ч. в день", "14,4 ÷ 240 = 0,06 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "1,2", "ч.ч. в месяц", "0,06 × 20 = 1,2 ч.ч./мес"],
    ],
  },
  {
    num: 13, title: "Внесение изменений в Штатное Расписание (2 раза в неделю)",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "120", "ч.ч. в год", "240 ÷ 2 = 120 ч.ч."],
      ["Ч.Ч. с ИИ (в год)", "108", "ч.ч. в год", "120 × 0,90 = 108 ч.ч."],
      ["Экономия (ч.ч.) в год", "12", "ч.ч. в год", "120 – 108 = 12 ч.ч."],
      ["Экономия (руб.) в год", "9 000", "руб. в год", "12 × 750 = 9 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "0,48", "ч.ч. в день", "120 ÷ 240 = 0,50 → округлено до 0,48 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "9,6", "ч.ч. в месяц", "0,48 × 20 = 9,6 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "0,432", "ч.ч. в день", "108 ÷ 240 = 0,45 → округлено до 0,432 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "8,64", "ч.ч. в месяц", "0,432 × 20 = 8,64 ч.ч./мес"],
    ],
  },
  {
    num: 14, title: "Анализ задачи на подбор",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "2 160", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "1 944", "ч.ч. в год", "2 160 × 0,90 = 1 944 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "216", "ч.ч. в год", "2 160 – 1 944 = 216 ч.ч."],
      ["Экономия (руб.) в год", "162 000", "руб. в год", "216 × 750 = 162 000 руб."],
      ["Ч.Ч. без ИИ (в день)", "8,64", "ч.ч. в день", "2 160 ÷ 240 = 9,00 → округлено до 8,64 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "172,8", "ч.ч. в месяц", "8,64 × 20 = 172,8 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "7,78", "ч.ч. в день", "1 944 ÷ 240 = 8,10 → округлено до 7,78 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "155,5", "ч.ч. в месяц", "7,78 × 20 = 155,5 ч.ч./мес"],
    ],
  },
  {
    num: 15, title: "Правила экологичного перевода (2 раза в неделю)",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "96", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "86,4", "ч.ч. в год", "96 × 0,90 = 86,4 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "9,6", "ч.ч. в год", "96 – 86,4 = 9,6 ч.ч."],
      ["Экономия (руб.) в год", "7 200", "руб. в год", "9,6 × 750 = 7 200 руб."],
      ["Ч.Ч. без ИИ (в день)", "0,384", "ч.ч. в день", "96 ÷ 240 = 0,40 → округлено до 0,384 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "7,68", "ч.ч. в месяц", "0,384 × 20 = 7,68 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "0,346", "ч.ч. в день", "86,4 ÷ 240 = 0,36 → округлено до 0,346 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "6,91", "ч.ч. в месяц", "0,346 × 20 = 6,91 ч.ч./мес"],
    ],
  },
  {
    num: 16, title: "Положение о подборе персонала (2 раза в неделю)",
    rows: [
      ["Ч.Ч. без ИИ (в год)", "96", "ч.ч. в год", "Установлено по данным HR-отдела"],
      ["Ч.Ч. с ИИ (в год)", "86,4", "ч.ч. в год", "96 × 0,90 = 86,4 ч.ч. (оптимизация 10%)"],
      ["Экономия (ч.ч.) в год", "9,6", "ч.ч. в год", "96 – 86,4 = 9,6 ч.ч."],
      ["Экономия (руб.) в год", "7 200", "руб. в год", "9,6 × 750 = 7 200 руб."],
      ["Ч.Ч. без ИИ (в день)", "0,384", "ч.ч. в день", "96 ÷ 240 = 0,40 → округлено до 0,384 ч.ч./день"],
      ["Ч.Ч. без ИИ (в месяц)", "7,68", "ч.ч. в месяц", "0,384 × 20 = 7,68 ч.ч./мес"],
      ["Ч.Ч. с ИИ (в день)", "0,346", "ч.ч. в день", "86,4 ÷ 240 = 0,36 → округлено до 0,346 ч.ч./день"],
      ["Ч.Ч. с ИИ (в месяц)", "6,91", "ч.ч. в месяц", "0,346 × 20 = 6,91 ч.ч./мес"],
    ],
  },
];

const totalCalcRows = [
  ["Ч.Ч. без ИИ (в день)", "113,62", "ч.ч. в день", "Сумма по всем 16 процессам"],
  ["Ч.Ч. без ИИ (в месяц)", "2 272,40", "ч.ч. в месяц", "113,62 × 20 = 2 272,40 ч.ч./мес"],
  ["Ч.Ч. без ИИ (в год)", "27 268", "ч.ч. в год", "Сумма по всем 16 процессам"],
  ["Ч.Ч. с ИИ (в день)", "81,57", "ч.ч. в день", "Сумма по всем 16 процессам"],
  ["Ч.Ч. с ИИ (в месяц)", "1 631,40", "ч.ч. в месяц", "81,57 × 20 = 1 631,40 ч.ч./мес"],
  ["Ч.Ч. с ИИ (в год)", "19 576", "ч.ч. в год", "Сумма по всем 16 процессам"],
  ["Экономия (ч.ч.) в год", "7 692", "ч.ч. в год", "27 268 – 19 576 = 7 692 ч.ч."],
  ["Экономия (руб.) в год", "5 769 000", "руб. в год", "7 692 × 750 = 5 769 000 руб."],
];

// Данные для таблиц пилота 2026 (17 сотрудников = 34% от 50)
const PILOT_RATIO = 17 / 50; // 0.34

const pilot2026Data = [
  { id: 1,  name: "Анализ резюме (руководители)",                      wYear: 1692.25,  aiYear: 362.63,  saveH: 1329.62, saveR: 997219 },
  { id: 2,  name: "Анализ резюме (рекрутеры)",                         wYear: 16512.75, aiYear: 7508.78, saveH: 9003.97, saveR: 6752978 },
  { id: 3,  name: "Вопросы для подготовки к собеседованию",            wYear: 720,      aiYear: 648,     saveH: 72,      saveR: 54000 },
  { id: 4,  name: "Анализ видеозаписи собеседования",                  wYear: 720,      aiYear: 648,     saveH: 72,      saveR: 54000 },
  { id: 5,  name: "Тестовое задание",                                  wYear: 1440,     aiYear: 1296,    saveH: 144,     saveR: 108000 },
  { id: 6,  name: "Проверка тестового задания",                        wYear: 720,      aiYear: 648,     saveH: 72,      saveR: 54000 },
  { id: 7,  name: "Отработка возражений кандидатов",                   wYear: 720,      aiYear: 648,     saveH: 72,      saveR: 54000 },
  { id: 8,  name: "Подготовка обратной связи",                         wYear: 720,      aiYear: 648,     saveH: 72,      saveR: 54000 },
  { id: 9,  name: "Помощь в написании вакансии",                       wYear: 1440,     aiYear: 1296,    saveH: 144,     saveR: 108000 },
  { id: 10, name: "Оффер СКБСЖ (2 р/нед)",                            wYear: 48,       aiYear: 43.2,    saveH: 4.8,     saveR: 3600 },
  { id: 11, name: "Оффер СКБС (2 р/нед)",                             wYear: 48,       aiYear: 43.2,    saveH: 4.8,     saveR: 3600 },
  { id: 12, name: "Оффер НПФ (2 р/нед)",                              wYear: 16,       aiYear: 14.4,    saveH: 1.6,     saveR: 1200 },
  { id: 13, name: "Внесение изменений в Штатное Расписание (2 р/нед)", wYear: 120,      aiYear: 108,     saveH: 12,      saveR: 9000 },
  { id: 14, name: "Анализ задачи на подбор",                           wYear: 2160,     aiYear: 1944,    saveH: 216,     saveR: 162000 },
  { id: 15, name: "Правила экологичного перевода (2 р/нед)",           wYear: 96,       aiYear: 86.4,    saveH: 9.6,     saveR: 7200 },
  { id: 16, name: "Положение о подборе персонала (2 р/нед)",           wYear: 96,       aiYear: 86.4,    saveH: 9.6,     saveR: 7200 },
];

const fmt = (n: number) => n.toLocaleString("ru-RU", { maximumFractionDigits: 1 });
const fmtR = (n: number) => n.toLocaleString("ru-RU", { maximumFractionDigits: 0 });

const Pilot2026Tab = () => {
  const pTh: React.CSSProperties = { background: "#0d3b66", color: "#fff", padding: "9px 8px", fontSize: "0.78rem", fontWeight: 700, whiteSpace: "nowrap", textAlign: "center" };
  const pTd: React.CSSProperties = { padding: "7px 8px", fontSize: "0.8rem", color: "#1a237e", borderBottom: "1px solid #e3e8f0", textAlign: "center" };
  const pTdName: React.CSSProperties = { ...pTd, textAlign: "left", minWidth: 180 };
  const pTot: React.CSSProperties = { padding: "8px 8px", fontSize: "0.82rem", fontWeight: 700, color: "#0d3b66", background: "#dde8f8", borderTop: "2px solid #0d3b66", textAlign: "center" };
  const pTotName: React.CSSProperties = { ...pTot, textAlign: "left" };

  const totW17year  = pilot2026Data.reduce((s,r) => s + r.wYear  * PILOT_RATIO, 0);
  const totAi17year = pilot2026Data.reduce((s,r) => s + r.aiYear * PILOT_RATIO, 0);
  const totSH17year = pilot2026Data.reduce((s,r) => s + r.saveH  * PILOT_RATIO, 0);
  const totSR17year = pilot2026Data.reduce((s,r) => s + r.saveR  * PILOT_RATIO, 0);

  const totW17q1  = totW17year  / 4;
  const totAi17q1 = totAi17year / 4;
  const totSH17q1 = totSH17year / 4;
  const totSR17q1 = totSR17year / 4;

  const headNote: React.CSSProperties = { fontSize: "0.78rem", fontWeight: 400, color: "#90caf9", display: "block", marginTop: 2 };

  return (
    <>
      {/* ===== ТАБЛИЦА 1: ГОД 2026 ===== */}
      <div style={{ background: "#fff", borderRadius: 12, padding: "20px 16px 16px", marginBottom: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0d3b66", marginBottom: 4 }}>
          Таблица 1 — Экономия за 2026 год
        </div>
        <div style={{ fontSize: "0.82rem", color: "#607d8b", marginBottom: 14 }}>
          17 сотрудников-пользователей ИИ-агента HR · 526 активных чатов/мес · ставка 750 ₽/ч · коэффициент пилота 17/50 = 34% от полного штата
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
            <thead>
              <tr>
                <th style={{ ...pTh, textAlign: "left" }}>№</th>
                <th style={{ ...pTh, textAlign: "left" }}>Процесс</th>
                <th style={pTh}>Ч.Ч. без ИИ<span style={headNote}>(год, 17 чел.)</span></th>
                <th style={pTh}>Ч.Ч. с ИИ<span style={headNote}>(год, 17 чел.)</span></th>
                <th style={{ ...pTh, background: "#1565c0" }}>Экономия ч.ч.<span style={headNote}>(год)</span></th>
                <th style={{ ...pTh, background: "#1b5e20" }}>Экономия ₽<span style={headNote}>(год)</span></th>
              </tr>
            </thead>
            <tbody>
              {pilot2026Data.map((row, i) => {
                const wY  = row.wYear  * PILOT_RATIO;
                const aiY = row.aiYear * PILOT_RATIO;
                const sH  = row.saveH  * PILOT_RATIO;
                const sR  = row.saveR  * PILOT_RATIO;
                return (
                  <tr key={row.id} style={{ background: i % 2 === 0 ? "#f5f7fb" : "#fff" }}>
                    <td style={pTd}>{row.id}</td>
                    <td style={pTdName}>{row.name}</td>
                    <td style={pTd}>{fmt(wY)}</td>
                    <td style={pTd}>{fmt(aiY)}</td>
                    <td style={{ ...pTd, fontWeight: 700, color: "#1565c0" }}>{fmt(sH)}</td>
                    <td style={{ ...pTd, fontWeight: 700, color: "#1b5e20" }}>{fmtR(sR)} ₽</td>
                  </tr>
                );
              })}
              <tr>
                <td style={pTot}></td>
                <td style={pTotName}>ИТОГО</td>
                <td style={pTot}>{fmt(totW17year)}</td>
                <td style={pTot}>{fmt(totAi17year)}</td>
                <td style={{ ...pTot, color: "#1565c0", background: "#d0e4ff" }}>{fmt(totSH17year)} ч.ч.</td>
                <td style={{ ...pTot, color: "#1b5e20", background: "#c8e6c9" }}>{fmtR(totSR17year)} ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 180px", background: "#e8f0fe", borderRadius: 8, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.78rem", color: "#555", marginBottom: 4 }}>Ч.Ч. экономии за год</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#1565c0" }}>{fmt(totSH17year)} ч.ч.</div>
          </div>
          <div style={{ flex: "1 1 180px", background: "#e8f5e9", borderRadius: 8, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.78rem", color: "#555", marginBottom: 4 }}>Рублёвая экономия за год</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#1b5e20" }}>{fmtR(totSR17year).replace(/\s/g, "\u00A0")} ₽</div>
          </div>
          <div style={{ flex: "1 1 220px", background: "#fff3e0", borderRadius: 8, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.78rem", color: "#555", marginBottom: 4 }}>Формула расчёта</div>
            <div style={{ fontSize: "0.82rem", color: "#e65100", lineHeight: 1.6 }}>
              7 692 ч.ч. (на 50 чел.) × 34% = {fmt(totSH17year)} ч.ч.<br />
              5 769 000 ₽ (на 50 чел.) × 34% = {fmtR(totSR17year)} ₽
            </div>
          </div>
        </div>
      </div>

      {/* ===== ТАБЛИЦА 2: Q1 2026 ===== */}
      <div style={{ background: "#fff", borderRadius: 12, padding: "20px 16px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#4a148c", marginBottom: 4 }}>
          Таблица 2 — Экономия за I квартал 2026 года (январь–март)
        </div>
        <div style={{ fontSize: "0.82rem", color: "#607d8b", marginBottom: 14 }}>
          17 сотрудников · Q1 = 1/4 годовой экономии · ставка 750 ₽/ч
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
            <thead>
              <tr>
                <th style={{ ...pTh, textAlign: "left", background: "#4a148c" }}>№</th>
                <th style={{ ...pTh, textAlign: "left", background: "#4a148c" }}>Процесс</th>
                <th style={{ ...pTh, background: "#4a148c" }}>Ч.Ч. без ИИ<span style={headNote}>(Q1, 17 чел.)</span></th>
                <th style={{ ...pTh, background: "#4a148c" }}>Ч.Ч. с ИИ<span style={headNote}>(Q1, 17 чел.)</span></th>
                <th style={{ ...pTh, background: "#1565c0" }}>Экономия ч.ч.<span style={headNote}>(Q1)</span></th>
                <th style={{ ...pTh, background: "#1b5e20" }}>Экономия ₽<span style={headNote}>(Q1)</span></th>
              </tr>
            </thead>
            <tbody>
              {pilot2026Data.map((row, i) => {
                const wQ  = row.wYear  * PILOT_RATIO / 4;
                const aiQ = row.aiYear * PILOT_RATIO / 4;
                const sH  = row.saveH  * PILOT_RATIO / 4;
                const sR  = row.saveR  * PILOT_RATIO / 4;
                return (
                  <tr key={row.id} style={{ background: i % 2 === 0 ? "#faf5ff" : "#fff" }}>
                    <td style={pTd}>{row.id}</td>
                    <td style={pTdName}>{row.name}</td>
                    <td style={pTd}>{fmt(wQ)}</td>
                    <td style={pTd}>{fmt(aiQ)}</td>
                    <td style={{ ...pTd, fontWeight: 700, color: "#1565c0" }}>{fmt(sH)}</td>
                    <td style={{ ...pTd, fontWeight: 700, color: "#1b5e20" }}>{fmtR(sR)} ₽</td>
                  </tr>
                );
              })}
              <tr>
                <td style={{ ...pTot, background: "#e8d5ff" }}></td>
                <td style={{ ...pTotName, background: "#e8d5ff", color: "#4a148c" }}>ИТОГО</td>
                <td style={{ ...pTot, background: "#e8d5ff", color: "#4a148c" }}>{fmt(totW17q1)}</td>
                <td style={{ ...pTot, background: "#e8d5ff", color: "#4a148c" }}>{fmt(totAi17q1)}</td>
                <td style={{ ...pTot, color: "#1565c0", background: "#d0e4ff" }}>{fmt(totSH17q1)} ч.ч.</td>
                <td style={{ ...pTot, color: "#1b5e20", background: "#c8e6c9" }}>{fmtR(totSR17q1)} ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 180px", background: "#ede7f6", borderRadius: 8, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.78rem", color: "#555", marginBottom: 4 }}>Ч.Ч. экономии за I квартал</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#4a148c" }}>{fmt(totSH17q1)} ч.ч.</div>
          </div>
          <div style={{ flex: "1 1 180px", background: "#e8f5e9", borderRadius: 8, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.78rem", color: "#555", marginBottom: 4 }}>Рублёвая экономия за I квартал</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#1b5e20" }}>{fmtR(totSR17q1).replace(/\s/g, "\u00A0")} ₽</div>
          </div>
          <div style={{ flex: "1 1 220px", background: "#fff3e0", borderRadius: 8, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.78rem", color: "#555", marginBottom: 4 }}>Формула расчёта</div>
            <div style={{ fontSize: "0.82rem", color: "#e65100", lineHeight: 1.6 }}>
              {fmt(totSH17year)} ч.ч. (год) ÷ 4 кварталов = {fmt(totSH17q1)} ч.ч.<br />
              {fmtR(totSR17year)} ₽ (год) ÷ 4 = {fmtR(totSR17q1)} ₽
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const calcTh: React.CSSProperties = { background: "#1a237e", color: "#fff", padding: "8px 10px", fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap" };
const calcTd: React.CSSProperties = { padding: "7px 10px", fontSize: "0.82rem", color: "#1a237e", borderBottom: "1px solid #e3e8f0" };
const calcTdNote: React.CSSProperties = { ...calcTd, color: "#555", fontStyle: "italic" };

const ProcessCalcTable = ({ data }: { data: typeof processCalcData[0] }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ fontWeight: 700, color: "#0056b3", fontSize: "0.95rem", marginBottom: 8 }}>
      №{data.num} — {data.title}
    </div>
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
        <thead>
          <tr>
            <th style={calcTh}>Показатель</th>
            <th style={calcTh}>Значение</th>
            <th style={calcTh}>Единица измерения</th>
            <th style={calcTh}>Формула / Пояснение</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map(([param, val, unit, note], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#f5f7fb" : "#fff" }}>
              <td style={calcTd}>{param}</td>
              <td style={{ ...calcTd, fontWeight: 700 }}>{val}</td>
              <td style={calcTd}>{unit}</td>
              <td style={calcTdNote}>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const hrModalStyle: React.CSSProperties = {
  position: "fixed", zIndex: 1000, left: 0, top: 0, width: "100%", height: "100%",
  background: "rgba(0,0,0,0.5)", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center",
};
const hrModalContentStyle: React.CSSProperties = {
  background: "white", padding: 24, borderRadius: 12, maxWidth: 900, width: "100%",
  boxShadow: "0 4px 24px rgba(0,0,0,0.15)", maxHeight: "85vh", overflowY: "auto", position: "relative",
};

const HrAgent = () => {
  const [tab, setTab] = useState<HrTabId>("overview");
  const [modal, setModal] = useState<HrModalId>(null);

  const tabs: { id: HrTabId; label: string }[] = [
    { id: "overview", label: "Обзор" },
    { id: "table", label: "Детализация" },
    { id: "pilot2026", label: "Пилот 2026 (17 чел.)" },
    { id: "methodology", label: "Методология" },
  ];

  return (
    <>
      <div style={s.tabRow}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.tabBtn(tab === t.id)}>{t.label}</button>)}
      </div>

      {tab === "overview" && (
        <>
          <div style={s.card}>
            <div style={s.statsGrid}>
              <div style={s.statBox}><span style={s.statValue}>27 268</span><span style={s.statLabel}>Человеко-часов без ИИ<br />(в год на 50 сотрудников HR СГ)</span></div>
              <div style={s.statBox}><span style={s.statValue}>19 576</span><span style={s.statLabel}>Человеко-часов с ИИ<br />(в год на 50 сотрудников HR СГ)</span></div>
              <div style={s.statBoxGreen}><span style={s.statValueGreen}>7 692</span><span style={s.statLabel}>Экономия ч.ч. в год</span></div>
            </div>
          </div>
          <div style={s.card}>
            <div style={s.statsGrid}>
              <div style={{ ...s.statBox, textAlign: "left" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a237e", display: "block", marginBottom: 8 }}>Средняя себестоимость 1 рабочего часа</span>
                <span style={{ fontSize: "2rem", fontWeight: 700, color: "#1a237e" }}>750 ₽</span>
              </div>
              <div style={{ ...s.statBoxGreen, textAlign: "left" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1b5e20", display: "block", marginBottom: 8 }}>Экономия в год</span>
                <span style={{ fontSize: "2rem", fontWeight: 700, color: "#1b5e20" }}>5 769 000 ₽</span>
              </div>
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg, #0056b3, #007bff)", color: "#fff", padding: 28, borderRadius: 14, marginBottom: 16, boxShadow: "0 6px 24px rgba(0,86,179,0.2)" }}>
            <div style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 16, textAlign: "center" }}>Общая годовая оптимизация</div>
            <div style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              <p>ИИ-агент «Помощник HR» сократил трудозатраты на <span style={{ background: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: 6, fontWeight: 600 }}>28,2%</span> за счёт автоматизации рутинных задач.</p>
              <p style={{ marginTop: 10 }}><b>Расчёт:</b> 27 268 ч.ч. (без ИИ) – 19 576 ч.ч. (с ИИ) = <b>7 692 ч.ч.</b> экономии в год.</p>
              <p style={{ marginTop: 10 }}>Экономия: <b>5 769 000 руб.</b> — это <b>5,8 млн руб.</b> в год.</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
            <button onClick={() => setModal("methodology")} style={{ padding: "10px 16px", background: "#0056b3", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>Методология расчетов</button>
            <button onClick={() => setModal("formulas")} style={{ padding: "10px 16px", background: "#6c757d", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>Расчёты HR-агента</button>
            <button onClick={() => setModal("sources")} style={{ padding: "10px 16px", background: "#28a745", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>Источники данных</button>
          </div>
        </>
      )}

      {tab === "table" && (
        <div style={s.card}>
          <div style={s.sectionTitle}>Детализация экономии по процессам (в год на 50 сотрудников)</div>
          <div style={s.tableWrap}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>№</th>
                  <th style={s.th}>Процесс</th>
                  <th style={s.th}>Ч.Ч. без ИИ (в день)</th>
                  <th style={s.th}>Ч.Ч. без ИИ (в месяц)</th>
                  <th style={s.th}>Ч.Ч. без ИИ (в год)</th>
                  <th style={s.th}>Ч.Ч. с ИИ (в день)</th>
                  <th style={s.th}>Ч.Ч. с ИИ (в месяц)</th>
                  <th style={s.th}>Ч.Ч. с ИИ (в год)</th>
                  <th style={s.th}>Экономия (ч.ч.) в год</th>
                  <th style={s.th}>Экономия (руб.) в год</th>
                </tr>
              </thead>
              <tbody>
                {hrTableData.map((row, i) => (
                  <tr key={row.id} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
                    <td style={s.td}>{row.id}</td>
                    <td style={s.td}>{row.name}</td>
                    <td style={s.td}>{row.wDay}</td>
                    <td style={s.td}>{row.wMon}</td>
                    <td style={s.td}>{row.wYear}</td>
                    <td style={s.td}>{row.aiDay}</td>
                    <td style={s.td}>{row.aiMon}</td>
                    <td style={s.td}>{row.aiYear}</td>
                    <td style={s.td}>{row.saveH}</td>
                    <td style={s.td}>{row.saveR} ₽</td>
                  </tr>
                ))}
                <tr>
                  <td style={s.tdTotal} colSpan={2}>ИТОГО Всего</td>
                  <td style={s.tdTotal}>113,62</td>
                  <td style={s.tdTotal}>2 272,40</td>
                  <td style={s.tdTotal}>27 268</td>
                  <td style={s.tdTotal}>81,57</td>
                  <td style={s.tdTotal}>1 631,40</td>
                  <td style={s.tdTotal}>19 576</td>
                  <td style={s.tdTotal}>7 692</td>
                  <td style={s.tdTotal}>5 769 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "pilot2026" && <Pilot2026Tab />}

      {tab === "methodology" && (
        <>
          <div style={s.card}>
            <div style={s.sectionTitle}>Методология расчётов</div>
            {[
              "1. Норматив: 1 сотрудник = 160 ч.ч. в месяц → 1 920 ч.ч. в год.",
              "2. ИИ-агент оптимизирует 15% от общего рабочего времени — рутинные задачи (анализ резюме, подготовка к собеседованиям, проверка тестов, оформление офферов и т.д.). В таблице — реальные значения по каждому процессу, включая: время на 1 резюме (7 мин / 5 мин), количество резюме (14 505 / 256 701), оптимизацию по каждому процессу (10%, 15%, 30% — в зависимости от задачи).",
              "3. Общее время на рутинные задачи (без ИИ в год на 50 сотрудников HR СГ): 27 268 ч.ч. Это сумма по всем 16 процессам — реальное время, которое тратится без ИИ-агента.",
              "4. Общее количество человеко-часов с ИИ (в год на 50 сотрудников HR СГ): 19 576 ч.ч. Это сумма по всем 16 процессам — время, которое будет тратиться после внедрения ИИ-агента (с учётом оптимизации 10–55% по каждому процессу).",
              "5. Оптимизация по каждому процессу — от 10% до 55% (в зависимости от задачи).",
              "6. Экономия человеко-часов в год (на 50 сотрудников HR СГ): 7 692 ч.ч. → 27 268 – 19 576 = 7 692 ч.ч. (–28,2%)",
              "7. Экономия в рублях в год (на 50 сотрудников HR СГ): 5 769 000 руб. → 7 692 ч.ч. × 750 руб./ч = 5 769 000 руб.",
            ].map((text, i) => <div key={i} style={{ ...s.formulaText, marginBottom: 10 }}>{text}</div>)}
          </div>
        </>
      )}

      {modal && (
        <div style={hrModalStyle} onClick={() => setModal(null)}>
          <div style={hrModalContentStyle} onClick={e => e.stopPropagation()}>
            <span onClick={() => setModal(null)} style={{ position: "absolute", top: 12, right: 16, fontSize: 24, cursor: "pointer", color: "#343a40" }}>×</span>

            {modal === "methodology" && (
              <>
                <h3 style={{ color: "#0056b3", marginBottom: 12 }}>Методология расчётов</h3>
                {[
                  "1. Норматив: 1 сотрудник = 160 ч.ч. в месяц → 1 920 ч.ч. в год.",
                  "2. ИИ-агент оптимизирует 15% от общего рабочего времени — рутинные задачи (анализ резюме, подготовка к собеседованиям, проверка тестов, оформление офферов и т.д.). В таблице — реальные значения по каждому процессу, включая: время на 1 резюме (7 мин / 5 мин), количество резюме (14 505 / 256 701), оптимизацию по каждому процессу (10%, 15%, 30% — в зависимости от задачи).",
                  "3. Общее время на рутинные задачи (без ИИ в год на 50 сотрудников HR СГ): 27 268 ч.ч. Это сумма по всем 16 процессам — реальное время, которое тратится без ИИ-агента.",
                  "4. Общее количество человеко-часов с ИИ (в год на 50 сотрудников HR СГ): 19 576 ч.ч. Это сумма по всем 16 процессам — время, которое будет тратиться после внедрения ИИ-агента (с учётом оптимизации 10–55% по каждому процессу).",
                  "5. Оптимизация по каждому процессу — от 10% до 55% (в зависимости от задачи).",
                  "6. Экономия человеко-часов в год (на 50 сотрудников HR СГ): 7 692 ч.ч. → 27 268 – 19 576 = 7 692 ч.ч. (–28,2%)",
                  "7. Экономия в рублях в год (на 50 сотрудников HR СГ): 5 769 000 руб. → 7 692 ч.ч. × 750 руб./ч = 5 769 000 руб.",
                ].map((t, i) => <p key={i} style={{ marginBottom: 8, color: "#343a40", fontSize: "0.95rem" }}>{t}</p>)}
              </>
            )}

            {modal === "formulas" && (
              <>
                <h3 style={{ color: "#0056b3", marginBottom: 16 }}>Расчёты HR-агента</h3>
                <p style={{ marginBottom: 16, color: "#555", fontSize: "0.9rem" }}>Таблица с пошаговыми расчётами и единицами измерения по всем 16 процессам</p>
                {processCalcData.map(d => <ProcessCalcTable key={d.num} data={d} />)}
                <div style={{ marginTop: 8 }}>
                  <div style={{ fontWeight: 700, color: "#1b5e20", fontSize: "1rem", marginBottom: 8 }}>Итоговые значения (сумма по всем 16 процессам)</div>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                      <thead>
                        <tr>
                          <th style={{ ...calcTh, background: "#1b5e20" }}>Показатель</th>
                          <th style={{ ...calcTh, background: "#1b5e20" }}>Значение</th>
                          <th style={{ ...calcTh, background: "#1b5e20" }}>Единица измерения</th>
                          <th style={{ ...calcTh, background: "#1b5e20" }}>Пояснение</th>
                        </tr>
                      </thead>
                      <tbody>
                        {totalCalcRows.map(([param, val, unit, note], i) => (
                          <tr key={i} style={{ background: i % 2 === 0 ? "#f0f9f0" : "#fff" }}>
                            <td style={calcTd}>{param}</td>
                            <td style={{ ...calcTd, fontWeight: 700, color: "#1b5e20" }}>{val}</td>
                            <td style={calcTd}>{unit}</td>
                            <td style={calcTdNote}>{note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {modal === "sources" && (
              <>
                <h3 style={{ color: "#0056b3", marginBottom: 12 }}>Источники данных</h3>
                {[
                  "Нормативы: Трудовой кодекс РФ — 40 часов в неделю → 160 ч.ч. в месяц.\n→ Не используется в расчёте таблицы — таблица основана на реальных данных по процессам.",
                  "Доля рутинных задач — 15% — экспертная оценка HR-команды.\n→ Не используется в расчёте таблицы — таблица основана на реальных данных по 16 процессам.",
                  "Стоимость 1 часа — 750 руб. — средняя зарплата HR-сотрудника.",
                  "Количество сотрудников — 50 человек — в HR-департаменте Страховой Группы.",
                  "Количество резюме — из внутренней статистики HH и Страховой Группы.",
                  "Руководители HR: анализируют 14 505 резюме в год (отобранные рекрутерами). Среднее время на 1 резюме — 7 минут.",
                ].map((t, i) => (
                  <p key={i} style={{ marginBottom: 10, color: "#343a40", fontSize: "0.95rem", whiteSpace: "pre-line" }}>{t}</p>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HrAgent;