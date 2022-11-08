import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; // обработка ошибок
import notify from "gulp-notify"; // сообщения(подсказки)
import newer from "gulp-newer" // проверка обновления
import ifPlugin from "gulp-if"; // условное ответвление

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    newer: newer,
    if: ifPlugin
}

