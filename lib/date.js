import dayjs from "dayjs";

import "dayjs/locale/ko";

dayjs.locale("ko");

export const now = dayjs();

export const date = (date, format = "YYYY.MM.DD") => dayjs(date).format(format);

export const dateDiff = (date, diffDate, until) =>
  dayjs(date).diff(diffDate, until);
