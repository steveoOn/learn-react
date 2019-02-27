import * as moment from 'moment'
import 'moment/locale/zh-cn'

export const Notification = {
  today: {
    contents: [
      {
        text:
          '你的劳动合同编号 2018092625553 马上到期了！内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样式内容特别长超出了的显示样',
        date: moment().format('L'),
        time: moment()
          .startOf('hour')
          .fromNow(),
      },
      {
        text: '本月薪资已发放。两行文字效果，两行文字效果两行文字效果',
        date: moment().format('L'),
        time: moment()
          .startOf('hour')
          .fromNow(),
      },
      {
        text: '你的同事李晓明刚刚转正了！',
        date: moment().format('L'),
        time: moment()
          .startOf('day')
          .fromNow(),
      },
    ],
  },
  early: {
    contents: [
      {
        text: '这是一条稍早的消息，按时间排序',
        date: moment('20190113').format('L'),
        time: moment('20190113')
          .startOf('day')
          .fromNow(),
      },
      {
        text: '这是一条稍早的消息',
        date: moment('20181123').format('L'),
        time: moment('20181123')
          .startOf('day')
          .fromNow(),
      },
    ],
  },
}

export const Todo = {
  today: {
    contents: [
      {
        text: 'OT-8547 表单需要你审批，点击表单号查看',
        barTitle: '待办',
      },
      {
        text: 'ED-283 表单需要你审批，点击表单号查看',
        barTitle: '待办',
      },
    ],
  },
  early: {
    contents: [
      {
        text: 'Leave-583 表单需要你审批，点击表单号查看',
        barTitle: '待办',
      },
      {
        text: 'Leave-5395 表单需要你审批，点击表单号查看',
        barTitle: '待办',
      },
    ],
  },
}
