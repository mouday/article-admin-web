import dayjs from 'dayjs'
import cronParser from 'cron-parser'
import { isValidCron } from 'cron-validator'

export function isValidCronExpression(cronExpression: string) {
  return isValidCron(cronExpression, {
    seconds: true,
    allowBlankDay: true,
  })
}

/**
 * 获取执行计划
 * @param {*} cronExpression
 * @returns
 */
export function getCrontabSchedule(cronExpression: string) {
  if (!isValidCronExpression(cronExpression)) {
    return []
  }

  let list = []

  try {
    let interval = cronParser.parseExpression(cronExpression)

    for (let i = 0; i < 5; i++) {
      let next = dayjs(interval.next().toString()).format('YYYY-MM-DD HH:mm:ss')
      list.push(next)
    }
  } catch (e) {
    console.log(e)
  }

  return list
}
